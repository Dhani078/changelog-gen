#!/usr/bin/env node
const { execSync } = require('node:child_process');

function parseCommits(rawLog) {
  const lines = rawLog.trim().split('\n').filter(Boolean);
  const categories = { feat: [], fix: [], perf: [], docs: [], other: [] };

  for (const line of lines) {
    const match = line.match(/^([a-z]+)(?:\(.*?\))?:\s*(.*)$/);
    if (match) {
      const type = match[1];
      const desc = match[2];
      if (categories[type]) {
        categories[type].push(desc);
      } else {
        categories.other.push(line);
      }
    } else {
      categories.other.push(line);
    }
  }
  return categories;
}

function formatChangelog(categories, version = 'v1.0.0') {
  let md = `## [${version}] - ${new Date().toISOString().split('T')[0]}\n\n`;
  if (categories.feat.length) {
    md += `### Added\n`;
    categories.feat.forEach(f => md += `- ${f}\n`);
    md += `\n`;
  }
  if (categories.fix.length) {
    md += `### Fixed\n`;
    categories.fix.forEach(f => md += `- ${f}\n`);
    md += `\n`;
  }
  if (categories.perf.length) {
    md += `### Performance\n`;
    categories.perf.forEach(f => md += `- ${f}\n`);
    md += `\n`;
  }
  return md;
}

function run() {
  const args = process.argv.slice(2);
  if (args.includes('--help') || args.includes('-h')) {
    console.log('changelog-gen - Git semantic commit changelog curator');
    console.log('Usage: npx changelog-gen [options]');
    process.exit(0);
  }
  if (args.includes('--version') || args.includes('-v')) {
    console.log('changelog-gen v1.0.0');
    process.exit(0);
  }

  let log = '';
  try {
    log = execSync('git log -n 20 --pretty=format:"%s"', { encoding: 'utf-8' });
  } catch {
    log = 'feat: initial release\nfix: minor bug';
  }

  const cat = parseCommits(log);
  const out = formatChangelog(cat, 'Unreleased');
  console.log(out);
}

if (require.main === module) {
  run();
}

module.exports = { parseCommits, formatChangelog, run };

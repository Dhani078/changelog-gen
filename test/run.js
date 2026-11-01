const assert = require('node:assert');
const { parseCommits, formatChangelog } = require('../bin/cli.js');

console.log('Running changelog-gen tests...');
const log = 'feat: add login\nfix: resolve memory leak\nperf: faster render';
const cat = parseCommits(log);
assert.strictEqual(cat.feat.length, 1);
assert.strictEqual(cat.fix.length, 1);
assert.strictEqual(cat.perf.length, 1);

const out = formatChangelog(cat, 'v1.0.0');
assert(out.includes('### Added'));
assert(out.includes('### Fixed'));
console.log('changelog-gen tests passed cleanly.');
process.exit(0);

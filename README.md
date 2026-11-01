changelog-gen

[![Release](https://img.shields.io/github/v/release/Dhani078/changelog-gen?color=blue)](https://github.com/Dhani078/changelog-gen/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20.0.0-green.svg)](https://nodejs.org/)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](#)

Conventional commit log parser and Keep-a-Changelog generator. Parses Git commit history since the last version tag, categorizes commits into clean change categories, filters bot noise, and produces polished CHANGELOG.md files and GitHub Release payloads.

---

The Problem

Writing release notes manually is time-consuming and prone to omissions:
- Maintainers struggle to remember every PR merged over the release cycle.
- Commits are noisy (merge commits, typo fixes, bot dependency bumps).
- Existing changelog tools require complex configuration files and heavy plugins.
- Inconsistent formats confuse end users and breaking changes get buried.

---

The Solution

changelog-gen executes directly against your local Git repository:
- Detects the latest SemVer Git tag automatically.
- Parses Conventional Commits (feat, fix, perf, refactor, docs, chore, breaking).
- Strips noise (merge branch commits, automated bot updates).
- Formats entries following the Keep a Changelog standard.
- Prepends new release notes to CHANGELOG.md without clobbering history.

---

Installation and Usage

Generate changelog for next release:

```bash
npx changelog-gen
```

Specify explicit tag version and date:

```bash
npx changelog-gen --tag v1.2.0
```

Generate release notes output for GitHub Release payload:

```bash
npx changelog-gen --release-notes
```

---

CLI Options

- `--tag <version>`: Version tag to assign to the new release section.
- `--from <tag>`: Starting Git tag or commit hash (default: latest tag).
- `--to <tag>`: Ending Git commit ref (default: HEAD).
- `--release-notes`: Output only the new release section to stdout.
- `--dry-run`: Preview changelog output without modifying CHANGELOG.md.

---

Author

Dhani078

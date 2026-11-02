changelog-gen

[![Release](https://img.shields.io/github/v/release/Dhani078/changelog-gen?color=blue)](https://github.com/Dhani078/changelog-gen/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20.0.0-green.svg)](https://nodejs.org/)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](#)

Zero-dependency conventional commit changelog generator CLI. Parses Git commit history, classifies commits by type (feat, fix, perf, docs, refactor), groups breaking changes, and compiles professional, publication-ready CHANGELOG.md files in under 20 milliseconds.

---

THE PROBLEM

Manual changelog drafting is slow, inconsistent, and often inaccurate:
- Engineers spend valuable release time combing through git logs to write release notes.
- Critical bug fixes and breaking changes get accidentally omitted from documentation.
- Changelog formats drift across different repositories and engineering squads.
- Heavy tools (standard-version, conventional-changelog) bring dozens of dependencies and require extensive configuration files.
- Formatting breaking changes manually risks confusing downstream API consumers.

---

THE SOLUTION

changelog-gen delivers deterministic, zero-configuration changelog compilation:
- Automated Commit Classification: Groups commits by Conventional Commit prefixes (feat, fix, perf, docs, refactor).
- Breaking Change Isolation: Identifies BREAKING CHANGE footers and exclamation marks (feat!:) and places them in a dedicated section.
- Clean Semantic Versioning: Generates clean version headers with release dates.
- Non-Destructive Prepending: Automatically prepends new release notes to existing CHANGELOG.md without overwriting history.
- Zero External Dependencies: Built purely with native Node.js child_process and filesystem modules.

---

QUICKSTART

Generate and prepend changelog for next release:

```bash
npx changelog-gen
```

Preview changelog in terminal without modifying files:

```bash
npx changelog-gen --stdout
```

Specify custom release version tag:

```bash
npx changelog-gen --version 1.2.0
```

---

COMMAND MATRIX

Command | Argument | Description | Default
--- | --- | --- | ---
changelog-gen | None | Generate and prepend changelog entries | Updates CHANGELOG.md
changelog-gen --stdout | None | Print generated notes to terminal | Standard output
changelog-gen --version <v> | String | Set explicit release version header | Reads package.json
changelog-gen --help | None | Print command list and flags | Flag
changelog-gen --version | None | Print current semantic version | Flag

---

CLI OPTIONS

- `--stdout`: Output generated markdown directly to stdout instead of writing to disk.
- `--output <path>`: Destination file path (default: CHANGELOG.md).
- `--version <semver>`: Override version string in release header.
- `--since <tag>`: Generate notes starting from specific git tag or commit.
- `--json`: Output parsed commit categories as structured JSON.

---

INTERACTIVE WORKFLOW PREVIEW

```
$ npx changelog-gen --version 1.1.0

[changelog-gen] Reading Git commit log since last release tag...
Parsed 14 commits across 4 conventional categories.

Release Notes Generated (1.1.0 - 2026-05-01):
- Features: 3 new features added
- Bug Fixes: 5 issues resolved
- Performance: 2 optimizations implemented

Prepended release 1.1.0 to CHANGELOG.md (18ms).
```

---

DATA SAFETY GUARANTEES

- History Preservation: Prepending ensures historical release entries are never overwritten or discarded.
- Offline Standard Library: Operates entirely locally using native Git CLI.

---

LICENSE AND AUTHOR

- License: MIT License
- Author: Dhani078 (dhanisepeda@gmail.com)
- Source Repository: https://github.com/Dhani078/changelog-gen

---
name: changelog-gen
description: Conventional commit changelog generator CLI and agent skill. Parses Git history, classifies commit types, and compiles publication-ready CHANGELOG.md releases.
risk: safe
version: 1.0.0
---

NAME
changelog-gen - Conventional commit changelog generator

SYNOPSIS
npx changelog-gen [options]

COMMANDS
- generate: Parse git log and prepend release notes to CHANGELOG.md.
- --stdout: Output generated release notes to terminal.

OPTIONS
- --version <v>: Explicit release version string.
- --since <tag>: Starting commit or tag reference.
- --output <path>: Target file path.
- --json: Output parsed commit dictionary as JSON.

DETERMINISTIC BEHAVIOR AND INVARIANTS
1. Existing entries in CHANGELOG.md must be preserved below the new release section.
2. Commits matching conventional types (feat, fix, perf) must be sorted into dedicated sections.
3. Breaking changes must be flagged and placed at the top of the release notes.
4. Execution must complete in under 50 milliseconds.

AGENT INTEGRATION INSTRUCTIONS
When cutting a new release or preparing GitHub release notes:
1. Run npx changelog-gen --stdout --version <v> to preview release notes.
2. Review categorization.
3. Execute npx changelog-gen --version <v> to update CHANGELOG.md.
4. Commit CHANGELOG.md and create release tag.

AUTHOR
Dhani078 (dhanisepeda@gmail.com)

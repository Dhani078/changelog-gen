---
name: changelog-gen
description: Conventional commit log parser and Keep-a-Changelog curator. Use when preparing releases, generating CHANGELOG.md updates, drafting GitHub Release bodies, or reviewing commit history between Git tags.
version: 1.0.0
author: Dhani078
---

Changelog Gen Skill

Use when cutting releases, publishing packages, or auditing recent commit history for release notes.

Instructions

1. Inspect unreleased commits:
   ```bash
   npx changelog-gen --dry-run
   ```

2. Review categorized sections:
   - Features (feat)
   - Bug Fixes (fix)
   - Performance (perf)
   - Breaking Changes (breaking change indicator)

3. Write release notes:
   ```bash
   npx changelog-gen --tag <version>
   ```

4. Verify formatting:
   Ensure CHANGELOG.md uses plain headings, hyphen bullet items, and no markdown hash headers.

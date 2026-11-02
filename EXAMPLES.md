EXAMPLES: changelog-gen

Scenario 1: Generating Release Notes for Next Version
```bash
$ npx changelog-gen --version 1.2.0
[changelog-gen] Scanning commits since v1.1.0...
[changelog-gen] Wrote 1.2.0 release notes to CHANGELOG.md.
```

Scenario 2: Emitting Release Notes to Terminal for GitHub Release Description
```bash
$ npx changelog-gen --stdout --version 2.0.0
Version 2.0.0 (2026-05-01)

Breaking Changes:
- Authentication API now requires Bearer token format.

Features:
- Add automatic session recovery on 401 response.
- Support dark mode theme tokens.

Bug Fixes:
- Handle null token in Authorization header.
- Fix memory leak in background worker pool.
```

Scenario 3: Generating Notes for Commits Since Specific Tag
```bash
$ npx changelog-gen --since v1.0.0 --stdout
```

Scenario 4: Emitting JSON for Automated Release Bots
```bash
$ npx changelog-gen --json
{
  "version": "1.2.0",
  "date": "2026-05-01",
  "categories": {
    "feat": ["Add webhook retry mechanism"],
    "fix": ["Correct CORS header syntax"]
  }
}
```

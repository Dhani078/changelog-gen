TROUBLESHOOTING: changelog-gen

Diagnostic Runbook for Common Failures

Problem 1: Error: fatal: not a git repository
- Symptom: CLI exits with code 2.
- Cause: Current directory lacks a .git folder.
- Solution: Run from inside a valid Git repository root.

Problem 2: No commits found since last tag
- Symptom: Empty release notes generated.
- Cause: No new commits were made since the last annotated tag.
- Solution: Create your release commits before generating the changelog, or specify a custom commit range via --since.

Problem 3: Formatting appears misaligned in CHANGELOG.md
- Symptom: Irregular whitespace or indentation.
- Cause: Commit messages contain multi-line breaks without conventional indentation.
- Solution: changelog-gen automatically extracts the primary subject line of each commit.

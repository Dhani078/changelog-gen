SPECIFICATION: changelog-gen

1. Scope and Objective

changelog-gen reads Git commit log records between two revisions, maps messages conforming to the Conventional Commits specification into structured categories, and formats the output adhering to Keep a Changelog conventions.

2. Commit Classification Matrix

- `feat`: Added / Features
- `fix`: Fixed / Bug Fixes
- `perf`: Performance Improvements
- `refactor`: Refactoring / Code Quality
- `docs`: Documentation Updates
- `BREAKING CHANGE`: Breaking Changes (elevated to top priority section)
- `chore`, `test`, `ci`: Filtered out by default unless `--all` is set

3. Exit Codes

- 0: Successful changelog generation.
- 1: No commits found between specified revisions.
- 2: Target is not a Git repository.
- 3: File write failure.

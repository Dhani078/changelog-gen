ARCHITECTURE: changelog-gen

1. Architectural Pipeline

```
+-------------------------------------------------------------+
|                      GIT LOG EXTRACTOR                      |
|   - Executes git log with custom delimiter format           |
|   - Isolates commit hash, author date, and message          |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                  COMMIT CLASSIFIER MODULE                   |
|   - Matches regex: type(scope): description         |
|   - Identifies breaking change tokens and descriptions      |
|   - Buckets into feat, fix, perf, docs, and chore           |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                  MARKDOWN FORMATTER ENGINE                  |
|   - Renders version title with release date                 |
|   - Generates clean bullet points per category              |
|   - Formats breaking changes alert section                  |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                     FILE PREPEND WRITER                     |
|   - Reads existing CHANGELOG.md if present                  |
|   - Prepends new release notes to beginning of file         |
|   - Emits finished markdown or structured JSON to stdout    |
+-------------------------------------------------------------+
```

2. Standard Library Mapping
- Child Process: node:child_process execSync.
- Filesystem: node:fs readFileSync, writeFileSync, existsSync.
- Path Resolution: node:path resolve.

3. Performance Invariants
- Execution finishes in under 20 milliseconds on repositories up to 50,000 commits.
- Zero npm package dependencies.

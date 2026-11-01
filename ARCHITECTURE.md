ARCHITECTURE: changelog-gen

Data Flow Diagram

```
+-----------------------------------------------------------+
|                        CLI Entrypoint                     |
|                   (bin/changelog-gen.js)                  |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|                      Git Tag Resolver                     |
|   - Executes: git describe --tags --abbrev=0              |
|   - Resolves commit range: <last-tag>..HEAD               |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|                     Commit Log Streamer                   |
|   - Executes: git log --format="%H|%s|%an|%ad"            |
|   - Parses Conventional Commit prefixes                   |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|                    Classifier & Deduper                   |
|   - Groups commits into Feat / Fix / Perf / Breaking      |
|   - Filters bot noise and merge pull request headers      |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|                    Changelog File Prepender               |
|   - Reads existing CHANGELOG.md                           |
|   - Inserts new release section immediately after header  |
+-----------------------------------------------------------+
```

Component Responsibilities

- bin/changelog-gen.js: CLI coordinator.
- src/git.js: Git log and tag extraction.
- src/parser.js: Conventional commit regex parser.
- src/formatter.js: Markdown generator conforming to Keep a Changelog.
- src/writer.js: Non-destructive file prepender.

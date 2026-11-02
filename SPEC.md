SPECIFICATION: changelog-gen

1. Scope and Technical Purpose
changelog-gen queries local git commit history via git log, tokenizes commit messages per Conventional Commits v1.0.0 specification, groups them into classified sections, and formats markdown release blocks.

2. Conventional Commit Classification Mapping
- feat: Features and functional additions.
- fix: Bug fixes and defect corrections.
- perf: Performance improvements and latency reductions.
- docs: Documentation additions and corrections.
- refactor: Code refactoring without behavior modification.
- test: Testing harness and test case updates.
- chore: Maintenance, build, and tooling updates.

3. Breaking Change Parsing Rules
A commit is classified as a breaking change if:
- Commit type is followed by an exclamation mark: feat!: or fix!:
- Commit body contains a line starting with: BREAKING CHANGE:

4. Exit Codes
- 0: Changelog generated and written successfully.
- 1: Git log empty or no commits found since target ref.
- 2: Not a Git repository or unreadable working directory.

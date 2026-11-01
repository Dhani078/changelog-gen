FAQ: changelog-gen

Q: What commit format is required?
A: Conventional Commits (`feat:`, `fix:`, `perf:`, `docs:`, `refactor:`). Unprefixed commits are grouped under General Improvements.

Q: Does it overwrite existing CHANGELOG.md content?
A: No. It parses the top of CHANGELOG.md and safely prepends the new release section right below the header.

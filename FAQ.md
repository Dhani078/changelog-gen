FAQ: changelog-gen

Q1: What if my repository does not use conventional commits?
A: Commits that do not match standard conventional prefixes (feat:, fix:) are grouped under an 'Other Changes' category so no work is omitted.

Q2: Does changelog-gen overwrite my old changelog entries?
A: No. changelog-gen prepends the new release section to the top of CHANGELOG.md, preserving all historical version records beneath it.

Q3: Can changelog-gen detect the version automatically?
A: Yes. If you have a package.json file, changelog-gen reads the current version attribute automatically.

Q4: Does changelog-gen create Git tags?
A: No. changelog-gen focuses strictly on generating clean documentation. Tag creation remains under your control via git tag.

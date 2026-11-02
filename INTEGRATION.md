INTEGRATION GUIDE: changelog-gen

1. Automated Release Script in package.json

```json
{
  "scripts": {
    "release:changelog": "npx changelog-gen",
    "release": "npm version minor && npm run release:changelog && git add CHANGELOG.md && git commit -m "chore: update changelog""
  }
}
```

2. GitHub Actions Automated Release Notes (.github/workflows/release.yml)

```yaml
name: Generate Release Notes
on:
  push:
    tags:
      - 'v1'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Generate Changelog
        run: npx changelog-gen --version ${{ github.ref_name }}
```

3. Git Pre-Push Hook
Verify changelog was updated before pushing release tags:

```bash
npx changelog-gen --stdout > /dev/null
```

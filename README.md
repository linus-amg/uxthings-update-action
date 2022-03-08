# UXThings Update Action

**Update UXThings Application Versions from GitHub Actions.** This action allows GitHub events to update UXThings Application versions.

### Example
```yaml
jobs:
  after-deployment:
    runs-on: ubuntu-latest
    steps:
      - name: Update remote Application version
        uses: linus-amg/uxthings-update-action@v0.0.4
        with:
          apiKey: ${{ secrets.UXThingsAPIKey }}
          apiSecret: ${{ secrets.UXThingsAPISecret }}
          newVersion: ${{ github.sha }}
```

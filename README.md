# AdmitFit

AdmitFit is a static college matching website that estimates school fit and admission chances from a student profile.

## Public Site

This project is prepared for GitHub Pages. After it is pushed to a public GitHub repository with Pages enabled through GitHub Actions, the live URL will be:

```text
https://<github-username>.github.io/<repository-name>/
```

## Daily Ranking Updates

Ranking data lives in `data/rankings.json`. The `Update rankings` GitHub Action runs daily and can update this file automatically.

U.S. News does not publish a simple open public rankings API. For fully automatic rank changes, add a repository secret named `RANKING_SOURCE_URL` that points to a licensed or maintained JSON ranking feed shaped like:

```json
{
  "source": "U.S. News & World Report 2026 Best Colleges",
  "sourceUrl": "https://www.usnews.com/best-colleges/rankings/national-universities",
  "releaseDate": "2025-09-22",
  "schools": {
    "Stanford University": {
      "rank": 4,
      "category": "National Universities"
    }
  }
}
```

Without that secret, the daily job checks that the public source page is reachable and updates the verification date shown to readers.

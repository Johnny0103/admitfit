const fs = require("fs/promises");
const path = require("path");

const dataPath = path.join(__dirname, "..", "data", "rankings.json");
const today = new Date().toISOString().slice(0, 10);

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      accept: "application/json"
    }
  });
  if (!response.ok) {
    throw new Error(`Ranking source returned ${response.status}`);
  }
  return response.json();
}

function normalizeRankingPayload(payload, current) {
  const incomingSchools = payload.schools || payload.rankings || {};
  const nextSchools = { ...current.schools };

  for (const [schoolName, ranking] of Object.entries(incomingSchools)) {
    const rank = Number(ranking.rank || ranking.usNewsRank);
    const category = ranking.category || ranking.usNewsCategory;
    if (!Number.isFinite(rank) || !category) continue;
    nextSchools[schoolName] = { rank, category };
  }

  return {
    ...current,
    source: payload.source || current.source,
    sourceUrl: payload.sourceUrl || current.sourceUrl,
    releaseDate: payload.releaseDate || current.releaseDate,
    note: payload.note || current.note,
    verifiedDate: today,
    sourceCheckedAt: new Date().toISOString(),
    schools: nextSchools
  };
}

async function checkPublicSource(url) {
  const response = await fetch(url, {
    method: "HEAD",
    redirect: "follow"
  });
  if (!response.ok) {
    throw new Error(`Public source check returned ${response.status}`);
  }
}

async function main() {
  const current = JSON.parse(await fs.readFile(dataPath, "utf8"));
  const rankingSourceUrl = process.env.RANKING_SOURCE_URL;
  let next = current;

  if (rankingSourceUrl) {
    const payload = await fetchJson(rankingSourceUrl);
    next = normalizeRankingPayload(payload, current);
  } else {
    await checkPublicSource(current.sourceUrl);
    next = {
      ...current,
      verifiedDate: today,
      sourceCheckedAt: new Date().toISOString()
    };
  }

  await fs.writeFile(dataPath, `${JSON.stringify(next, null, 2)}\n`);
  console.log(`Rankings refreshed for ${today}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

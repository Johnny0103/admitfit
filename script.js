const schools = [
  {
    name: "Stanford University",
    region: "west",
    size: "medium",
    majors: ["engineering", "business", "health", "social", "arts", "undecided"],
    admitRate: 4,
    avgGpa: 3.95,
    avgSat: 1540,
    rigor: 12,
    netCost: 28000,
    usNewsRank: 4,
    usNewsCategory: "National Universities",
    officialDomain: "stanford.edu",
    traits: ["Research culture", "Innovation", "Interdisciplinary learning"],
    requirements: ["Common App", "Transcript", "Test optional policy review", "Two teacher recommendations", "Supplemental essays", "FAFSA or CSS Profile"]
  },
  {
    name: "University of California, Berkeley",
    region: "west",
    size: "large",
    majors: ["engineering", "business", "health", "social", "arts", "undecided"],
    admitRate: 12,
    avgGpa: 3.9,
    avgSat: 1450,
    rigor: 10,
    netCost: 32000,
    usNewsRank: 15,
    usNewsCategory: "National Universities",
    officialDomain: "berkeley.edu",
    traits: ["Public research", "Urban access", "High academic intensity"],
    requirements: ["UC application", "Transcript self-report", "Activities list", "Personal insight questions", "Residency information", "Financial aid forms"]
  },
  {
    name: "University of Southern California",
    region: "west",
    size: "large",
    majors: ["business", "engineering", "arts", "social", "health", "undecided"],
    admitRate: 10,
    avgGpa: 3.86,
    avgSat: 1460,
    rigor: 9,
    netCost: 42000,
    usNewsRank: 27,
    usNewsCategory: "National Universities",
    officialDomain: "usc.edu",
    traits: ["Creative programs", "Alumni network", "Urban campus"],
    requirements: ["Common App", "Transcript", "Optional test scores", "Recommendation letter", "Supplemental essays", "Portfolio for selected majors"]
  },
  {
    name: "New York University",
    region: "northeast",
    size: "large",
    majors: ["business", "arts", "social", "engineering", "health", "undecided"],
    admitRate: 9,
    avgGpa: 3.82,
    avgSat: 1450,
    rigor: 8,
    netCost: 43000,
    usNewsRank: 32,
    usNewsCategory: "National Universities",
    officialDomain: "nyu.edu",
    traits: ["Global campus", "City-based learning", "Arts and business strength"],
    requirements: ["Common App", "Transcript", "Optional test scores", "Counselor recommendation", "School-specific writing", "Financial aid forms"]
  },
  {
    name: "University of Michigan",
    region: "midwest",
    size: "large",
    majors: ["engineering", "business", "health", "social", "arts", "undecided"],
    admitRate: 18,
    avgGpa: 3.88,
    avgSat: 1435,
    rigor: 9,
    netCost: 33000,
    usNewsRank: 20,
    usNewsCategory: "National Universities",
    officialDomain: "umich.edu",
    traits: ["Big campus energy", "Research depth", "Strong school spirit"],
    requirements: ["Common App or Coalition App", "Transcript", "Optional test scores", "Teacher recommendation", "Supplemental essays", "Financial aid forms"]
  },
  {
    name: "Georgia Institute of Technology",
    region: "south",
    size: "large",
    majors: ["engineering", "business", "health", "social", "undecided"],
    admitRate: 16,
    avgGpa: 3.9,
    avgSat: 1470,
    rigor: 10,
    netCost: 30000,
    usNewsRank: 32,
    usNewsCategory: "National Universities",
    officialDomain: "gatech.edu",
    traits: ["STEM focus", "Co-op culture", "Urban research"],
    requirements: ["Common App", "Transcript", "Optional test scores", "Activities list", "Short answer essays", "Financial aid forms"]
  },
  {
    name: "University of Texas at Austin",
    region: "south",
    size: "large",
    majors: ["business", "engineering", "social", "health", "arts", "undecided"],
    admitRate: 29,
    avgGpa: 3.83,
    avgSat: 1370,
    rigor: 8,
    netCost: 28000,
    usNewsRank: 30,
    usNewsCategory: "National Universities",
    officialDomain: "utexas.edu",
    traits: ["Flagship resources", "Austin location", "Large academic menu"],
    requirements: ["ApplyTexas or Common App", "Transcript", "Optional test scores", "Expanded resume", "Short answers", "Financial aid forms"]
  },
  {
    name: "Boston University",
    region: "northeast",
    size: "large",
    majors: ["business", "health", "social", "arts", "engineering", "undecided"],
    admitRate: 14,
    avgGpa: 3.82,
    avgSat: 1430,
    rigor: 8,
    netCost: 39000,
    usNewsRank: 42,
    usNewsCategory: "National Universities",
    officialDomain: "bu.edu",
    traits: ["Urban campus", "Professional pathways", "International community"],
    requirements: ["Common App", "Transcript", "Optional test scores", "Teacher recommendation", "Writing supplement", "Financial aid forms"]
  },
  {
    name: "Purdue University",
    region: "midwest",
    size: "large",
    majors: ["engineering", "business", "health", "social", "arts", "undecided"],
    admitRate: 50,
    avgGpa: 3.74,
    avgSat: 1320,
    rigor: 7,
    netCost: 24000,
    usNewsRank: 46,
    usNewsCategory: "National Universities",
    officialDomain: "purdue.edu",
    traits: ["Engineering strength", "Practical outcomes", "Large public campus"],
    requirements: ["Common App", "Transcript", "Test score plan", "Activities list", "Major-specific review", "Financial aid forms"]
  },
  {
    name: "Northeastern University",
    region: "northeast",
    size: "large",
    majors: ["business", "engineering", "health", "social", "arts", "undecided"],
    admitRate: 7,
    avgGpa: 3.84,
    avgSat: 1465,
    rigor: 9,
    netCost: 41000,
    usNewsRank: 49,
    usNewsCategory: "National Universities",
    officialDomain: "northeastern.edu",
    traits: ["Co-op program", "Urban learning", "Career focus"],
    requirements: ["Common App", "Transcript", "Optional test scores", "Teacher recommendation", "Supplemental materials if requested", "Financial aid forms"]
  },
  {
    name: "University of Washington",
    region: "west",
    size: "large",
    majors: ["engineering", "business", "health", "social", "arts", "undecided"],
    admitRate: 43,
    avgGpa: 3.78,
    avgSat: 1340,
    rigor: 7,
    netCost: 27000,
    usNewsRank: 42,
    usNewsCategory: "National Universities",
    officialDomain: "washington.edu",
    traits: ["Seattle access", "Research scale", "Strong STEM pathways"],
    requirements: ["Coalition application", "Transcript self-report", "Optional test scores", "Activities list", "Personal statement", "Financial aid forms"]
  },
  {
    name: "Santa Clara University",
    region: "west",
    size: "medium",
    majors: ["business", "engineering", "social", "arts", "health", "undecided"],
    admitRate: 44,
    avgGpa: 3.72,
    avgSat: 1360,
    rigor: 7,
    netCost: 38000,
    usNewsRank: 63,
    usNewsCategory: "National Universities",
    officialDomain: "scu.edu",
    traits: ["Silicon Valley", "Jesuit education", "Undergraduate focus"],
    requirements: ["Common App", "Transcript", "Optional test scores", "Teacher recommendation", "Supplemental essay", "Financial aid forms"]
  },
  {
    name: "University of Oregon",
    region: "west",
    size: "large",
    majors: ["business", "social", "arts", "health", "engineering", "undecided"],
    admitRate: 86,
    avgGpa: 3.59,
    avgSat: 1210,
    rigor: 5,
    netCost: 25000,
    usNewsRank: 109,
    usNewsCategory: "National Universities",
    officialDomain: "uoregon.edu",
    traits: ["Collaborative campus", "Design and journalism", "Outdoor culture"],
    requirements: ["Common App or Oregon App", "Transcript", "Optional test scores", "Activities list", "Personal statement", "Financial aid forms"]
  },
  {
    name: "Loyola Marymount University",
    region: "west",
    size: "medium",
    majors: ["business", "arts", "social", "health", "engineering", "undecided"],
    admitRate: 41,
    avgGpa: 3.7,
    avgSat: 1320,
    rigor: 6,
    netCost: 39000,
    usNewsRank: 91,
    usNewsCategory: "National Universities",
    officialDomain: "lmu.edu",
    traits: ["Los Angeles", "Creative community", "Service-oriented learning"],
    requirements: ["Common App", "Transcript", "Optional test scores", "Recommendation letter", "Personal essay", "Financial aid forms"]
  },
  {
    name: "Ohio State University",
    region: "midwest",
    size: "large",
    majors: ["business", "engineering", "health", "social", "arts", "undecided"],
    admitRate: 53,
    avgGpa: 3.76,
    avgSat: 1325,
    rigor: 7,
    netCost: 26000,
    usNewsRank: 41,
    usNewsCategory: "National Universities",
    officialDomain: "osu.edu",
    traits: ["Large flagship", "Honors pathways", "Broad major choice"],
    requirements: ["Common App", "Transcript", "Test optional policy review", "Activities list", "Major review", "Financial aid forms"]
  },
  {
    name: "University of Alabama",
    region: "south",
    size: "large",
    majors: ["business", "engineering", "health", "social", "arts", "undecided"],
    admitRate: 80,
    avgGpa: 3.62,
    avgSat: 1200,
    rigor: 5,
    netCost: 22000,
    usNewsRank: 171,
    usNewsCategory: "National Universities",
    officialDomain: "ua.edu",
    traits: ["Scholarship options", "Large campus", "Honors college"],
    requirements: ["UA application or Common App", "Transcript", "Scholarship deadline review", "Optional test scores", "Activities list", "Financial aid forms"]
  },
  {
    name: "Amherst College",
    region: "northeast",
    size: "small",
    majors: ["arts", "social", "health", "engineering", "business", "undecided"],
    admitRate: 9,
    avgGpa: 3.91,
    avgSat: 1480,
    rigor: 9,
    netCost: 25000,
    usNewsRank: 2,
    usNewsCategory: "National Liberal Arts Colleges",
    officialDomain: "amherst.edu",
    traits: ["Open curriculum", "Small seminars", "Strong need-based aid"],
    requirements: ["Common App or Coalition App", "Transcript", "Optional test scores", "Two teacher recommendations", "Writing supplement", "Financial aid forms"]
  }
];

const supplementalSchools = [
  {
    name: "University of California, Los Angeles",
    searchAliases: ["UCLA", "UC Los Angeles"],
    region: "west",
    size: "large",
    majors: ["engineering", "business", "health", "social", "arts", "undecided"],
    admitRate: 9,
    avgGpa: 3.92,
    avgSat: 1450,
    rigor: 10,
    netCost: 27000,
    usNewsRank: 17,
    usNewsCategory: "National Universities",
    officialDomain: "ucla.edu",
    traits: ["Top public university", "Los Angeles access", "Research scale"],
    requirements: ["UC application", "Transcript self-report", "Activities list", "Personal insight questions", "Major review", "Financial aid forms"]
  },
  {
    name: "University of California, San Diego",
    searchAliases: ["UCSD", "UC San Diego"],
    region: "west",
    size: "large",
    majors: ["engineering", "health", "social", "business", "arts", "undecided"],
    admitRate: 25,
    avgGpa: 3.86,
    avgSat: 1390,
    rigor: 9,
    netCost: 27000,
    usNewsRank: 29,
    usNewsCategory: "National Universities",
    officialDomain: "ucsd.edu",
    traits: ["STEM research", "Coastal campus", "Health and science strength"],
    requirements: ["UC application", "Transcript self-report", "Activities list", "Personal insight questions", "Major review", "Financial aid forms"]
  },
  {
    name: "University of California, Davis",
    searchAliases: ["UCD", "UC Davis"],
    region: "west",
    size: "large",
    majors: ["health", "engineering", "social", "business", "arts", "undecided"],
    admitRate: 37,
    avgGpa: 3.78,
    avgSat: 1310,
    rigor: 8,
    netCost: 26000,
    usNewsRank: 32,
    usNewsCategory: "National Universities",
    officialDomain: "ucdavis.edu",
    traits: ["Life sciences", "College town", "Research university"],
    requirements: ["UC application", "Transcript self-report", "Activities list", "Personal insight questions", "Major review", "Financial aid forms"]
  },
  {
    name: "University of California, Irvine",
    searchAliases: ["UCI", "UC Irvine"],
    region: "west",
    size: "large",
    majors: ["engineering", "health", "business", "social", "arts", "undecided"],
    admitRate: 26,
    avgGpa: 3.84,
    avgSat: 1360,
    rigor: 9,
    netCost: 25000,
    usNewsRank: 32,
    usNewsCategory: "National Universities",
    officialDomain: "uci.edu",
    traits: ["Orange County", "Social mobility", "Research university"],
    requirements: ["UC application", "Transcript self-report", "Activities list", "Personal insight questions", "Major review", "Financial aid forms"]
  },
  {
    name: "University of California, Santa Barbara",
    searchAliases: ["UCSB", "UC Santa Barbara"],
    region: "west",
    size: "large",
    majors: ["engineering", "social", "arts", "health", "business", "undecided"],
    admitRate: 28,
    avgGpa: 3.82,
    avgSat: 1350,
    rigor: 8,
    netCost: 26000,
    usNewsRank: 40,
    usNewsCategory: "National Universities",
    officialDomain: "ucsb.edu",
    traits: ["Coastal research", "Strong sciences", "Collaborative campus"],
    requirements: ["UC application", "Transcript self-report", "Activities list", "Personal insight questions", "Major review", "Financial aid forms"]
  },
  {
    name: "University of California, Merced",
    searchAliases: ["UCM", "UC Merced"],
    region: "west",
    size: "medium",
    majors: ["engineering", "health", "social", "arts", "business", "undecided"],
    admitRate: 88,
    avgGpa: 3.45,
    avgSat: 1120,
    rigor: 5,
    netCost: 24000,
    usNewsRank: 57,
    usNewsCategory: "National Universities",
    officialDomain: "ucmerced.edu",
    traits: ["Fast-rising UC campus", "Social mobility", "Research growth"],
    requirements: ["UC application", "Transcript self-report", "Activities list", "Personal insight questions", "Major review", "Financial aid forms"]
  },
  {
    name: "University of California, Riverside",
    searchAliases: ["UCR", "UC Riverside"],
    region: "west",
    size: "large",
    majors: ["engineering", "business", "health", "social", "arts", "undecided"],
    admitRate: 69,
    avgGpa: 3.55,
    avgSat: 1180,
    rigor: 6,
    netCost: 25000,
    usNewsRank: 75,
    usNewsCategory: "National Universities",
    officialDomain: "ucr.edu",
    traits: ["Social mobility", "Diverse campus", "Research university"],
    requirements: ["UC application", "Transcript self-report", "Activities list", "Personal insight questions", "Major review", "Financial aid forms"]
  },
  {
    name: "University of California, Santa Cruz",
    searchAliases: ["UCSC", "UC Santa Cruz"],
    region: "west",
    size: "large",
    majors: ["engineering", "arts", "social", "health", "business", "undecided"],
    admitRate: 65,
    avgGpa: 3.58,
    avgSat: 1240,
    rigor: 6,
    netCost: 27000,
    usNewsRank: 88,
    usNewsCategory: "National Universities",
    officialDomain: "ucsc.edu",
    traits: ["Redwood campus", "Computer science", "Creative research"],
    requirements: ["UC application", "Transcript self-report", "Activities list", "Personal insight questions", "Major review", "Financial aid forms"]
  }
];

const existingSchoolNames = new Set(schools.map((school) => school.name.toLowerCase()));
supplementalSchools.forEach((school) => {
  if (!existingSchoolNames.has(school.name.toLowerCase())) {
    schools.push(school);
    existingSchoolNames.add(school.name.toLowerCase());
  }
});

const curatedAliasMap = {
  "University of California, Berkeley": ["UC Berkeley", "UCB", "Cal"],
  "University of Southern California": ["USC"],
  "New York University": ["NYU"],
  "Georgia Institute of Technology": ["Georgia Tech"],
  "University of Texas at Austin": ["UT Austin", "UT"],
  "Boston University": ["BU"],
  "Northeastern University": ["NEU"],
  "University of Washington": ["UW", "U Dub"],
  "Santa Clara University": ["SCU"],
  "Loyola Marymount University": ["LMU"],
  "Ohio State University": ["OSU"]
};

schools.forEach((school) => {
  school.searchAliases = [...new Set([...(school.searchAliases || []), ...(curatedAliasMap[school.name] || [])])];
});

const UNIVERSITY_DIRECTORY_URL = "https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json";
const MAX_DIRECTORY_SCHOOLS = 1000;
const SCORECARD_SEARCH_URL = "https://api.data.gov/ed/collegescorecard/v1/schools";
const SCORECARD_FIELDS = [
  "school.name",
  "school.school_url",
  "school.state",
  "latest.admissions.admission_rate.overall",
  "latest.student.size",
  "latest.cost.avg_net_price.overall"
].join(",");
let universityDirectory = null;
let universityDirectoryPromise = null;
let universityDirectoryStatus = "idle";
let directoryPoolAdded = false;
let scorecardSearchStatus = "idle";
const scorecardSearchCache = new Map();
let schoolSearchToken = 0;

const rankingMetadata = {
  source: "U.S. News & World Report 2026 Best Colleges",
  sourceUrl: "https://www.usnews.com/best-colleges/rankings/national-universities",
  verifiedDate: "2026-06-05",
  releaseDate: "2025-09-22"
};

const popularityScores = [94, 92, 91, 96, 89, 86, 93, 88, 84, 87, 82, 78, 75, 76, 80, 74, 72];
schools.forEach((school, index) => {
  school.popularity = popularityScores[index] || 70;
  school.source = "curated";
});

const state = {
  user: null,
  flow: null,
  selectedSchools: [],
  activeFilter: "all",
  schoolSearch: "",
  schoolSort: "ranking",
  visibleSchoolLimit: 120
};

const views = {
  login: document.querySelector("#login-view"),
  choice: document.querySelector("#choice-view"),
  school: document.querySelector("#school-view"),
  list: document.querySelector("#list-view"),
  profile: document.querySelector("#profile-view"),
  results: document.querySelector("#results-view")
};

const viewTitle = document.querySelector("#view-title");
const appShell = document.querySelector(".app-shell");
const loginWorkspace = document.querySelector(".workspace");
const restartButton = document.querySelector("#restart-button");
const yourListButton = document.querySelector("#your-list-button");
const loginSwipeButton = document.querySelector("#login-swipe-button");
const schoolPicker = document.querySelector("#school-picker");
const schoolSearch = document.querySelector("#school-search");
const rankingNotice = document.querySelector("#ranking-notice");
const selectedCount = document.querySelector("#selected-count");
const notePage = document.querySelector("#note-page");
const resultsGrid = document.querySelector("#results-grid");
const resultsSummary = document.querySelector("#results-summary");

const materialMap = {
  transcript: "Transcript request",
  test: "Test score plan",
  essay: "Personal statement",
  recommendations: "Recommendation letters",
  fafsa: "FAFSA / CSS Profile plan",
  supplements: "Supplemental essays"
};

async function loadRankingData() {
  try {
    const response = await fetch("data/rankings.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Ranking data returned ${response.status}`);
    const data = await response.json();

    rankingMetadata.source = data.source || rankingMetadata.source;
    rankingMetadata.sourceUrl = data.sourceUrl || rankingMetadata.sourceUrl;
    rankingMetadata.verifiedDate = data.verifiedDate || rankingMetadata.verifiedDate;
    rankingMetadata.releaseDate = data.releaseDate || rankingMetadata.releaseDate;

    for (const school of schools) {
      const ranking = data.schools?.[school.name];
      if (!ranking) continue;
      school.usNewsRank = Number(ranking.rank) || school.usNewsRank;
      school.usNewsCategory = ranking.category || school.usNewsCategory;
    }

    if (!views.school.classList.contains("hidden")) renderSchoolPicker();
    if (!views.results.classList.contains("hidden")) renderResultCards();
  } catch (error) {
    console.warn("Using bundled ranking data because external ranking data could not be loaded.", error);
  }
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${value}T12:00:00`));
}

function daysSince(value) {
  const today = new Date();
  const checked = new Date(`${value}T12:00:00`);
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  return Math.max(0, Math.floor((today - checked) / millisecondsPerDay));
}

function rankLabel(school) {
  if (!school.usNewsRank || school.usNewsRank >= 900) {
    if (school.source === "scorecard") return "College Scorecard";
    if (school.source === "directory") return "National directory";
    return "Rank pending";
  }
  return `U.S. News #${school.usNewsRank}`;
}

function officialIconUrl(school) {
  if (!school.officialDomain) {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(school.name)}&background=e8f7ff&color=174c45&bold=true`;
  }
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(school.officialDomain)}&sz=128`;
}

function schoolIcon(school) {
  return `<img src="${officialIconUrl(school)}" alt="${school.name} official site icon" loading="lazy">`;
}

function searchTextForSchool(school) {
  return [
    school.name,
    school.region,
    school.size,
    school.officialDomain,
    ...(school.searchAliases || []),
    ...(school.majors || []),
    ...(school.traits || [])
  ].join(" ").toLowerCase();
}

const stateNamesByCode = {
  AL: "alabama",
  AK: "alaska",
  AZ: "arizona",
  AR: "arkansas",
  CA: "california",
  CO: "colorado",
  CT: "connecticut",
  DE: "delaware",
  DC: "washington, d.c.",
  FL: "florida",
  GA: "georgia",
  HI: "hawaii",
  ID: "idaho",
  IL: "illinois",
  IN: "indiana",
  IA: "iowa",
  KS: "kansas",
  KY: "kentucky",
  LA: "louisiana",
  ME: "maine",
  MD: "maryland",
  MA: "massachusetts",
  MI: "michigan",
  MN: "minnesota",
  MS: "mississippi",
  MO: "missouri",
  MT: "montana",
  NE: "nebraska",
  NV: "nevada",
  NH: "new hampshire",
  NJ: "new jersey",
  NM: "new mexico",
  NY: "new york",
  NC: "north carolina",
  ND: "north dakota",
  OH: "ohio",
  OK: "oklahoma",
  OR: "oregon",
  PA: "pennsylvania",
  RI: "rhode island",
  SC: "south carolina",
  SD: "south dakota",
  TN: "tennessee",
  TX: "texas",
  UT: "utah",
  VT: "vermont",
  VA: "virginia",
  WA: "washington",
  WV: "west virginia",
  WI: "wisconsin",
  WY: "wyoming"
};

function inferRegionFromState(stateName = "") {
  const stateKey = stateNamesByCode[stateName.toUpperCase()] || stateName.toLowerCase();
  const northeast = ["connecticut", "maine", "massachusetts", "new hampshire", "rhode island", "vermont", "new jersey", "new york", "pennsylvania"];
  const midwest = ["illinois", "indiana", "michigan", "ohio", "wisconsin", "iowa", "kansas", "minnesota", "missouri", "nebraska", "north dakota", "south dakota"];
  const south = ["delaware", "florida", "georgia", "maryland", "north carolina", "south carolina", "virginia", "washington, d.c.", "west virginia", "alabama", "kentucky", "mississippi", "tennessee", "arkansas", "louisiana", "oklahoma", "texas"];
  const west = ["arizona", "colorado", "idaho", "montana", "nevada", "new mexico", "utah", "wyoming", "alaska", "california", "hawaii", "oregon", "washington"];
  if (northeast.includes(stateKey)) return "northeast";
  if (midwest.includes(stateKey)) return "midwest";
  if (south.includes(stateKey)) return "south";
  if (west.includes(stateKey)) return "west";
  return "any";
}

function normalizeSchoolDomain(value = "") {
  return value.replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0];
}

function schoolSizeFromEnrollment(enrollment) {
  if (!enrollment) return "medium";
  if (enrollment < 3000) return "small";
  if (enrollment > 12000) return "large";
  return "medium";
}

function schoolFromScorecardEntry(entry) {
  const enrollment = Number(entry["latest.student.size"]) || 0;
  const admissionRate = Number(entry["latest.admissions.admission_rate.overall"]);
  const netCost = Number(entry["latest.cost.avg_net_price.overall"]);
  const stateCode = entry["school.state"] || "";
  return {
    name: entry["school.name"],
    region: inferRegionFromState(stateCode),
    size: schoolSizeFromEnrollment(enrollment),
    majors: ["engineering", "business", "health", "social", "arts", "undecided"],
    admitRate: admissionRate ? Math.round(admissionRate * 100) : 65,
    avgGpa: admissionRate && admissionRate < 0.2 ? 3.82 : admissionRate && admissionRate < 0.5 ? 3.62 : 3.35,
    avgSat: admissionRate && admissionRate < 0.2 ? 1430 : admissionRate && admissionRate < 0.5 ? 1280 : 1120,
    rigor: admissionRate && admissionRate < 0.2 ? 9 : admissionRate && admissionRate < 0.5 ? 7 : 5,
    netCost: netCost || 30000,
    usNewsRank: 998,
    usNewsCategory: "College Scorecard live data",
    officialDomain: normalizeSchoolDomain(entry["school.school_url"] || ""),
    popularity: enrollment ? clamp(Math.round(50 + enrollment / 900), 52, 86) : 58,
    source: "scorecard",
    searchAliases: [],
    traits: ["Department of Education data", stateCode ? `${stateCode} campus` : "U.S. college", enrollment ? `${enrollment.toLocaleString()} undergraduates` : "Enrollment varies"],
    requirements: ["Application form", "Transcript", "Test score policy review", "Activities list", "Personal essay", "Financial aid forms"]
  };
}

function schoolFromDirectoryEntry(entry) {
  const domain = entry.domains?.find((item) => item.endsWith(".edu")) || entry.domains?.[0] || "";
  return {
    name: entry.name,
    region: inferRegionFromState(entry["state-province"]),
    size: "medium",
    majors: ["engineering", "business", "health", "social", "arts", "undecided"],
    admitRate: 65,
    avgGpa: 3.45,
    avgSat: 1200,
    rigor: 6,
    netCost: 30000,
    usNewsRank: 999,
    usNewsCategory: "U.S. university directory",
    officialDomain: domain,
    popularity: 55,
    source: "directory",
    searchAliases: [],
    traits: ["U.S. university", entry["state-province"] || "Official school profile", domain || "Official website"],
    requirements: ["Application form", "Transcript", "Test score policy review", "Activities list", "Personal essay", "Financial aid forms"]
  };
}

async function loadUniversityDirectory() {
  if (universityDirectory) return universityDirectory;
  if (universityDirectoryPromise) return universityDirectoryPromise;

  universityDirectoryStatus = "loading";
  universityDirectoryPromise = fetch(UNIVERSITY_DIRECTORY_URL, { cache: "force-cache" })
    .then((response) => {
      if (!response.ok) throw new Error(`University directory returned ${response.status}`);
      return response.json();
    })
    .then((data) => {
      universityDirectory = data
        .filter((entry) => entry.alpha_two_code === "US" && entry.name)
        .map(schoolFromDirectoryEntry)
        .sort((a, b) => a.name.localeCompare(b.name));
      universityDirectoryStatus = "ready";
      return universityDirectory;
    })
    .catch((error) => {
      universityDirectoryStatus = "error";
      console.warn("Using bundled schools because the national university directory could not be loaded.", error);
      return [];
    });
  return universityDirectoryPromise;
}

async function searchScorecard(query) {
  if (!query || query.length < 2) return [];
  if (scorecardSearchCache.has(query)) return scorecardSearchCache.get(query);

  scorecardSearchStatus = "loading";
  const params = new URLSearchParams({
    api_key: "DEMO_KEY",
    "school.name": query,
    "school.operating": "1",
    per_page: "100",
    _fields: SCORECARD_FIELDS
  });

  try {
    const response = await fetch(`${SCORECARD_SEARCH_URL}?${params.toString()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`College Scorecard returned ${response.status}`);
    const data = await response.json();
    const results = (data.results || [])
      .filter((entry) => entry["school.name"])
      .map(schoolFromScorecardEntry)
      .sort((a, b) => {
        const aStarts = a.name.toLowerCase().startsWith(query) ? 0 : 1;
        const bStarts = b.name.toLowerCase().startsWith(query) ? 0 : 1;
        return aStarts - bStarts || b.popularity - a.popularity || a.name.localeCompare(b.name);
      });
    scorecardSearchStatus = "ready";
    scorecardSearchCache.set(query, results);
    return results;
  } catch (error) {
    scorecardSearchStatus = "error";
    console.warn("College Scorecard search failed; falling back to the university directory.", error);
    scorecardSearchCache.set(query, []);
    return [];
  }
}

function addLiveSearchMatches(matches) {
  if (!matches.length) return;
  const existingNames = new Set(schools.map((school) => school.name.toLowerCase()));
  matches.forEach((school) => {
    if (existingNames.has(school.name.toLowerCase())) return;
    existingNames.add(school.name.toLowerCase());
    schools.push(school);
  });
}

function addDirectoryPool(limit = MAX_DIRECTORY_SCHOOLS) {
  if (!universityDirectory?.length) return 0;
  const existingNames = new Set(schools.map((school) => school.name.toLowerCase()));
  let added = 0;

  for (const school of universityDirectory) {
    if (added >= limit) break;
    if (existingNames.has(school.name.toLowerCase())) continue;
    existingNames.add(school.name.toLowerCase());
    schools.push(school);
    added += 1;
  }

  directoryPoolAdded = true;
  return added;
}

function addDirectoryMatches(query) {
  if (!query || query.length < 2 || !universityDirectory?.length) return;
  const existingNames = new Set(schools.map((school) => school.name.toLowerCase()));
  const matches = universityDirectory
    .filter((school) => {
      if (existingNames.has(school.name.toLowerCase())) return false;
      return searchTextForSchool(school).includes(query);
    })
    .slice(0, MAX_DIRECTORY_SCHOOLS);

  matches.forEach((school) => {
    existingNames.add(school.name.toLowerCase());
    schools.push(school);
  });
}

async function hydrateDirectoryPool() {
  if (directoryPoolAdded || universityDirectoryStatus === "error") return;
  await loadUniversityDirectory();
  addDirectoryPool();
}

function updateSelectionCount() {
  if (selectedCount) selectedCount.textContent = state.selectedSchools.length;
}

function renderRankingNotice() {
  const age = daysSince(rankingMetadata.verifiedDate);
  const status = age === 0
    ? "Rankings were verified today."
    : `Rankings were last verified ${age} day${age === 1 ? "" : "s"} ago; re-check U.S. News before making final decisions.`;

  rankingNotice.innerHTML = `
    <strong><a href="${rankingMetadata.sourceUrl}" target="_blank" rel="noreferrer">${rankingMetadata.source}</a></strong>
    <span>${status} Data release: ${formatDate(rankingMetadata.releaseDate)}. App check: ${formatDate(rankingMetadata.verifiedDate)}.</span>
  `;
}

function showView(name, title) {
  Object.values(views).forEach((view) => view.classList.add("hidden"));
  views[name].classList.remove("hidden");
  viewTitle.textContent = title;
  restartButton.classList.toggle("hidden", name === "login");
  yourListButton.classList.toggle("hidden", !["school", "list", "profile", "results"].includes(name));
  appShell.classList.toggle("focus-mode", name !== "login");
  if (name === "login") {
    appShell.classList.remove("login-open");
    appShell.classList.remove("is-dragging");
    loginWorkspace.style.removeProperty("--login-sheet-shift");
    loginSwipeButton.setAttribute("aria-expanded", "false");
    loginSheetProgress = 0;
  }
}

function openLoginSheet() {
  appShell.classList.remove("is-dragging");
  loginWorkspace.style.removeProperty("--login-sheet-shift");
  appShell.classList.add("login-open");
  loginSwipeButton.setAttribute("aria-expanded", "true");
  loginSheetProgress = 1;
}

function closeLoginSheet() {
  appShell.classList.remove("is-dragging");
  loginWorkspace.style.removeProperty("--login-sheet-shift");
  appShell.classList.remove("login-open");
  loginSwipeButton.setAttribute("aria-expanded", "false");
  loginSheetProgress = 0;
}

function isFormInteraction(target) {
  return Boolean(target.closest("input, select, textarea, button, a, label"));
}

async function renderSchoolPicker() {
  renderRankingNotice();
  updateSelectionCount();
  const query = state.schoolSearch.trim().toLowerCase();
  const token = ++schoolSearchToken;

  if (!query && !directoryPoolAdded) {
    hydrateDirectoryPool().then(() => {
      if (!views.school.classList.contains("hidden") && !state.schoolSearch.trim()) renderSchoolPicker();
    });
  }

  if (query.length >= 2) {
    schoolPicker.innerHTML = `<p class="helper-text search-loading">Searching live U.S. college sources...</p>`;
    const [scorecardMatches] = await Promise.all([
      searchScorecard(query),
      universityDirectoryStatus === "ready" ? Promise.resolve(universityDirectory) : loadUniversityDirectory()
    ]);
    if (token !== schoolSearchToken) return;
    addLiveSearchMatches(scorecardMatches);
    addDirectoryPool();
  }

  addDirectoryMatches(query);

  const visibleSchools = schools
    .map((school, index) => ({ school, index }))
    .filter(({ school }) => {
      if (!query) return true;
      return searchTextForSchool(school).includes(query);
    })
    .sort((a, b) => {
      if (state.schoolSort === "popular") return b.school.popularity - a.school.popularity;
      return a.school.usNewsRank - b.school.usNewsRank || a.school.name.localeCompare(b.school.name);
    });

  const totalMatches = visibleSchools.length;
  const shownSchools = visibleSchools.slice(0, state.visibleSchoolLimit);
  const remainingCount = Math.max(0, totalMatches - shownSchools.length);
  const resultSummary = totalMatches
    ? `<p class="school-result-count">${shownSchools.length} of ${totalMatches} schools shown${directoryPoolAdded ? " from the expanded source" : ""}.</p>`
    : "";
  const loadMore = remainingCount
    ? `<button class="load-more-schools" id="load-more-schools" type="button">Show ${Math.min(120, remainingCount)} more schools</button>`
    : "";

  schoolPicker.innerHTML = `
    ${resultSummary}
    ${shownSchools.map(({ school, index }) => `
    <button class="school-card ${state.selectedSchools.includes(index) ? "selected" : ""}" type="button" data-school="${index}" aria-pressed="${state.selectedSchools.includes(index)}">
      <span class="school-icon" data-theme="${index % 4}">${schoolIcon(school)}</span>
      <div class="school-content">
        <strong>${school.name}</strong>
        <div class="school-meta">
          <span class="pill">${rankLabel(school)}</span>
          <span class="pill">${school.usNewsCategory}</span>
          <span class="pill">${school.popularity}% popular</span>
          <span class="pill">${labelize(school.region)}</span>
          <span class="pill">${labelize(school.size)}</span>
          <span class="pill">${school.admitRate}% admit rate</span>
          ${school.source === "scorecard" ? `<span class="pill live-pill">Live federal data</span>` : ""}
          ${school.source === "directory" ? `<span class="pill live-pill">Live directory result</span>` : ""}
        </div>
      </div>
    </button>
    `).join("") || `<p class="helper-text">No colleges match that search${scorecardSearchStatus === "error" && universityDirectoryStatus === "error" ? " because live search is unavailable right now" : ""}.</p>`}
    ${loadMore}
  `;
}

function renderYourList() {
  const selected = state.selectedSchools.map((index) => schools[index]);
  notePage.innerHTML = `
    <h3>Your AdmitFit List</h3>
    <p>${selected.length ? "A sweet little note for the schools you picked. Keep this list balanced, brave, and practical." : "Your list is waiting for its first school. Go pick a few colleges that feel exciting and realistic."}</p>
    <div class="note-list">
      ${selected.map((school, position) => `
        <article class="note-school">
          <span class="note-school-icon">${schoolIcon(school)}</span>
          <div>
            <strong>${position + 1}. ${school.name}</strong>
            <span>${rankLabel(school)} · ${labelize(school.region)} · ${labelize(school.size)} campus · ${school.admitRate}% admit rate</span>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function labelize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function parseProfile(form) {
  const data = new FormData(form);
  return {
    gpa: Number(data.get("gpa")),
    sat: Number(data.get("sat")),
    act: Number(data.get("act")) || null,
    rigor: Number(data.get("rigor")),
    major: data.get("major"),
    region: data.get("region"),
    size: data.get("size"),
    budget: Number(data.get("budget")),
    activities: Number(data.get("activities")),
    essays: Number(data.get("essays")),
    recommendations: Number(data.get("recommendations")),
    aid: data.get("aid"),
    materials: data.getAll("materials")
  };
}

function testStrength(profile, school) {
  const satScore = (profile.sat - school.avgSat) / 240;
  const actAsSat = profile.act ? ((profile.act - 21) / 15) * 1200 + 400 : profile.sat;
  const bestTest = Math.max(profile.sat, actAsSat);
  return clamp(50 + ((bestTest - school.avgSat) / 240) * 22 + satScore * 6, 8, 100);
}

function academicStrength(profile, school) {
  const gpaScore = 50 + ((profile.gpa - school.avgGpa) / 0.45) * 30;
  const rigorScore = 50 + ((profile.rigor - school.rigor) / 8) * 28;
  return clamp(gpaScore * 0.62 + rigorScore * 0.38, 5, 100);
}

function fitScore(profile, school) {
  const majorFit = school.majors.includes(profile.major) ? 100 : profile.major === "undecided" ? 88 : 58;
  const regionFit = profile.region === "any" || profile.region === school.region ? 100 : 62;
  const sizeFit = profile.size === "any" || profile.size === school.size ? 100 : 68;
  const budgetFit = profile.budget >= school.netCost ? 100 : clamp(100 - ((school.netCost - profile.budget) / 18000) * 42, 35, 96);
  const activityFit = clamp(profile.activities * 10, 20, 100);
  const aidFit = profile.aid === "high" && school.netCost <= 30000 ? 100 : profile.aid === "high" ? 70 : 86;
  return Math.round(majorFit * 0.24 + regionFit * 0.18 + sizeFit * 0.13 + budgetFit * 0.18 + activityFit * 0.17 + aidFit * 0.1);
}

function admissionChance(profile, school) {
  const academic = academicStrength(profile, school);
  const tests = testStrength(profile, school);
  const application = (profile.activities * 10) * 0.36 + (profile.essays * 10) * 0.34 + (profile.recommendations * 10) * 0.3;
  const readiness = profile.materials.length / Object.keys(materialMap).length;
  const applicantStrength = academic * 0.48 + tests * 0.24 + application * 0.21 + readiness * 100 * 0.07;
  const selectivityDrag = (100 - school.admitRate) * 0.42;
  const chance = school.admitRate + (applicantStrength - 62) * 0.58 - selectivityDrag * 0.18;
  return Math.round(clamp(chance, 2, 92));
}

function categorize(chance, school) {
  if (chance < 22 || school.admitRate < 12) return "reach";
  if (chance < 58) return "match";
  return "likely";
}

function resultForSchool(profile, school) {
  const match = fitScore(profile, school);
  const chance = admissionChance(profile, school);
  return {
    school,
    match,
    chance,
    category: categorize(chance, school),
    strengths: buildStrengths(profile, school, match, chance),
    checklist: buildChecklist(profile, school)
  };
}

function buildStrengths(profile, school, match, chance) {
  const items = [];
  if (school.majors.includes(profile.major)) items.push("Major interest aligns with available academic strengths.");
  if (profile.region === "any" || profile.region === school.region) items.push("Region preference matches this campus.");
  if (profile.size === "any" || profile.size === school.size) items.push("Campus size preference is aligned.");
  if (profile.gpa >= school.avgGpa) items.push("GPA is at or above this school's typical profile.");
  if (profile.sat >= school.avgSat) items.push("SAT score is at or above the school benchmark used here.");
  if (profile.activities >= 6) items.push("Activities show leadership or sustained involvement.");
  if (!items.length) items.push("This school remains possible, but the profile has several fit gaps to strengthen.");
  if (match >= 82 && chance < 25) items.push("Strong fit, but admissions selectivity makes this a reach.");
  return items.slice(0, 4);
}

function buildChecklist(profile, school) {
  const completed = profile.materials.map((key) => materialMap[key]);
  return school.requirements.map((requirement) => {
    const isDone = completed.some((item) => requirement.toLowerCase().includes(item.split(" ")[0].toLowerCase()));
    if (requirement.includes("Supplemental") || requirement.includes("Short answer") || requirement.includes("Writing")) {
      return profile.materials.includes("supplements") ? `Done: ${requirement}` : `To do: ${requirement}`;
    }
    if (requirement.includes("Financial") || requirement.includes("FAFSA") || requirement.includes("CSS")) {
      return profile.materials.includes("fafsa") ? `Done: ${requirement}` : `To do: ${requirement}`;
    }
    if (requirement.includes("recommendation") || requirement.includes("Recommendation")) {
      return profile.materials.includes("recommendations") ? `Done: ${requirement}` : `To do: ${requirement}`;
    }
    if (requirement.includes("Transcript")) {
      return profile.materials.includes("transcript") ? `Done: ${requirement}` : `To do: ${requirement}`;
    }
    if (requirement.includes("test") || requirement.includes("Test")) {
      return profile.materials.includes("test") ? `Done: ${requirement}` : `To do: ${requirement}`;
    }
    return isDone ? `Done: ${requirement}` : `Review: ${requirement}`;
  });
}

function renderResults(profile) {
  const sourceSchools = state.flow === "evaluate"
    ? state.selectedSchools.map((index) => schools[index])
    : recommendSchools(profile);

  const results = sourceSchools
    .map((school) => resultForSchool(profile, school))
    .sort((a, b) => state.flow === "recommend" ? b.match + b.chance - (a.match + a.chance) : 0);

  window.currentResults = results;
  state.activeFilter = "all";
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.filter === "all"));
  renderResultCards();
  const avgMatch = Math.round(results.reduce((sum, item) => sum + item.match, 0) / results.length);
  const avgChance = Math.round(results.reduce((sum, item) => sum + item.chance, 0) / results.length);
  resultsSummary.innerHTML = `
    <h3>${state.flow === "evaluate" ? "Selected school evaluation" : "Recommended college list"}</h3>
    <p>${state.user.name}, your list averages a ${avgMatch}% match score and an estimated ${avgChance}% admission chance. Percentages are planning estimates based on the data entered, not guarantees or official admissions decisions.</p>
  `;
  showView("results", "Results");
}

function recommendSchools(profile) {
  const allResults = schools.map((school) => resultForSchool(profile, school));
  const reaches = allResults.filter((item) => item.category === "reach").sort((a, b) => b.match - a.match).slice(0, 3);
  const matches = allResults.filter((item) => item.category === "match").sort((a, b) => b.match + b.chance - (a.match + a.chance)).slice(0, 5);
  const likely = allResults.filter((item) => item.category === "likely").sort((a, b) => b.match - a.match).slice(0, 2);
  const picked = [...reaches, ...matches, ...likely].map((item) => item.school);
  return picked.length ? picked : allResults.sort((a, b) => b.match - a.match).slice(0, 8).map((item) => item.school);
}

function renderResultCards() {
  const results = window.currentResults || [];
  const filtered = state.activeFilter === "all" ? results : results.filter((item) => item.category === state.activeFilter);
  resultsGrid.innerHTML = filtered.map((item) => `
    <article class="result-card" data-category="${item.category}">
      <div class="result-meta">
        <span class="tag ${item.category}">${labelize(item.category)}</span>
        <span class="pill">${rankLabel(item.school)}</span>
        <span class="pill">${item.school.usNewsCategory}</span>
        <span class="pill">${labelize(item.school.region)}</span>
        <span class="pill">${labelize(item.school.size)}</span>
        <span class="pill">${item.school.admitRate}% baseline admit rate</span>
      </div>
      <h3>${item.school.name}</h3>
      <div class="score-row">
        <div class="score-box">
          <span>AdmitFit match</span>
          <strong>${item.match}%</strong>
          <div class="meter"><span style="width:${item.match}%"></span></div>
        </div>
        <div class="score-box">
          <span>Estimated admission chance</span>
          <strong>${item.chance}%</strong>
          <div class="meter admit"><span style="width:${item.chance}%"></span></div>
        </div>
      </div>
      <div class="details-grid">
        <div class="detail-box">
          <h4>Profile match</h4>
          <ul>${item.strengths.map((strength) => `<li>${strength}</li>`).join("")}</ul>
        </div>
        <div class="detail-box">
          <h4>Application checklist</h4>
          <ul>${item.checklist.slice(0, 6).map((task) => `<li>${task}</li>`).join("")}</ul>
        </div>
      </div>
    </article>
  `).join("") || `<p class="helper-text">No schools in this category yet.</p>`;
}

document.querySelector("#login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  state.user = {
    name: data.get("studentName"),
    email: data.get("studentEmail")
  };
  showView("choice", "Choose a path");
});

let loginDragStart = null;
let loginDragCurrent = null;
let loginSheetProgress = 0;
let loginWheelTimer = null;

loginSwipeButton.addEventListener("click", openLoginSheet);
document.querySelector(".app-shell:not(.focus-mode) .topbar")?.addEventListener("click", openLoginSheet);

appShell.addEventListener("pointerdown", (event) => {
  if (appShell.classList.contains("focus-mode")) return;
  if (appShell.classList.contains("login-open") && isFormInteraction(event.target)) return;
  loginDragStart = event.clientY;
  loginDragCurrent = event.clientY;
  appShell.classList.add("is-dragging");
  appShell.setPointerCapture?.(event.pointerId);
});

appShell.addEventListener("pointermove", (event) => {
  if (loginDragStart === null || appShell.classList.contains("focus-mode")) return;
  loginDragCurrent = event.clientY;
  const distance = loginDragStart - loginDragCurrent;
  if (appShell.classList.contains("login-open")) {
    const dismiss = Math.max(0, -distance * 2.4);
    loginWorkspace.style.setProperty("--login-sheet-shift", `calc(-20vh + ${dismiss}px)`);
  } else {
    const reveal = Math.min(560, Math.max(0, distance) * 4.2);
    loginWorkspace.style.setProperty("--login-sheet-shift", `calc(100% - ${reveal}px)`);
  }
});

appShell.addEventListener("pointerup", (event) => {
  if (loginDragStart === null || appShell.classList.contains("focus-mode")) return;
  const distance = loginDragStart - event.clientY;
  const wasOpen = appShell.classList.contains("login-open");
  loginDragStart = null;
  loginDragCurrent = null;
  appShell.releasePointerCapture?.(event.pointerId);
  if (wasOpen && distance < -8) {
    closeLoginSheet();
  } else if (!wasOpen && distance > 8) {
    openLoginSheet();
  } else {
    appShell.classList.remove("is-dragging");
    loginWorkspace.style.removeProperty("--login-sheet-shift");
  }
});

appShell.addEventListener("pointercancel", () => {
  loginDragStart = null;
  loginDragCurrent = null;
  appShell.classList.remove("is-dragging");
  loginWorkspace.style.removeProperty("--login-sheet-shift");
});

appShell.addEventListener("wheel", (event) => {
  if (appShell.classList.contains("focus-mode")) return;
  if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;

  event.preventDefault();
  loginSheetProgress = clamp(loginSheetProgress + event.deltaY / 180, 0, 1);
  const shift = 100 - loginSheetProgress * 120;
  appShell.classList.add("is-dragging");
  loginWorkspace.style.setProperty("--login-sheet-shift", `${shift}vh`);

  clearTimeout(loginWheelTimer);
  loginWheelTimer = setTimeout(() => {
    if (loginSheetProgress >= 0.18) {
      openLoginSheet();
    } else {
      closeLoginSheet();
    }
  }, 70);
}, { passive: false });

document.querySelectorAll(".choice-card").forEach((button) => {
  button.addEventListener("click", () => {
    state.flow = button.dataset.flow;
    if (state.flow === "evaluate") {
      state.schoolSearch = "";
      state.schoolSort = "ranking";
      state.visibleSchoolLimit = 120;
      schoolSearch.value = "";
      document.querySelectorAll(".mini-feature[data-sort]").forEach((sortButton) => {
        sortButton.classList.toggle("active", sortButton.dataset.sort === state.schoolSort);
      });
      renderSchoolPicker();
      showView("school", "Select schools");
    } else {
      showView("profile", "Student information");
    }
  });
});

schoolSearch.addEventListener("input", (event) => {
  state.schoolSearch = event.target.value;
  state.visibleSchoolLimit = 120;
  renderSchoolPicker();
});

document.querySelectorAll(".mini-feature[data-sort]").forEach((button) => {
  button.addEventListener("click", () => {
    state.schoolSort = button.dataset.sort;
    state.visibleSchoolLimit = 120;
    document.querySelectorAll(".mini-feature[data-sort]").forEach((sortButton) => {
      sortButton.classList.toggle("active", sortButton === button);
    });
    renderSchoolPicker();
  });
});

schoolPicker.addEventListener("click", (event) => {
  if (event.target.closest("#load-more-schools")) {
    state.visibleSchoolLimit += 120;
    renderSchoolPicker();
    return;
  }

  const card = event.target.closest("[data-school]");
  if (!card) return;
  const index = Number(card.dataset.school);
  const alreadySelected = state.selectedSchools.includes(index);
  if (alreadySelected) {
    state.selectedSchools = state.selectedSchools.filter((item) => item !== index);
  } else if (state.selectedSchools.length < 10) {
    state.selectedSchools.push(index);
  } else {
    alert("You can choose up to ten schools.");
  }
  renderSchoolPicker();
});

document.querySelector("#school-next-button").addEventListener("click", () => {
  if (!state.selectedSchools.length) {
    alert("Choose at least one school to evaluate.");
    return;
  }
  showView("profile", "Student information");
});

yourListButton.addEventListener("click", () => {
  renderYourList();
  showView("list", "Your list");
});

document.querySelector("#list-back-button").addEventListener("click", () => {
  showView("school", "Select schools");
});

document.querySelector("#list-next-button").addEventListener("click", () => {
  if (!state.selectedSchools.length) {
    alert("Choose at least one school to evaluate.");
    showView("school", "Select schools");
    return;
  }
  showView("profile", "Student information");
});

document.querySelector("#school-back-button").addEventListener("click", () => {
  showView("choice", "Choose a path");
});

document.querySelector("#profile-back-button").addEventListener("click", () => {
  if (state.flow === "evaluate") showView("school", "Select schools");
  else showView("choice", "Choose a path");
});

document.querySelector("#profile-form").addEventListener("submit", (event) => {
  event.preventDefault();
  renderResults(parseProfile(event.currentTarget));
});

document.querySelector(".tabs").addEventListener("click", (event) => {
  const tab = event.target.closest("[data-filter]");
  if (!tab) return;
  state.activeFilter = tab.dataset.filter;
  document.querySelectorAll(".tab").forEach((button) => button.classList.toggle("active", button === tab));
  renderResultCards();
});

restartButton.addEventListener("click", () => {
  state.flow = null;
  state.selectedSchools = [];
  state.activeFilter = "all";
  state.schoolSearch = "";
  state.schoolSort = "ranking";
  state.visibleSchoolLimit = 120;
  window.currentResults = [];
  document.querySelector("#profile-form").reset();
  schoolSearch.value = "";
  document.querySelectorAll(".mini-feature[data-sort]").forEach((sortButton) => {
    sortButton.classList.toggle("active", sortButton.dataset.sort === state.schoolSort);
  });
  showView("choice", "Choose a path");
});

loadRankingData();

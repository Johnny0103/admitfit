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

const rankingMetadata = {
  source: "U.S. News & World Report 2026 Best Colleges",
  sourceUrl: "https://www.usnews.com/best-colleges/rankings/national-universities",
  verifiedDate: "2026-06-05",
  releaseDate: "2025-09-22"
};

const popularityScores = [94, 92, 91, 96, 89, 86, 93, 88, 84, 87, 82, 78, 75, 76, 80, 74, 72];
schools.forEach((school, index) => {
  school.popularity = popularityScores[index] || 70;
});

const state = {
  user: null,
  flow: null,
  selectedSchools: [],
  activeFilter: "all",
  schoolSearch: "",
  schoolSort: "ranking"
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
  return `U.S. News #${school.usNewsRank}`;
}

function officialIconUrl(school) {
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(school.officialDomain)}&sz=128`;
}

function schoolIcon(school) {
  return `<img src="${officialIconUrl(school)}" alt="${school.name} official site icon" loading="lazy">`;
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

function renderSchoolPicker() {
  renderRankingNotice();
  updateSelectionCount();
  const query = state.schoolSearch.trim().toLowerCase();
  const visibleSchools = schools
    .map((school, index) => ({ school, index }))
    .filter(({ school }) => {
      if (!query) return true;
      const searchable = [
        school.name,
        school.region,
        school.size,
        ...school.majors,
        ...school.traits
      ].join(" ").toLowerCase();
      return searchable.includes(query);
    })
    .sort((a, b) => {
      if (state.schoolSort === "popular") return b.school.popularity - a.school.popularity;
      return a.school.usNewsRank - b.school.usNewsRank || a.school.name.localeCompare(b.school.name);
    });

  schoolPicker.innerHTML = visibleSchools.map(({ school, index }) => `
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
        </div>
      </div>
    </button>
  `).join("") || `<p class="helper-text">No colleges match that search.</p>`;
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
  renderSchoolPicker();
});

document.querySelectorAll(".mini-feature[data-sort]").forEach((button) => {
  button.addEventListener("click", () => {
    state.schoolSort = button.dataset.sort;
    document.querySelectorAll(".mini-feature[data-sort]").forEach((sortButton) => {
      sortButton.classList.toggle("active", sortButton === button);
    });
    renderSchoolPicker();
  });
});

schoolPicker.addEventListener("click", (event) => {
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
  window.currentResults = [];
  document.querySelector("#profile-form").reset();
  schoolSearch.value = "";
  document.querySelectorAll(".mini-feature[data-sort]").forEach((sortButton) => {
    sortButton.classList.toggle("active", sortButton.dataset.sort === state.schoolSort);
  });
  showView("choice", "Choose a path");
});

loadRankingData();

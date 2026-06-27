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

const verifiedRankingEntries = [
  { rank: 1, name: "Princeton University", domain: "princeton.edu", state: "NJ", size: "medium" },
  { rank: 2, name: "Massachusetts Institute of Technology", aliases: ["MIT"], domain: "mit.edu", state: "MA", size: "medium" },
  { rank: 3, name: "Harvard University", domain: "harvard.edu", state: "MA", size: "medium" },
  { rank: 4, name: "Stanford University", domain: "stanford.edu", state: "CA", size: "medium" },
  { rank: 4, name: "Yale University", domain: "yale.edu", state: "CT", size: "medium" },
  { rank: 6, name: "University of Chicago", domain: "uchicago.edu", state: "IL", size: "medium" },
  { rank: 7, name: "Duke University", domain: "duke.edu", state: "NC", size: "medium" },
  { rank: 7, name: "Johns Hopkins University", domain: "jhu.edu", state: "MD", size: "medium" },
  { rank: 7, name: "Northwestern University", domain: "northwestern.edu", state: "IL", size: "medium" },
  { rank: 7, name: "University of Pennsylvania", aliases: ["Penn", "UPenn"], domain: "upenn.edu", state: "PA", size: "medium" },
  { rank: 11, name: "California Institute of Technology", aliases: ["Caltech"], domain: "caltech.edu", state: "CA", size: "small" },
  { rank: 12, name: "Cornell University", domain: "cornell.edu", state: "NY", size: "large" },
  { rank: 13, name: "Brown University", domain: "brown.edu", state: "RI", size: "medium" },
  { rank: 13, name: "Dartmouth College", domain: "dartmouth.edu", state: "NH", size: "medium" },
  { rank: 15, name: "Columbia University", domain: "columbia.edu", state: "NY", size: "medium" },
  { rank: 15, name: "University of California, Berkeley", aliases: ["UC Berkeley", "UCB", "Cal"], domain: "berkeley.edu", state: "CA", size: "large" },
  { rank: 17, name: "Rice University", domain: "rice.edu", state: "TX", size: "medium" },
  { rank: 17, name: "University of California, Los Angeles", aliases: ["UCLA", "UC Los Angeles"], domain: "ucla.edu", state: "CA", size: "large" },
  { rank: 17, name: "Vanderbilt University", domain: "vanderbilt.edu", state: "TN", size: "medium" },
  { rank: 20, name: "Carnegie Mellon University", aliases: ["CMU"], domain: "cmu.edu", state: "PA", size: "medium" },
  { rank: 20, name: "University of Michigan–Ann Arbor", matchName: "University of Michigan", aliases: ["University of Michigan", "UMich", "Michigan"], domain: "umich.edu", state: "MI", size: "large" },
  { rank: 20, name: "University of Notre Dame", domain: "nd.edu", state: "IN", size: "medium" },
  { rank: 20, name: "Washington University in St. Louis", aliases: ["WashU"], domain: "wustl.edu", state: "MO", size: "medium" },
  { rank: 24, name: "Emory University", domain: "emory.edu", state: "GA", size: "medium" },
  { rank: 24, name: "Georgetown University", domain: "georgetown.edu", state: "DC", size: "medium" },
  { rank: 26, name: "University of North Carolina at Chapel Hill", aliases: ["UNC Chapel Hill", "UNC"], domain: "unc.edu", state: "NC", size: "large" },
  { rank: 26, name: "University of Virginia", aliases: ["UVA"], domain: "virginia.edu", state: "VA", size: "large" },
  { rank: 28, name: "University of Southern California", aliases: ["USC"], domain: "usc.edu", state: "CA", size: "large" },
  { rank: 29, name: "University of California, San Diego", aliases: ["UCSD", "UC San Diego"], domain: "ucsd.edu", state: "CA", size: "large" },
  { rank: 30, name: "University of Florida", domain: "ufl.edu", state: "FL", size: "large" },
  { rank: 30, name: "University of Texas at Austin", aliases: ["UT Austin", "UT"], domain: "utexas.edu", state: "TX", size: "large" },
  { rank: 32, name: "Georgia Institute of Technology", aliases: ["Georgia Tech"], domain: "gatech.edu", state: "GA", size: "large" },
  { rank: 32, name: "New York University", aliases: ["NYU"], domain: "nyu.edu", state: "NY", size: "large" },
  { rank: 32, name: "University of California, Davis", aliases: ["UCD", "UC Davis"], domain: "ucdavis.edu", state: "CA", size: "large" },
  { rank: 32, name: "University of California, Irvine", aliases: ["UCI", "UC Irvine"], domain: "uci.edu", state: "CA", size: "large" },
  { rank: 36, name: "Boston College", aliases: ["BC"], domain: "bc.edu", state: "MA", size: "medium" },
  { rank: 36, name: "Tufts University", domain: "tufts.edu", state: "MA", size: "medium" },
  { rank: 36, name: "University of Illinois Urbana-Champaign", aliases: ["UIUC"], domain: "illinois.edu", state: "IL", size: "large" },
  { rank: 36, name: "University of Wisconsin–Madison", aliases: ["UW Madison", "Wisconsin"], domain: "wisc.edu", state: "WI", size: "large" },
  { rank: 40, name: "University of California, Santa Barbara", aliases: ["UCSB", "UC Santa Barbara"], domain: "ucsb.edu", state: "CA", size: "large" },
  { rank: 41, name: "The Ohio State University", matchName: "Ohio State University", aliases: ["Ohio State", "OSU"], domain: "osu.edu", state: "OH", size: "large" },
  { rank: 42, name: "Boston University", aliases: ["BU"], domain: "bu.edu", state: "MA", size: "large" },
  { rank: 42, name: "Rutgers University–New Brunswick", aliases: ["Rutgers"], domain: "rutgers.edu", state: "NJ", size: "large" },
  { rank: 42, name: "University of Maryland, College Park", aliases: ["UMD"], domain: "umd.edu", state: "MD", size: "large" },
  { rank: 42, name: "University of Washington", aliases: ["UW"], domain: "washington.edu", state: "WA", size: "large" },
  { rank: 46, name: "Lehigh University", domain: "lehigh.edu", state: "PA", size: "medium" },
  { rank: 46, name: "Northeastern University", aliases: ["NEU"], domain: "northeastern.edu", state: "MA", size: "large" },
  { rank: 46, name: "Purdue University–Main Campus", matchName: "Purdue University", aliases: ["Purdue", "Purdue University"], domain: "purdue.edu", state: "IN", size: "large" },
  { rank: 46, name: "University of Georgia", aliases: ["UGA"], domain: "uga.edu", state: "GA", size: "large" },
  { rank: 46, name: "University of Rochester", domain: "rochester.edu", state: "NY", size: "medium" },
  { rank: 51, name: "Case Western Reserve University", aliases: ["Case Western", "CWRU"], domain: "case.edu", state: "OH", size: "medium" },
  { rank: 51, name: "Florida State University", aliases: ["FSU"], domain: "fsu.edu", state: "FL", size: "large" },
  { rank: 51, name: "Texas A&M University", aliases: ["TAMU"], domain: "tamu.edu", state: "TX", size: "large" },
  { rank: 51, name: "Virginia Tech", domain: "vt.edu", state: "VA", size: "large" },
  { rank: 51, name: "Wake Forest University", domain: "wfu.edu", state: "NC", size: "medium" },
  { rank: 51, name: "William & Mary", domain: "wm.edu", state: "VA", size: "medium" },
  { rank: 57, name: "University of California, Merced", aliases: ["UCM", "UC Merced"], domain: "ucmerced.edu", state: "CA", size: "medium" },
  { rank: 57, name: "Villanova University", domain: "villanova.edu", state: "PA", size: "medium" },
  { rank: 59, name: "George Washington University", aliases: ["GWU"], domain: "gwu.edu", state: "DC", size: "medium" },
  { rank: 59, name: "The Pennsylvania State University–University Park", aliases: ["Penn State", "Penn State University Park"], domain: "psu.edu", state: "PA", size: "large" },
  { rank: 59, name: "Santa Clara University", aliases: ["SCU"], domain: "scu.edu", state: "CA", size: "medium" },
  { rank: 59, name: "Stony Brook University–SUNY", aliases: ["Stony Brook University"], domain: "stonybrook.edu", state: "NY", size: "large" },
  { rank: 59, name: "University of Minnesota–Twin Cities", aliases: ["University of Minnesota"], domain: "umn.edu", state: "MN", size: "large" },
  { rank: 64, name: "Michigan State University", domain: "msu.edu", state: "MI", size: "large" },
  { rank: 64, name: "North Carolina State University", aliases: ["NC State"], domain: "ncsu.edu", state: "NC", size: "large" },
  { rank: 64, name: "Rensselaer Polytechnic Institute", aliases: ["RPI"], domain: "rpi.edu", state: "NY", size: "medium" },
  { rank: 64, name: "University of Massachusetts Amherst", aliases: ["UMass Amherst"], domain: "umass.edu", state: "MA", size: "large" },
  { rank: 64, name: "University of Miami", domain: "miami.edu", state: "FL", size: "medium" },
  { rank: 69, name: "Brandeis University", domain: "brandeis.edu", state: "MA", size: "medium" },
  { rank: 69, name: "Tulane University of Louisiana", aliases: ["Tulane University"], domain: "tulane.edu", state: "LA", size: "medium" },
  { rank: 69, name: "University of Connecticut", aliases: ["UConn"], domain: "uconn.edu", state: "CT", size: "large" },
  { rank: 69, name: "University of Pittsburgh", aliases: ["Pitt"], domain: "pitt.edu", state: "PA", size: "large" },
  { rank: 73, name: "Binghamton University–SUNY", aliases: ["Binghamton University"], domain: "binghamton.edu", state: "NY", size: "medium" },
  { rank: 73, name: "Indiana University–Bloomington", aliases: ["Indiana University"], domain: "iu.edu", state: "IN", size: "large" },
  { rank: 75, name: "Clemson University", domain: "clemson.edu", state: "SC", size: "large" },
  { rank: 75, name: "Rutgers University–Newark", domain: "newark.rutgers.edu", state: "NJ", size: "medium" },
  { rank: 75, name: "Syracuse University", domain: "syracuse.edu", state: "NY", size: "large" },
  { rank: 75, name: "University at Buffalo–SUNY", aliases: ["University at Buffalo", "SUNY Buffalo"], domain: "buffalo.edu", state: "NY", size: "large" },
  { rank: 75, name: "University of California, Riverside", aliases: ["UCR", "UC Riverside"], domain: "ucr.edu", state: "CA", size: "large" },
  { rank: 80, name: "Colorado School of Mines", domain: "mines.edu", state: "CO", size: "medium" },
  { rank: 80, name: "Drexel University", domain: "drexel.edu", state: "PA", size: "large" },
  { rank: 80, name: "New Jersey Institute of Technology", aliases: ["NJIT"], domain: "njit.edu", state: "NJ", size: "medium" },
  { rank: 80, name: "Stevens Institute of Technology", domain: "stevens.edu", state: "NJ", size: "medium" },
  { rank: 84, name: "Pepperdine University", domain: "pepperdine.edu", state: "CA", size: "medium" },
  { rank: 84, name: "University of Illinois Chicago", aliases: ["UIC"], domain: "uic.edu", state: "IL", size: "large" },
  { rank: 84, name: "Worcester Polytechnic Institute", aliases: ["WPI"], domain: "wpi.edu", state: "MA", size: "medium" },
  { rank: 84, name: "Yeshiva University", domain: "yu.edu", state: "NY", size: "medium" },
  { rank: 88, name: "American University", domain: "american.edu", state: "DC", size: "medium" },
  { rank: 88, name: "Baylor University", domain: "baylor.edu", state: "TX", size: "large" },
  { rank: 88, name: "Howard University", domain: "howard.edu", state: "DC", size: "medium" },
  { rank: 88, name: "Marquette University", domain: "marquette.edu", state: "WI", size: "medium" },
  { rank: 88, name: "Rochester Institute of Technology", aliases: ["RIT"], domain: "rit.edu", state: "NY", size: "large" },
  { rank: 88, name: "Southern Methodist University", aliases: ["SMU"], domain: "smu.edu", state: "TX", size: "medium" },
  { rank: 88, name: "University of California, Santa Cruz", aliases: ["UCSC", "UC Santa Cruz"], domain: "ucsc.edu", state: "CA", size: "large" },
  { rank: 88, name: "University of Delaware", domain: "udel.edu", state: "DE", size: "large" },
  { rank: 88, name: "University of South Florida", aliases: ["USF"], domain: "usf.edu", state: "FL", size: "large" },
  { rank: 97, name: "Florida International University", aliases: ["FIU"], domain: "fiu.edu", state: "FL", size: "large" },
  { rank: 97, name: "Fordham University", domain: "fordham.edu", state: "NY", size: "medium" },
  { rank: 97, name: "Rutgers University–Camden", domain: "camden.rutgers.edu", state: "NJ", size: "medium" },
  { rank: 97, name: "Texas Christian University", aliases: ["TCU"], domain: "tcu.edu", state: "TX", size: "medium" },
  { rank: 97, name: "University of Colorado Boulder", aliases: ["CU Boulder"], domain: "colorado.edu", state: "CO", size: "large" }
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
const DIRECTORY_FETCH_TIMEOUT_MS = 6000;
const SCORECARD_FETCH_TIMEOUT_MS = 3500;
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
let directoryHydrationStarted = false;
let scorecardSearchStatus = "idle";
const scorecardSearchCache = new Map();
const campusPhotoCache = new Map();
let schoolSearchToken = 0;

const rankingMetadata = {
  source: "U.S. News & World Report 2026 Best Colleges",
  sourceUrl: "https://www.usnews.com/best-colleges/rankings/national-universities",
  verifiedDate: "2026-06-08",
  releaseDate: "2025-09-23",
  sources: [
    {
      label: "U.S. News official 2026 release",
      url: "https://www.prnewswire.com/news-releases/us-news-announces-2026-best-colleges-rankings-302563669.html"
    },
    {
      label: "Ivy Coach Top 50 cross-check",
      url: "https://www.ivycoach.com/the-ivy-coach-blog/college-admissions/2026-college-rankings/"
    },
    {
      label: "Think Academy Top 100 ranking-shifts PDF",
      url: "https://www.thethinkacademy.com/blog/wp-content/uploads/2025/10/Think-Academy-Top-100-College-Ranking-Shifts-2026-vs.-2025.pdf"
    }
  ]
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
  visibleSchoolLimit: 120,
  rankingExpanded: false
};

const views = {
  login: document.querySelector("#login-view"),
  choice: document.querySelector("#choice-view"),
  school: document.querySelector("#school-view"),
  list: document.querySelector("#list-view"),
  schoolPreview: document.querySelector("#school-preview-view"),
  profile: document.querySelector("#profile-view"),
  results: document.querySelector("#results-view"),
  next: document.querySelector("#next-view")
};

const viewTitle = document.querySelector("#view-title");
const appShell = document.querySelector(".app-shell");
const loginWorkspace = document.querySelector(".workspace");
const restartButton = document.querySelector("#restart-button");
const yourListButton = document.querySelector("#your-list-button");
const loginSwipeButton = document.querySelector("#login-swipe-button");
const schoolPicker = document.querySelector("#school-picker");
const schoolSearch = document.querySelector("#school-search");
const schoolResultsPanel = document.querySelector("#school-results-panel");
const schoolPreview = document.querySelector("#school-preview");
const rankingNotice = document.querySelector("#ranking-notice");
const selectedCount = document.querySelector("#selected-count");
const notePage = document.querySelector("#note-page");
const resultsGrid = document.querySelector("#results-grid");
const resultsSummary = document.querySelector("#results-summary");
const nextGrid = document.querySelector("#next-grid");

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
    rankingMetadata.sources = data.sources || rankingMetadata.sources;

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

async function fetchWithTimeout(url, options = {}, timeout = 5000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
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

function estimatedAdmitRateForRank(rank) {
  if (rank <= 5) return 4;
  if (rank <= 15) return 7;
  if (rank <= 30) return 14;
  if (rank <= 50) return 28;
  if (rank <= 75) return 45;
  return 58;
}

function schoolFromRankingEntry(entry) {
  const admitRate = entry.admitRate || estimatedAdmitRateForRank(entry.rank);
  return {
    name: entry.name,
    region: inferRegionFromState(entry.state || ""),
    size: entry.size || "medium",
    majors: ["engineering", "business", "health", "social", "arts", "undecided"],
    admitRate,
    avgGpa: admitRate < 10 ? 3.92 : admitRate < 25 ? 3.78 : admitRate < 50 ? 3.58 : 3.42,
    avgSat: admitRate < 10 ? 1510 : admitRate < 25 ? 1420 : admitRate < 50 ? 1300 : 1210,
    rigor: admitRate < 10 ? 11 : admitRate < 25 ? 9 : admitRate < 50 ? 7 : 6,
    netCost: 30000,
    usNewsRank: entry.rank,
    usNewsCategory: "National Universities",
    officialDomain: entry.domain || "",
    popularity: clamp(96 - Math.floor(entry.rank / 2), 55, 96),
    source: "ranking",
    searchAliases: entry.aliases || [],
    traits: ["2026 U.S. News National Universities", "Verified ranking view", `${entry.state || "U.S."} campus`],
    requirements: ["Application form", "Transcript", "Test score policy review", "Activities list", "Personal essay", "Supplemental essays", "Financial aid forms"]
  };
}

function rankedSchoolItems(query = "") {
  const existingNames = new Map(schools.map((school, index) => [school.name.toLowerCase(), index]));
  const items = verifiedRankingEntries.map((entry) => {
    const lookupName = (entry.matchName || entry.name).toLowerCase();
    let index = existingNames.get(lookupName);

    if (index === undefined) {
      index = schools.length;
      schools.push(schoolFromRankingEntry(entry));
      existingNames.set(lookupName, index);
      existingNames.set(entry.name.toLowerCase(), index);
    } else {
      const school = schools[index];
      school.usNewsRank = entry.rank;
      school.usNewsCategory = "National Universities";
      school.officialDomain = school.officialDomain || entry.domain || "";
      school.region = school.region === "any" ? inferRegionFromState(entry.state || "") : school.region;
      school.size = school.size || entry.size || "medium";
      school.popularity = Math.max(school.popularity || 0, clamp(96 - Math.floor(entry.rank / 2), 55, 96));
      school.searchAliases = [...new Set([...(school.searchAliases || []), ...(entry.aliases || []), entry.name])];
    }

    return { school: schools[index], index, rank: entry.rank, entry };
  });

  const normalizedQuery = query.trim().toLowerCase();
  return items
    .filter(({ school, entry }) => {
      if (!normalizedQuery) return true;
      return `${searchTextForSchool(school)} ${entry.name} ${(entry.aliases || []).join(" ")}`.toLowerCase().includes(normalizedQuery);
    })
    .sort((a, b) => a.rank - b.rank || a.school.name.localeCompare(b.school.name));
}

async function loadUniversityDirectory() {
  if (universityDirectory) return universityDirectory;
  if (universityDirectoryPromise) return universityDirectoryPromise;

  universityDirectoryStatus = "loading";
  universityDirectoryPromise = fetchWithTimeout(UNIVERSITY_DIRECTORY_URL, { cache: "force-cache" }, DIRECTORY_FETCH_TIMEOUT_MS)
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
    const response = await fetchWithTimeout(`${SCORECARD_SEARCH_URL}?${params.toString()}`, { cache: "no-store" }, SCORECARD_FETCH_TIMEOUT_MS);
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
  if (directoryPoolAdded || directoryHydrationStarted || universityDirectoryStatus === "error") return 0;
  directoryHydrationStarted = true;
  await loadUniversityDirectory();
  return addDirectoryPool();
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
    <span class="ranking-sources">Sources used: ${rankingMetadata.sources.map((source) => `<a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`).join(" · ")}</span>
  `;
}

function showView(name, title) {
  Object.values(views).forEach((view) => view.classList.add("hidden"));
  views[name].classList.remove("hidden");
  viewTitle.textContent = title;
  restartButton.classList.toggle("hidden", name === "login");
  yourListButton.classList.toggle("hidden", !["school", "schoolPreview", "list", "profile", "results", "next"].includes(name));
  appShell.classList.toggle("focus-mode", name !== "login");
  if (name === "login") {
    appShell.classList.remove("login-open");
    appShell.classList.remove("is-dragging");
    loginWorkspace.style.removeProperty("--login-sheet-shift");
    loginSwipeButton.setAttribute("aria-expanded", "false");
    loginSheetProgress = 0;
    setLoginVisualProgress(0);
  }
}

function setLoginVisualProgress(value) {
  const progress = clamp(value, 0, 1);
  appShell.style.setProperty("--login-dim", progress.toFixed(3));
}

function openLoginSheet() {
  appShell.classList.remove("is-dragging");
  loginWorkspace.style.removeProperty("--login-sheet-shift");
  appShell.classList.add("login-open");
  loginSwipeButton.setAttribute("aria-expanded", "true");
  loginSheetProgress = 1;
  setLoginVisualProgress(1);
}

function closeLoginSheet() {
  appShell.classList.remove("is-dragging");
  loginWorkspace.style.removeProperty("--login-sheet-shift");
  appShell.classList.remove("login-open");
  loginSwipeButton.setAttribute("aria-expanded", "false");
  loginSheetProgress = 0;
  setLoginVisualProgress(0);
}

function isFormInteraction(target) {
  return Boolean(target.closest("input, select, textarea, button, a, label"));
}

function resetSchoolBrowse() {
  state.schoolSearch = "";
  state.visibleSchoolLimit = 120;
  state.rankingExpanded = false;
  schoolSearch.value = "";
  schoolPicker.innerHTML = "";
  rankingNotice.innerHTML = "";
  schoolResultsPanel.classList.add("hidden");
  document.querySelectorAll(".mini-feature[data-sort]").forEach((sortButton) => {
    sortButton.classList.remove("active");
  });
}

function selectSchool(index) {
  const alreadySelected = state.selectedSchools.includes(index);
  if (alreadySelected) {
    state.selectedSchools = state.selectedSchools.filter((item) => item !== index);
    return true;
  }
  if (state.selectedSchools.length >= 10) {
    alert("You can choose up to ten schools.");
    return false;
  }
  state.selectedSchools.push(index);
  return true;
}

function schoolLocationLabel(school) {
  const knownLocations = {
    "stanford.edu": "Stanford, California",
    "berkeley.edu": "Berkeley, California",
    "usc.edu": "Los Angeles, California",
    "nyu.edu": "New York, New York",
    "umich.edu": "Ann Arbor, Michigan",
    "gatech.edu": "Atlanta, Georgia",
    "utexas.edu": "Austin, Texas",
    "bu.edu": "Boston, Massachusetts",
    "purdue.edu": "West Lafayette, Indiana",
    "northeastern.edu": "Boston, Massachusetts",
    "washington.edu": "Seattle, Washington",
    "scu.edu": "Santa Clara, California",
    "uoregon.edu": "Eugene, Oregon",
    "lmu.edu": "Los Angeles, California",
    "osu.edu": "Columbus, Ohio",
    "ua.edu": "Tuscaloosa, Alabama",
    "amherst.edu": "Amherst, Massachusetts",
    "ucla.edu": "Los Angeles, California",
    "ucsd.edu": "La Jolla, California",
    "ucdavis.edu": "Davis, California",
    "uci.edu": "Irvine, California",
    "ucsb.edu": "Santa Barbara, California",
    "ucmerced.edu": "Merced, California",
    "ucr.edu": "Riverside, California",
    "ucsc.edu": "Santa Cruz, California"
  };
  return knownLocations[school.officialDomain] || `${labelize(school.region)} region`;
}

function wikiTitleForSchool(school) {
  const titleMap = {
    "berkeley.edu": "University of California, Berkeley",
    "ucsd.edu": "University of California, San Diego",
    "ucsb.edu": "University of California, Santa Barbara",
    "ucla.edu": "University of California, Los Angeles",
    "uci.edu": "University of California, Irvine",
    "ucdavis.edu": "University of California, Davis",
    "ucsc.edu": "University of California, Santa Cruz",
    "ucr.edu": "University of California, Riverside",
    "ucmerced.edu": "University of California, Merced"
  };
  return titleMap[school.officialDomain] || school.name;
}

function isBlockedImage(title) {
  const lower = title.toLowerCase();
  if (!/\.(jpe?g|png)$/i.test(title)) return true;
  return ["logo", "seal", "wordmark", "icon", "map", "flag", "athletics", "football", "basketball", "portrait", "headshot", "team", "mascot"].some((blocked) => lower.includes(blocked));
}

function campusImageScore(title, school) {
  const lower = title.toLowerCase();
  if (isBlockedImage(title)) return -100;
  const schoolWords = school.name.toLowerCase().split(/[\s,.-]+/).filter((word) => word.length > 3);
  const campusWords = ["campus", "quad", "library", "hall", "building", "chapel", "tower", "gate", "center", "commons", "dorm", "laboratory", "science", "auditorium", "college", "university", "classroom", "lagoon"];
  const schoolScore = schoolWords.some((word) => lower.includes(word)) ? 4 : 0;
  const campusScore = campusWords.reduce((sum, word) => sum + (lower.includes(word) ? 2 : 0), 0);
  return schoolScore + campusScore;
}

function imageLabel(title) {
  return title
    .replace(/^File:/, "")
    .replace(/\.(jpe?g|png)$/i, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchCampusPhotos(school) {
  const cacheKey = school.officialDomain || school.name;
  if (campusPhotoCache.has(cacheKey)) return campusPhotoCache.get(cacheKey);

  try {
    const title = encodeURIComponent(wikiTitleForSchool(school));
    const imageListUrl = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=images&titles=${title}&imlimit=500`;
    const listResponse = await fetchWithTimeout(imageListUrl, { cache: "force-cache" }, 5000);
    if (!listResponse.ok) throw new Error(`Wikipedia images returned ${listResponse.status}`);
    const listData = await listResponse.json();
    const page = Object.values(listData.query?.pages || {})[0];
    const fileTitles = (page?.images || [])
      .map((item) => item.title)
      .map((title) => ({ title, score: campusImageScore(title, school) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((item) => item.title)
      .slice(0, 8);

    if (!fileTitles.length) {
      campusPhotoCache.set(cacheKey, []);
      return [];
    }

    const files = fileTitles.map(encodeURIComponent).join("|");
    const infoUrl = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=imageinfo&iiprop=url|mime&iiurlwidth=1000&titles=${files}`;
    const infoResponse = await fetchWithTimeout(infoUrl, { cache: "force-cache" }, 5000);
    if (!infoResponse.ok) throw new Error(`Wikipedia image info returned ${infoResponse.status}`);
    const infoData = await infoResponse.json();
    const photos = Object.values(infoData.query?.pages || {})
      .map((pageInfo) => {
        const info = pageInfo.imageinfo?.[0];
        if (!info || !info.mime?.startsWith("image/")) return null;
        return {
          url: info.thumburl || info.url,
          sourceUrl: info.descriptionurl,
          label: imageLabel(pageInfo.title)
        };
      })
      .filter(Boolean)
      .slice(0, 5);

    campusPhotoCache.set(cacheKey, photos);
    return photos;
  } catch (error) {
    console.warn("Campus photo lookup failed.", error);
    campusPhotoCache.set(cacheKey, []);
    return [];
  }
}

function schoolPhotoPanels(school, photos = null) {
  const initials = school.name
    .split(/[\s,-]+/)
    .filter(Boolean)
    .slice(0, 4)
    .map((word) => word[0])
    .join("");
  const photoTone = school.source === "directory" ? "Directory campus profile" : "Official campus profile";
  const photoContent = photos === null
    ? `<div class="preview-photo-loading">Loading actual campus photos...</div>`
    : photos.length
      ? photos.map((photo) => `
        <figure class="preview-photo-card">
          <img src="${photo.url}" alt="${school.name} ${photo.label}" loading="lazy">
          <figcaption>
            <span>${photo.label}</span>
            <strong>${school.name}</strong>
            <a href="${photo.sourceUrl}" target="_blank" rel="noreferrer">Wikimedia source</a>
          </figcaption>
        </figure>
      `).join("")
      : `<div class="preview-photo-empty">No public campus photos were found for this school yet. Use the official website link for more images.</div>`;
  return `
    <div class="preview-photo-scroll" aria-label="${school.name} campus pictures">
      ${photoContent}
    </div>
    <div class="preview-photo preview-photo-side">
      <span class="preview-initials">${initials}</span>
      <div>
        ${schoolIcon(school)}
        <span>${photoTone}</span>
        <em>${school.officialDomain || "Official site"}</em>
      </div>
    </div>
  `;
}

function renderSchoolPreview(index) {
  const school = schools[index];
  const selected = state.selectedSchools.includes(index);
  const cacheKey = school.officialDomain || school.name;
  const cachedPhotos = campusPhotoCache.has(cacheKey) ? campusPhotoCache.get(cacheKey) : null;
  schoolPreview.innerHTML = `
    <article class="preview-card">
      <div class="preview-photos" aria-label="${school.name} official photo area">
        ${schoolPhotoPanels(school, cachedPhotos)}
      </div>
      <div class="preview-copy">
        <span class="tag ${school.source === "directory" ? "likely" : "match"}">${rankLabel(school)}</span>
        <h3>${school.name}</h3>
        <p>${school.name} is a ${labelize(school.size)} ${school.usNewsCategory.toLowerCase()} in the ${labelize(school.region)}. AdmitFit highlights ${school.traits.slice(0, 3).join(", ").toLowerCase()} for students comparing fit, cost, academics, and campus style.</p>
        <div class="preview-facts">
          <span><strong>Location</strong>${schoolLocationLabel(school)}</span>
          <span><strong>Baseline admit rate</strong>${school.admitRate}%</span>
          <span><strong>Campus size</strong>${labelize(school.size)}</span>
          <span><strong>Website</strong>${school.officialDomain || "Available after search"}</span>
        </div>
        <div class="preview-links">
          ${school.officialDomain ? `<a class="secondary-button" href="https://${school.officialDomain}" target="_blank" rel="noreferrer">Official website</a>` : ""}
        </div>
      </div>
    </article>
    <div class="form-actions">
      <button class="secondary-button" id="preview-return-button" type="button">Return</button>
      <button class="primary-button preview-select-button ${selected ? "selected" : ""}" id="preview-select-button" type="button" data-school="${index}">
        ${selected ? "Selected" : "Select school"}
      </button>
    </div>
  `;
  showView("schoolPreview", "School preview");
  if (cachedPhotos === null) {
    fetchCampusPhotos(school).then((photos) => {
      if (views.schoolPreview.classList.contains("hidden")) return;
      const photoPanel = schoolPreview.querySelector(".preview-photos");
      if (photoPanel) photoPanel.innerHTML = schoolPhotoPanels(school, photos);
    });
  }
}

async function renderSchoolPicker() {
  renderRankingNotice();
  updateSelectionCount();
  const query = state.schoolSearch.trim().toLowerCase();
  const token = ++schoolSearchToken;
  const usingVerifiedRanking = state.schoolSort === "ranking";

  if (!usingVerifiedRanking && !query && !directoryPoolAdded && !directoryHydrationStarted && universityDirectoryStatus !== "error") {
    hydrateDirectoryPool().then((added) => {
      if (added && !views.school.classList.contains("hidden") && !state.schoolSearch.trim()) renderSchoolPicker();
    });
  }

  if (!usingVerifiedRanking && query.length >= 2) {
    schoolPicker.innerHTML = `<p class="helper-text search-loading">Searching live U.S. college sources...</p>`;
    const scorecardMatches = await searchScorecard(query);
    if (token !== schoolSearchToken) return;
    addLiveSearchMatches(scorecardMatches);

    if (universityDirectoryStatus === "ready") {
      addDirectoryPool();
    } else if (!directoryHydrationStarted && universityDirectoryStatus !== "error") {
      const queryAtStart = state.schoolSearch.trim().toLowerCase();
      hydrateDirectoryPool().then((added) => {
        const queryNow = state.schoolSearch.trim().toLowerCase();
        if (added && queryNow === queryAtStart && !views.school.classList.contains("hidden")) renderSchoolPicker();
      });
    }
  }

  if (!usingVerifiedRanking) addDirectoryMatches(query);

  const visibleSchools = usingVerifiedRanking
    ? rankedSchoolItems(query)
    : schools
      .map((school, index) => ({ school, index }))
      .filter(({ school }) => {
        if (!query) return true;
        return searchTextForSchool(school).includes(query);
      })
      .sort((a, b) => b.school.popularity - a.school.popularity || a.school.name.localeCompare(b.school.name));

  const totalMatches = visibleSchools.length;
  const rankingLimit = usingVerifiedRanking && !query ? (state.rankingExpanded ? verifiedRankingEntries.length : 50) : state.visibleSchoolLimit;
  const shownSchools = visibleSchools.slice(0, rankingLimit);
  const remainingCount = Math.max(0, totalMatches - shownSchools.length);
  const resultSummary = totalMatches && usingVerifiedRanking && !query
    ? `<p class="school-result-count">Verified ranking view: ${state.rankingExpanded ? `Top 100 + ties (${verifiedRankingEntries.length})` : "Top 50"} National Universities shown.</p>`
    : totalMatches
    ? `<p class="school-result-count">${shownSchools.length} of ${totalMatches} schools shown${directoryPoolAdded ? " from the expanded source" : ""}.</p>`
    : "";
  const loadMore = usingVerifiedRanking && !query && !state.rankingExpanded
    ? `<button class="load-more-schools ranking-more-button" id="show-top-100" type="button">More: show Top 100 + ties</button>`
    : remainingCount
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
      <span class="school-card-hint">Preview</span>
      <span class="school-select-button" data-select-school="${index}">${state.selectedSchools.includes(index) ? "Selected" : "Select"}</span>
    </button>
    `).join("") || `<p class="helper-text">No colleges match that search${scorecardSearchStatus === "error" && universityDirectoryStatus === "error" ? " because live search is unavailable right now" : ""}.</p>`}
    ${loadMore}
  `;
}

function renderYourList() {
  const selected = state.selectedSchools.map((index) => schools[index]);
  const averageAdmit = selected.length
    ? Math.round(selected.reduce((sum, school) => sum + school.admitRate, 0) / selected.length)
    : 0;
  const topRanked = selected.filter((school) => school.usNewsRank && school.usNewsRank < 50).length;
  const regions = [...new Set(selected.map((school) => labelize(school.region)))].slice(0, 3);
  notePage.innerHTML = `
    <div class="note-hero">
      <div>
        <span class="note-kicker">AdmitFit dream deck</span>
        <h3>Your AdmitFit List</h3>
        <p>${selected.length ? "A polished board for the schools you picked. Keep it ambitious, balanced, and personal." : "Your list is waiting for its first school. Pick a few colleges that feel exciting and realistic."}</p>
      </div>
      <div class="note-stats" aria-label="Your list summary">
        <span><strong>${selected.length}</strong> school${selected.length === 1 ? "" : "s"}</span>
        <span><strong>${topRanked}</strong> top 50</span>
        <span><strong>${selected.length ? `${averageAdmit}%` : "--"}</strong> avg admit</span>
      </div>
    </div>
    ${selected.length ? `
      <div class="note-ribbon">
        <span>${regions.length ? regions.join(" + ") : "Regions open"}</span>
        <span>Up to 10 schools</span>
        <span>${10 - selected.length} spots left</span>
      </div>
    ` : ""}
    <div class="note-list">
      ${selected.map((school, position) => `
        <article class="note-school" style="--card-hue:${(position * 54 + 18) % 360}">
          <div class="note-school-top">
            <span class="note-school-number">${String(position + 1).padStart(2, "0")}</span>
            <span class="note-school-icon">${schoolIcon(school)}</span>
          </div>
          <div class="note-school-body">
            <strong>${school.name}</strong>
            <div class="note-chip-row">
              <span>${rankLabel(school)}</span>
              <span>${labelize(school.region)}</span>
              <span>${labelize(school.size)} campus</span>
              <span>${school.admitRate}% admit</span>
            </div>
            <p>${school.traits.slice(0, 2).join(" + ") || "A school to explore more deeply."}</p>
          </div>
        </article>
      `).join("") || `
        <div class="note-empty">
          <span class="note-empty-mark">AF</span>
          <strong>Build a list with personality.</strong>
          <p>Select schools from verified rankings or popular picks, then come back here to see your personal college board take shape.</p>
        </div>
      `}
    </div>
  `;
}

function labelize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function parseProfile(form) {
  const data = new FormData(form);
  const activities = data.getAll("activities");
  const activityDescriptions = Object.fromEntries(activities.map((activity) => [
    activity,
    String(data.get(`activity_${activity}`) || "").trim()
  ]));
  return {
    gpa: Number(data.get("gpa")),
    sat: Number(data.get("sat")),
    act: Number(data.get("act")) || null,
    rigor: Number(data.get("rigor")),
    major: data.get("major"),
    region: data.get("region"),
    size: data.get("size"),
    schoolType: data.get("schoolType"),
    setting: data.get("setting"),
    activities,
    activityDescriptions,
    essays: Number(data.get("essays")),
    recommendations: Number(data.get("recommendations")),
    shiningTypes: data.getAll("shiningTypes"),
    shiningPoint: String(data.get("shiningPoint") || "").trim(),
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

function schoolType(school) {
  const name = school.name.toLowerCase();
  const publicSignals = ["university of ", "state university", "institute of technology", "uc ", "california,"];
  if (school.requirements.some((item) => item.includes("UC application") || item.includes("ApplyTexas") || item.includes("UA application"))) return "public";
  if (publicSignals.some((signal) => name.includes(signal))) return "public";
  return "private";
}

function schoolSetting(school) {
  const text = [...school.traits, school.name, schoolLocationLabel(school)].join(" ").toLowerCase();
  if (text.includes("coastal") || text.includes("beach") || text.includes("santa barbara") || text.includes("la jolla") || text.includes("santa cruz")) return "beach";
  if (text.includes("urban") || text.includes("city") || text.includes("los angeles") || text.includes("new york") || text.includes("boston") || text.includes("atlanta") || text.includes("seattle") || text.includes("austin")) return "city";
  if (text.includes("college town") || text.includes("ann arbor") || text.includes("davis") || text.includes("amherst") || text.includes("west lafayette")) return "college-town";
  if (text.includes("outdoor") || text.includes("nature") || text.includes("redwood") || text.includes("oregon")) return "nature";
  return school.size === "large" ? "city" : "suburban";
}

function activityCharacterStrength(profile) {
  const selected = profile.activities.length;
  const described = profile.activities.filter((activity) => (profile.activityDescriptions[activity] || "").length >= 18).length;
  const leadershipBonus = profile.activities.includes("leadership") || profile.activities.includes("entrepreneurship") ? 12 : 0;
  const careBonus = profile.activities.includes("service") || profile.activities.includes("work") ? 8 : 0;
  const depthScore = selected ? Math.min(40, selected * 7) + described * 7 : 12;
  const shiningTypeBonus = Math.min(14, (profile.shiningTypes || []).length * 4);
  const shiningBonus = profile.shiningPoint.length >= 35 ? 12 : profile.shiningPoint.length ? 6 : 0;
  return clamp(24 + depthScore + leadershipBonus + careBonus + shiningTypeBonus + shiningBonus, 12, 100);
}

function fitScore(profile, school) {
  const majorFit = school.majors.includes(profile.major) ? 100 : profile.major === "undecided" ? 88 : 58;
  const regionFit = profile.region === "any" || profile.region === school.region ? 100 : 62;
  const sizeFit = profile.size === "any" || profile.size === school.size ? 100 : 68;
  const typeFit = profile.schoolType === "any" || profile.schoolType === schoolType(school) ? 100 : 62;
  const settingFit = profile.setting === "any" || profile.setting === schoolSetting(school) ? 100 : 64;
  const characterFit = activityCharacterStrength(profile);
  return Math.round(majorFit * 0.22 + regionFit * 0.15 + sizeFit * 0.1 + typeFit * 0.14 + settingFit * 0.15 + characterFit * 0.24);
}

function admissionChance(profile, school) {
  const academic = academicStrength(profile, school);
  const tests = testStrength(profile, school);
  const character = activityCharacterStrength(profile);
  const application = character * 0.42 + (profile.essays * 10) * 0.32 + (profile.recommendations * 10) * 0.26;
  const readiness = profile.materials.length / Object.keys(materialMap).length;
  const fit = fitScore(profile, school);
  const applicantStrength = academic * 0.4 + tests * 0.18 + application * 0.25 + fit * 0.1 + readiness * 100 * 0.07;
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
  if (profile.schoolType === "any" || profile.schoolType === schoolType(school)) items.push(`${labelize(profile.schoolType === "any" ? schoolType(school) : profile.schoolType)} school preference fits this college.`);
  if (profile.setting === "any" || profile.setting === schoolSetting(school)) items.push("Geographical setting preference matches the campus environment.");
  if (profile.activities.length >= 3) items.push("Extracurricular profile shows range across multiple commitments.");
  if (profile.activities.some((activity) => (profile.activityDescriptions[activity] || "").length >= 18)) items.push("Activity descriptions add character and real evidence beyond scores.");
  if (profile.shiningTypes?.length || profile.shiningPoint) items.push("Your shining point gives the application a personal theme to build around.");
  if (profile.gpa >= school.avgGpa) items.push("GPA is at or above this school's typical profile.");
  if (profile.sat >= school.avgSat) items.push("SAT score is at or above the school benchmark used here.");
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

function compactResultLine(avgMatch, avgChance, results) {
  const reaches = results.filter((item) => item.category === "reach").length;
  const matches = results.filter((item) => item.category === "match").length;
  const likely = results.filter((item) => item.category === "likely").length;
  return [
    `${avgMatch}% fit avg`,
    `${avgChance}% admit avg`,
    `${reaches} reach`,
    `${matches} match`,
    `${likely} likely`
  ];
}

function scoreDial(label, value, type) {
  return `
    <div class="score-dial ${type}" style="--score:${value}">
      <div class="score-orbit">
        <strong>${value}%</strong>
      </div>
      <span>${label}</span>
    </div>
  `;
}

function buildImprovementPlan(profile, result) {
  const school = result.school;
  const actions = [];
  if (profile.gpa < school.avgGpa || profile.rigor < school.rigor) {
    actions.push("Raise academic proof: stronger grades, harder courses, or a clean upward trend.");
  }
  if (profile.sat < school.avgSat && !profile.act) {
    actions.push("Improve testing plan or confirm test-optional strategy before applying.");
  }
  if (profile.activities.length < 3) {
    actions.push("Add depth: choose 2-3 activities and show leadership, impact, or consistency.");
  }
  if (!profile.activities.some((activity) => (profile.activityDescriptions[activity] || "").length >= 18)) {
    actions.push("Write sharper activity descriptions with numbers, role, and real results.");
  }
  if (!profile.shiningTypes?.length && !profile.shiningPoint) {
    actions.push("Define your shining point: everyone has one! Turn it into an essay theme.");
  } else if (profile.shiningTypes?.length && profile.shiningPoint.length < 35) {
    actions.push(`Turn ${profile.shiningTypes.slice(0, 2).map(labelize).join(" and ").toLowerCase()} into a specific story with proof.`);
  }
  if (profile.essays < 8) {
    actions.push("Revise essays until the school can hear your voice and your reason for fit.");
  }
  if (profile.recommendations < 8) {
    actions.push("Ask recommenders for stories that prove curiosity, character, and follow-through.");
  }
  if (profile.materials.length < Object.keys(materialMap).length) {
    actions.push("Finish missing materials early: transcript, supplements, aid forms, and test policy.");
  }
  if (result.match < 70) {
    actions.push(`Connect your goals to ${school.name}'s programs, setting, and campus style.`);
  }
  return actions.slice(0, 3);
}

function renderResults(profile) {
  const sourceSchools = state.flow === "evaluate"
    ? state.selectedSchools.map((index) => schools[index])
    : recommendSchools(profile);

  const results = sourceSchools
    .map((school) => resultForSchool(profile, school))
    .sort((a, b) => state.flow === "recommend" ? b.match + b.chance - (a.match + a.chance) : 0);

  window.currentResults = results;
  window.currentProfile = profile;
  state.activeFilter = "all";
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.filter === "all"));
  const avgMatch = Math.round(results.reduce((sum, item) => sum + item.match, 0) / results.length);
  const avgChance = Math.round(results.reduce((sum, item) => sum + item.chance, 0) / results.length);
  resultsSummary.innerHTML = `
    <span class="note-kicker">${state.flow === "evaluate" ? "Selected results" : "Suggested results"}</span>
    <h3>${state.user.name}'s snapshot</h3>
    <div class="summary-mini-grid">
      ${compactResultLine(avgMatch, avgChance, results).map((item) => `<span>${item}</span>`).join("")}
    </div>
    <p>Planning estimates only.</p>
  `;
  renderResultCards();
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
      <div class="result-card-top">
        <div>
          <div class="result-meta">
            <span class="tag ${item.category}">${labelize(item.category)}</span>
            <span class="pill">${rankLabel(item.school)}</span>
            <span class="pill">${labelize(item.school.region)}</span>
            <span class="pill">${item.school.admitRate}% baseline</span>
          </div>
          <h3>${item.school.name}</h3>
        </div>
        <span class="result-school-icon">${schoolIcon(item.school)}</span>
      </div>
      <div class="score-row">
        ${scoreDial("Fit", item.match, "fit")}
        ${scoreDial("Admit", item.chance, "admit")}
      </div>
      <div class="details-grid">
        <div class="detail-box">
          <h4>Why it fits</h4>
          <ul>${item.strengths.map((strength) => `<li>${strength}</li>`).join("")}</ul>
        </div>
        <div class="detail-box">
          <h4>Checklist</h4>
          <ul>${item.checklist.slice(0, 6).map((task) => `<li>${task}</li>`).join("")}</ul>
        </div>
      </div>
    </article>
  `).join("") || `<p class="helper-text">No schools in this category yet.</p>`;
}

function renderNextSteps() {
  const results = window.currentResults || [];
  const profile = window.currentProfile;
  nextGrid.innerHTML = results.map((item, index) => {
    const actions = profile ? buildImprovementPlan(profile, item) : ["Complete your profile first, then return for a custom plan."];
    return `
      <article class="next-card" style="--card-hue:${(index * 46 + 28) % 360}">
        <div class="next-card-head">
          <span class="next-number">${String(index + 1).padStart(2, "0")}</span>
          <div>
            <strong>${item.school.name}</strong>
            <span>${labelize(item.category)} · ${item.match}% fit · ${item.chance}% admit</span>
          </div>
        </div>
        <ol>
          ${actions.map((action) => `<li>${action}</li>`).join("")}
        </ol>
      </article>
    `;
  }).join("") || `<p class="helper-text">Run results first to see a custom improvement plan.</p>`;
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
    setLoginVisualProgress(1 - dismiss / 560);
  } else {
    const reveal = Math.min(560, Math.max(0, distance) * 4.2);
    loginWorkspace.style.setProperty("--login-sheet-shift", `calc(100% - ${reveal}px)`);
    setLoginVisualProgress(reveal / 560);
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
    setLoginVisualProgress(wasOpen ? 1 : 0);
  }
});

appShell.addEventListener("pointercancel", () => {
  loginDragStart = null;
  loginDragCurrent = null;
  appShell.classList.remove("is-dragging");
  loginWorkspace.style.removeProperty("--login-sheet-shift");
  setLoginVisualProgress(appShell.classList.contains("login-open") ? 1 : 0);
});

appShell.addEventListener("wheel", (event) => {
  if (appShell.classList.contains("focus-mode")) return;
  if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;

  event.preventDefault();
  loginSheetProgress = clamp(loginSheetProgress + event.deltaY / 180, 0, 1);
  const shift = 100 - loginSheetProgress * 120;
  appShell.classList.add("is-dragging");
  loginWorkspace.style.setProperty("--login-sheet-shift", `${shift}vh`);
  setLoginVisualProgress(loginSheetProgress);

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
      state.schoolSort = "ranking";
      resetSchoolBrowse();
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
    state.rankingExpanded = false;
    schoolResultsPanel.classList.remove("hidden");
    document.querySelectorAll(".mini-feature[data-sort]").forEach((sortButton) => {
      sortButton.classList.toggle("active", sortButton === button);
    });
    renderSchoolPicker();
  });
});

schoolPicker.addEventListener("click", (event) => {
  if (event.target.closest("#show-top-100")) {
    state.rankingExpanded = true;
    renderSchoolPicker();
    return;
  }

  if (event.target.closest("#load-more-schools")) {
    state.visibleSchoolLimit += 120;
    renderSchoolPicker();
    return;
  }

  const selectButton = event.target.closest("[data-select-school]");
  if (selectButton) {
    const index = Number(selectButton.dataset.selectSchool);
    if (selectSchool(index)) renderSchoolPicker();
    return;
  }

  const card = event.target.closest("[data-school]");
  if (!card) return;
  const index = Number(card.dataset.school);
  renderSchoolPreview(index);
});

schoolPreview.addEventListener("click", (event) => {
  if (event.target.closest("#preview-return-button")) {
    showView("school", "Select schools");
    return;
  }

  const selectButton = event.target.closest("#preview-select-button");
  if (!selectButton) return;
  const index = Number(selectButton.dataset.school);
  if (selectSchool(index)) renderSchoolPreview(index);
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
  resetSchoolBrowse();
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

document.querySelector("#next-steps-button").addEventListener("click", () => {
  renderNextSteps();
  showView("next", "What to do next");
});

document.querySelector("#next-back-button").addEventListener("click", () => {
  showView("results", "Results");
});

restartButton.addEventListener("click", () => {
  state.flow = null;
  state.selectedSchools = [];
  state.activeFilter = "all";
  state.schoolSearch = "";
  state.schoolSort = "ranking";
  state.visibleSchoolLimit = 120;
  state.rankingExpanded = false;
  window.currentResults = [];
  window.currentProfile = null;
  document.querySelector("#profile-form").reset();
  schoolSearch.value = "";
  document.querySelectorAll(".mini-feature[data-sort]").forEach((sortButton) => {
    sortButton.classList.remove("active");
  });
  showView("choice", "Choose a path");
});

loadRankingData();

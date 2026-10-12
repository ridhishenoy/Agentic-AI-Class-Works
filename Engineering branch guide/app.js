/**
 * BranchFinder AI - Interactive Core Application Logic
 */

// -------------------------------------------------------------
// 1. COMPREHENSIVE ENGINEERING BRANCH DATABASE
// -------------------------------------------------------------
const BRANCHES_DATABASE = [
  {
    id: "cse",
    name: "Computer Science & Engineering (CSE)",
    category: "computing",
    icon: "💻",
    tagline: "Building scalable software, cloud architectures, and digital systems.",
    description: "Focuses on algorithms, programming languages, operating systems, and computer architecture. CSE provides the highest industry flexibility across tech startups, global giants, and research labs.",
    subjects: ["cs", "maths"],
    interests: ["coding", "ai", "security"],
    workEnvs: ["desk"],
    priorities: ["salary", "innovation"],
    curriculum: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Database Management Systems", "Compiler Design"],
    careers: ["Software Development Engineer (SDE)", "Cloud Architect", "Fullstack Developer", "Systems Programmer"],
    avgSalary: "₹9 - 25+ LPA ($85,000 - $140,000)",
    codingIntensity: 5,
    mathIntensity: 4,
    recruiters: ["Google", "Microsoft", "Amazon", "Meta", "Adobe", "Stripe"],
    pros: "Exceptional placement opportunities, global remote work flexibility, vibrant open-source ecosystem.",
    dayInLife: "Designing software APIs, writing clean modular code, conducting code reviews, and optimizing cloud deployment pipelines."
  },
  {
    id: "aids",
    name: "Artificial Intelligence & Data Science",
    category: "computing",
    icon: "🤖",
    tagline: "Teaching machines to think, analyze vast data, and automate intelligence.",
    description: "An advanced specialized discipline blending statistical mathematics with neural networks, natural language processing, predictive modeling, and big data engineering.",
    subjects: ["cs", "maths"],
    interests: ["ai", "coding"],
    workEnvs: ["desk", "lab"],
    priorities: ["salary", "innovation", "research"],
    curriculum: ["Machine Learning & Deep Learning", "Probability & Statistics", "Natural Language Processing (NLP)", "Computer Vision", "Big Data Analytics"],
    careers: ["Machine Learning Engineer", "Data Scientist", "AI Research Scientist", "Prompt & NLP Engineer"],
    avgSalary: "₹10 - 28+ LPA ($95,000 - $155,000)",
    codingIntensity: 5,
    mathIntensity: 5,
    recruiters: ["OpenAI", "NVIDIA", "DeepMind", "Google AI", "Microsoft Research", "Palantir"],
    pros: "Frontline of modern tech breakthroughs, exponential demand, direct intersection with cutting-edge mathematics.",
    dayInLife: "Training deep learning models, analyzing model loss metrics, curating training datasets, and tuning hyper-parameters."
  },
  {
    id: "ece",
    name: "Electronics & Communication Engineering (ECE)",
    category: "electronics",
    icon: "🔌",
    tagline: "Connecting the physical and digital world through chips and signals.",
    description: "Covers semiconductor microelectronics, VLSI chip design, embedded firmware, satellite communications, and wireless networks. Ideal bridge between hardware engineering and software.",
    subjects: ["electronics", "physics", "maths"],
    interests: ["hardware", "coding", "aerospace"],
    workEnvs: ["lab", "desk"],
    priorities: ["salary", "innovation", "stability"],
    curriculum: ["VLSI Design & Semiconductors", "Digital Signal Processing", "Microprocessors & Embedded Systems", "Analog Circuits", "Wireless Communication"],
    careers: ["VLSI Design Engineer", "Embedded Systems Developer", "RF / Antenna Engineer", "Firmware Architect"],
    avgSalary: "₹8 - 22+ LPA ($80,000 - $130,000)",
    codingIntensity: 3,
    mathIntensity: 4,
    recruiters: ["Intel", "Qualcomm", "Texas Instruments", "Apple", "AMD", "Broadcom"],
    pros: "Crucial for the ongoing global semiconductor and 5G/6G boom, offers dual eligibility for both tech software and core electronics roles.",
    dayInLife: "Simulating chip layout designs in EDA tools, debugging circuit testbenches with oscilloscopes, and writing low-level C firmware."
  },
  {
    id: "mech",
    name: "Mechanical Engineering",
    category: "core",
    icon: "⚙️",
    tagline: "The backbone of machines, thermodynamics, electric mobility, and robotics.",
    description: "The classic and broadest engineering discipline. Deals with design, analysis, and manufacturing of mechanical systems, automobile engines, aerospace structures, and automated factory machinery.",
    subjects: ["physics", "maths", "drawing"],
    interests: ["machines", "aerospace", "hardware"],
    workEnvs: ["workshop", "lab", "desk"],
    priorities: ["stability", "innovation"],
    curriculum: ["Thermodynamics & Heat Transfer", "Fluid Mechanics", "CAD/CAM & Finite Element Analysis (FEA)", "Machine Design", "Automotive Systems"],
    careers: ["Mechanical Design Engineer", "Automotive / EV Powertrain Specialist", "Robotics Integrator", "CAE Simulation Analyst"],
    avgSalary: "₹6 - 16+ LPA ($70,000 - $110,000)",
    codingIntensity: 2,
    mathIntensity: 4,
    recruiters: ["Tesla", "Tata Motors", "Boeing", "General Electric", "Siemens", "Bosch"],
    pros: "Evergreen core foundational discipline, exciting roles in electric vehicles (EV), renewable energy, and robotics.",
    dayInLife: "Modeling 3D parts in SolidWorks or CATIA, running stress simulation stress tests, and overseeing physical prototype fabrication."
  },
  {
    id: "civil",
    name: "Civil & Environmental Engineering",
    category: "infra",
    icon: "🏗️",
    tagline: "Shaping smart cities, sustainable skyscrapers, mega-bridges, and clean water systems.",
    description: "Designs, constructs, and manages essential physical infrastructure including airports, transit tunnels, green buildings, earthquake-resistant towers, and hydraulic systems.",
    subjects: ["physics", "maths", "drawing"],
    interests: ["structures", "chemicals"],
    workEnvs: ["field", "desk"],
    priorities: ["stability"],
    curriculum: ["Structural Analysis", "Geotechnical Engineering", "Transportation & Highway Engineering", "Fluid Hydraulics", "Environmental Engineering"],
    careers: ["Structural Consultant", "Site Project Manager", "Urban & Smart City Planner", "Environmental Compliance Officer"],
    avgSalary: "₹5.5 - 14+ LPA ($65,000 - $105,000)",
    codingIntensity: 1,
    mathIntensity: 3,
    recruiters: ["L&T Construction", "AECOM", "Bechtel", "Jacobs", "Tata Projects", "Government PSUs"],
    pros: "Tangible physical impact that transforms landscapes; high stability with extensive opportunities in public sector & government infrastructure.",
    dayInLife: "Inspecting site safety and soil mechanics, checking architectural BIM drawings, and collaborating with structural contractors."
  },
  {
    id: "biotech",
    name: "Biotechnology & Biomedical Engineering",
    category: "bio-chem",
    icon: "🧬",
    tagline: "Unlocking biological secrets for next-gen therapeutics, genetics, and medical devices.",
    description: "Applies engineering principles and computational tools to living systems, molecular biology, genetic engineering, prosthetic implants, and healthcare diagnostic devices.",
    subjects: ["biology", "chemistry", "maths"],
    interests: ["bio", "ai"],
    workEnvs: ["lab", "desk"],
    priorities: ["research", "innovation"],
    curriculum: ["Molecular Biology & Genetic Engineering", "Bioprocess Engineering", "Bioinformatics & Genomics", "Biomedical Instrumentation", "Immunology"],
    careers: ["Bioinformatics Specialist", "Biomedical Device Engineer", "Clinical Research Scientist", "Bioprocess Engineer"],
    avgSalary: "₹6 - 18+ LPA ($75,000 - $120,000)",
    codingIntensity: 2,
    mathIntensity: 3,
    recruiters: ["Biocon", "Pfizer", "Medtronic", "Illumina", "Johnson & Johnson", "Novartis"],
    pros: "Directly improves human lifespan and health; immense global research funding; ideal pathway to prestigious MS/PhD programs abroad.",
    dayInLife: "Cultivating cell cultures in bioreactors, running genome sequence analysis scripts, and testing biomedical sensors."
  },
  {
    id: "chem",
    name: "Chemical & Materials Engineering",
    category: "bio-chem",
    icon: "🧪",
    tagline: "Transforming raw chemicals into clean fuels, advanced polymers, and batteries.",
    description: "Focuses on industrial chemical processes, nanomaterials, petrochemicals, pharmaceuticals, battery chemistry, and carbon capture technology.",
    subjects: ["chemistry", "physics", "maths"],
    interests: ["chemicals", "bio"],
    workEnvs: ["lab", "workshop", "field"],
    priorities: ["stability", "research"],
    curriculum: ["Chemical Reaction Engineering", "Mass & Heat Transfer", "Polymer & Materials Science", "Process Dynamics & Control", "Industrial Safety"],
    careers: ["Chemical Process Engineer", "Battery Cell Material Scientist", "Refinery Operations Specialist", "Quality & Safety Manager"],
    avgSalary: "₹6.5 - 17+ LPA ($72,000 - $115,000)",
    codingIntensity: 2,
    mathIntensity: 4,
    recruiters: ["Dow Chemical", "BASF", "Reliance Industries", "Shell", "ExxonMobil", "DuPont"],
    pros: "Vital for the global green energy transition (lithium batteries, green hydrogen, and carbon recycling) with high industrial stability.",
    dayInLife: "Calibrating chemical distillation columns, analyzing fluid flow equilibrium, and formulating sustainable polymer composites."
  },
  {
    id: "aero",
    name: "Aerospace & Aeronautical Engineering",
    category: "core",
    icon: "🚀",
    tagline: "Conquering the skies and outer space through rockets, drones, and satellites.",
    description: "Deals with the design, aerodynamics, flight mechanics, propulsion systems, and navigation of aircraft, commercial airliners, space rockets, and satellites.",
    subjects: ["physics", "maths", "space"],
    interests: ["aerospace", "machines"],
    workEnvs: ["lab", "workshop", "desk"],
    priorities: ["research", "innovation"],
    curriculum: ["Aerodynamics & Compressible Flow", "Rocket Propulsion Systems", "Flight Mechanics & Control", "Aircraft Structures", "Avionics & Orbital Mechanics"],
    careers: ["Aerodynamicist", "Propulsion Engineer", "Avionics Specialist", "Flight Test Engineer"],
    avgSalary: "₹7 - 20+ LPA ($85,000 - $135,000)",
    codingIntensity: 3,
    mathIntensity: 5,
    recruiters: ["ISRO", "NASA", "SpaceX", "Boeing", "Airbus", "Lockheed Martin", "DRDO"],
    pros: "High prestige; inspiring frontier of human space exploration, supersonic aviation, and autonomous defense drones.",
    dayInLife: "Running supersonic wind tunnel CFD simulations, validating rocket injector pressure tests, and optimizing fuselage weight."
  },
  {
    id: "robotics",
    name: "Robotics & Automation Engineering",
    category: "core",
    icon: "🦾",
    tagline: "Integrating mechanical actuators, sensors, and AI to build autonomous machines.",
    description: "An interdisciplinary powerhouse combining mechanical kinematics, electronic control systems, computer vision, and machine learning to create intelligent robots.",
    subjects: ["maths", "physics", "cs", "electronics"],
    interests: ["ai", "machines", "hardware", "coding"],
    workEnvs: ["workshop", "lab"],
    priorities: ["innovation", "salary"],
    curriculum: ["Kinematics & Dynamics of Robots", "Computer Vision & SLAM", "Embedded Microcontrollers", "Control Systems Engineering", "ROS (Robot Operating System)"],
    careers: ["Robotics Systems Engineer", "Automation Specialist", "Computer Vision Engineer", "Autonomous Vehicle Developer"],
    avgSalary: "₹8.5 - 24+ LPA ($90,000 - $140,000)",
    codingIntensity: 4,
    mathIntensity: 4,
    recruiters: ["Boston Dynamics", "ABB", "FANUC", "Tesla Autopilot", "KUKA", "Intuitive Surgical"],
    pros: "The ultimate synthesis of mechanical, electrical, and software engineering. Tremendous growth in industrial warehouse automation and surgical robotics.",
    dayInLife: "Configuring lidar sensor mapping, tuning PID controllers on robot joints, and testing obstacle-avoidance algorithms."
  },
  {
    id: "cyber",
    name: "Cybersecurity & Cloud Systems",
    category: "computing",
    icon: "🛡️",
    tagline: "Defending critical infrastructure, encrypted communications, and global cloud networks.",
    description: "Teaches modern network defense, cryptography, penetration testing, malware reverse engineering, digital forensics, and cloud infrastructure security.",
    subjects: ["cs", "maths"],
    interests: ["security", "coding"],
    workEnvs: ["desk"],
    priorities: ["salary", "stability"],
    curriculum: ["Network Security & Protocols", "Applied Cryptography", "Ethical Hacking & Penetration Testing", "Cloud Infrastructure Defense", "Malware Analysis"],
    careers: ["Security Operations Center (SOC) Analyst", "Penetration Tester / Ethical Hacker", "Cloud Security Architect", "Cryptographic Engineer"],
    avgSalary: "₹9 - 26+ LPA ($90,000 - $145,000)",
    codingIntensity: 4,
    mathIntensity: 3,
    recruiters: ["CrowdStrike", "Palo Alto Networks", "Cisco", "Cloudflare", "Microsoft Cyber", "Defense Agencies"],
    pros: "Critical zero-unemployment domain with continuous high global demand across banking, government, defense, and enterprise software.",
    dayInLife: "Performing red-team penetration scans, monitoring intrusion detection logs, and creating resilient OAuth/encryption policies."
  },
  {
    id: "eee",
    name: "Electrical & Electronics Engineering (EEE)",
    category: "electronics",
    icon: "⚡",
    tagline: "Powering smart grids, heavy electrical machinery, renewable solar/wind, and EV systems.",
    description: "Encompasses high-voltage power generation, transmission smart grids, electric motors, power electronics converters, and industrial automation control.",
    subjects: ["physics", "maths", "electronics"],
    interests: ["hardware", "chemicals", "machines"],
    workEnvs: ["workshop", "field", "lab"],
    priorities: ["stability", "innovation"],
    curriculum: ["Power Systems & Smart Grids", "Power Electronics & Inverters", "Electrical Machines & Transformers", "Control Systems", "Electromagnetic Fields"],
    careers: ["Power Grid Operations Engineer", "EV Drive Systems Engineer", "Renewable Energy Specialist", "Electrical Design Consultant"],
    avgSalary: "₹6 - 16+ LPA ($70,000 - $115,000)",
    codingIntensity: 2,
    mathIntensity: 4,
    recruiters: ["Schneider Electric", "Siemens", "General Electric", "ABB", "Tesla Energy", "National Power Grids"],
    pros: "Fundamental to the global electrification movement (solar, wind farms, and EV batteries). Evergreen employment.",
    dayInLife: "Testing high-capacity battery management inverters, analyzing transmission loss models, and designing distribution panels."
  },
  {
    id: "design",
    name: "Industrial Design & Product Engineering",
    category: "core",
    icon: "✏️",
    tagline: "Harmonizing human aesthetics, user ergonomics, and functional mechanical engineering.",
    description: "Bridges the gap between creative artistic styling, human psychology, and rigorous production engineering for modern consumer electronics and physical products.",
    subjects: ["drawing", "physics", "maths"],
    interests: ["design", "machines"],
    workEnvs: ["desk", "workshop"],
    priorities: ["innovation"],
    curriculum: ["Design Thinking & Human Factors", "Aesthetic 3D CAD Surfacing", "Ergonomics & Usability", "Materials & Manufacturing Processes", "Rapid Prototyping"],
    careers: ["Product Designer", "Hardware Industrial Stylist", "Ergonomics Consultant", "Design Engineer"],
    avgSalary: "₹6.5 - 18+ LPA ($75,000 - $125,000)",
    codingIntensity: 1,
    mathIntensity: 2,
    recruiters: ["Apple", "Dyson", "Logitech", "Philips Design", "IKEA", "Automotive Design Studios"],
    pros: "Perfect for students who possess a blend of artistic creativity, aesthetic taste, and engineering logic.",
    dayInLife: "Sketching concepts on digital drawing tablets, building physical foam or 3D-printed mockups, and reviewing injection mold tooling."
  }
];

// -------------------------------------------------------------
// 2. STATE MANAGEMENT
// -------------------------------------------------------------
const state = {
  currentStep: 1,
  totalSteps: 4,
  formData: {
    name: "",
    subjects: [],
    interests: [],
    workEnv: "desk",
    priority: "salary"
  },
  lastRecommendations: []
};

// -------------------------------------------------------------
// 3. INITIALIZATION & DOM HOOKS
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initQuizFlow();
  initChatCounselor();
  initExploreDirectory();
  initComparator();
  initModal();
});

// -------------------------------------------------------------
// 4. NAVIGATION LOGIC
// -------------------------------------------------------------
function switchTab(tabId) {
  // Update nav buttons
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });

  // Update tab panes
  document.querySelectorAll(".tab-pane").forEach(pane => {
    pane.classList.toggle("active", pane.id === tabId);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initNavigation() {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      switchTab(btn.dataset.tab);
    });
  });

  // Brand Logo clicks return to home
  document.getElementById("brand-logo")?.addEventListener("click", () => switchTab("hero-tab"));

  // Header CTA button
  document.getElementById("nav-cta-btn")?.addEventListener("click", () => {
    switchTab("quiz-tab");
    goToQuizStep(1);
  });

  // Hero section buttons
  document.getElementById("hero-start-quiz-btn")?.addEventListener("click", () => {
    switchTab("quiz-tab");
    goToQuizStep(1);
  });

  document.getElementById("hero-open-chat-btn")?.addEventListener("click", () => {
    switchTab("chat-tab");
  });
}

// -------------------------------------------------------------
// 5. INTERACTIVE QUIZ ENGINE
// -------------------------------------------------------------
function initQuizFlow() {
  // Step 1: Subjects Multi-Select Chips
  const subjectsSelector = document.getElementById("subjects-selector");
  if (subjectsSelector) {
    subjectsSelector.querySelectorAll(".chip-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("selected");
        const val = btn.dataset.value;
        if (state.formData.subjects.includes(val)) {
          state.formData.subjects = state.formData.subjects.filter(s => s !== val);
        } else {
          state.formData.subjects.push(val);
        }
      });
    });
  }

  // Step 2: Interests Multi-Select Cards
  const interestsSelector = document.getElementById("interests-selector");
  if (interestsSelector) {
    interestsSelector.querySelectorAll(".interest-card").forEach(card => {
      card.addEventListener("click", () => {
        card.classList.toggle("selected");
        const val = card.dataset.value;
        if (state.formData.interests.includes(val)) {
          state.formData.interests = state.formData.interests.filter(i => i !== val);
        } else {
          state.formData.interests.push(val);
        }
      });
    });
  }

  // Step 3: Work Environment Radio
  document.querySelectorAll('input[name="work_env"]').forEach(radio => {
    radio.addEventListener("change", (e) => {
      state.formData.workEnv = e.target.value;
    });
  });

  // Step 4: Priorities Radio
  document.querySelectorAll('input[name="priority"]').forEach(radio => {
    radio.addEventListener("change", (e) => {
      state.formData.priority = e.target.value;
    });
  });

  // Step Nav Buttons
  document.getElementById("btn-next-1")?.addEventListener("click", () => {
    const nameInput = document.getElementById("student-name");
    const name = nameInput.value.trim();
    if (!name) {
      alert("Please enter your name to personalize your guidance!");
      nameInput.focus();
      return;
    }
    state.formData.name = name;
    goToQuizStep(2);
  });

  document.getElementById("btn-prev-2")?.addEventListener("click", () => goToQuizStep(1));
  document.getElementById("btn-next-2")?.addEventListener("click", () => goToQuizStep(3));

  document.getElementById("btn-prev-3")?.addEventListener("click", () => goToQuizStep(2));
  document.getElementById("btn-next-3")?.addEventListener("click", () => goToQuizStep(4));

  document.getElementById("btn-prev-4")?.addEventListener("click", () => goToQuizStep(3));

  document.getElementById("btn-calculate")?.addEventListener("click", () => {
    calculateAndShowResults();
  });

  // Results Actions
  document.getElementById("btn-retake-quiz")?.addEventListener("click", () => {
    resetQuiz();
    goToQuizStep(1);
  });

  document.getElementById("btn-print-report")?.addEventListener("click", () => {
    window.print();
  });
}

function goToQuizStep(stepNumber) {
  state.currentStep = stepNumber;

  // Update step elements
  document.querySelectorAll(".quiz-step").forEach((el, index) => {
    el.classList.toggle("active", index + 1 === stepNumber);
  });

  const stepCounter = document.getElementById("step-counter");
  const stepTitle = document.getElementById("step-title");
  const progressFill = document.getElementById("progress-bar-fill");

  const titles = [
    "Personal Profile",
    "Passions & Tech Interests",
    "Work Environment Style",
    "Long-Term Career Values",
    "Final Assessment Results"
  ];

  if (stepNumber <= 4) {
    if (stepCounter) stepCounter.textContent = `Step ${stepNumber} of 4`;
    if (stepTitle) stepTitle.textContent = titles[stepNumber - 1];
    if (progressFill) progressFill.style.width = `${(stepNumber / 4) * 100}%`;
  } else {
    if (stepCounter) stepCounter.textContent = "Complete ✨";
    if (stepTitle) stepTitle.textContent = "Your Tailored Blueprint";
    if (progressFill) progressFill.style.width = "100%";
  }

  window.scrollTo({ top: 120, behavior: "smooth" });
}

function resetQuiz() {
  state.formData.subjects = [];
  state.formData.interests = [];
  document.querySelectorAll(".chip-btn.selected").forEach(c => c.classList.remove("selected"));
  document.querySelectorAll(".interest-card.selected").forEach(c => c.classList.remove("selected"));
}

// -------------------------------------------------------------
// 6. WEIGHTED RECOMMENDATION SCORING ALGORITHM
// -------------------------------------------------------------
function calculateAndShowResults() {
  const { subjects, interests, workEnv, priority } = state.formData;

  const scoredBranches = BRANCHES_DATABASE.map(branch => {
    let rawScore = 30; // baseline

    // 1. Subject affinity (+12 pts per match)
    const matchingSubjects = branch.subjects.filter(s => subjects.includes(s));
    rawScore += matchingSubjects.length * 12;

    // 2. Passion/Interests affinity (+15 pts per match)
    const matchingInterests = branch.interests.filter(i => interests.includes(i));
    rawScore += matchingInterests.length * 15;

    // 3. Work Environment affinity (+10 pts)
    if (branch.workEnvs.includes(workEnv)) {
      rawScore += 10;
    }

    // 4. Career Priority affinity (+12 pts)
    if (branch.priorities.includes(priority)) {
      rawScore += 12;
    }

    // Normalize score to percentage (60% to 98% cap for realism)
    const normalizedScore = Math.min(98, Math.max(55, Math.round((rawScore / 80) * 100)));

    return {
      branch,
      score: normalizedScore,
      matchingSubjects,
      matchingInterests
    };
  });

  // Sort descending by score
  scoredBranches.sort((a, b) => b.score - a.score);
  state.lastRecommendations = scoredBranches;

  renderResults(scoredBranches);
  goToQuizStep(5);
}

function renderResults(scoredBranches) {
  const name = state.formData.name || "Explorer";
  const heading = document.getElementById("results-name-heading");
  const subText = document.getElementById("results-summary-text");
  const container = document.getElementById("recommendations-container");

  if (heading) heading.textContent = `${name}'s Personalized Engineering Blueprint`;
  if (subText) {
    const topBranch = scoredBranches[0].branch.name;
    subText.textContent = `Based on your chosen subjects and lifestyle goals, your highest calculated alignment is with ${topBranch}. Here is your full ranked breakdown:`;
  }

  if (!container) return;
  container.innerHTML = "";

  // Render top 4 recommendations
  const topList = scoredBranches.slice(0, 4);

  topList.forEach((item, index) => {
    const { branch, score } = item;
    const isTop = index === 0;

    const card = document.createElement("div");
    card.className = `rec-card ${isTop ? "top-pick" : ""}`;

    card.innerHTML = `
      <div class="rec-card-top">
        <div class="rec-title-group">
          <div class="rec-rank-badge">#${index + 1}</div>
          <div>
            <h3 class="rec-branch-name">${branch.icon} ${branch.name}</h3>
            <span class="rec-category-tag">${branch.category.toUpperCase()} DISCIPLINE</span>
          </div>
        </div>
        <div class="match-score-pill">
          <span>⚡</span>
          <span>${score}% Match</span>
        </div>
      </div>

      <p class="rec-description">${branch.description}</p>

      <div class="rec-meta-grid">
        <div class="rec-meta-item">
          <strong>Key Roles:</strong>
          <span>${branch.careers.slice(0, 2).join(", ")}</span>
        </div>
        <div class="rec-meta-item">
          <strong>Est. Compensation:</strong>
          <span>${branch.avgSalary}</span>
        </div>
        <div class="rec-meta-item">
          <strong>Top Recruiters:</strong>
          <span>${branch.recruiters.slice(0, 3).join(", ")}</span>
        </div>
      </div>

      <div class="rec-tags">
        ${branch.curriculum.slice(0, 4).map(c => `<span class="rec-tag">📘 ${c}</span>`).join("")}
      </div>

      <div class="rec-actions">
        <button type="button" class="btn btn-secondary btn-sm" onclick="openBranchModal('${branch.id}')">
          View Full Curriculum & Roadmap &rarr;
        </button>
        <button type="button" class="btn btn-secondary btn-sm" onclick="compareWithTop('${branch.id}')">
          Compare with #1
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

function compareWithTop(branchId) {
  const topId = state.lastRecommendations[0]?.branch.id || "cse";
  switchTab("compare-tab");
  const sel1 = document.getElementById("compare-branch-1");
  const sel2 = document.getElementById("compare-branch-2");
  if (sel1 && sel2) {
    sel1.value = topId;
    sel2.value = branchId;
    renderComparisonTable(topId, branchId);
  }
}

// -------------------------------------------------------------
// 7. CONVERSATIONAL AI COUNSELOR ENGINE
// -------------------------------------------------------------
function initChatCounselor() {
  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-user-input");
  const chatMessages = document.getElementById("chat-messages");

  // Quick Prompt buttons
  document.querySelectorAll(".quick-prompt-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const query = btn.dataset.query;
      handleUserQuery(query);
    });
  });

  if (chatForm) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = chatInput.value.trim();
      if (!text) return;
      handleUserQuery(text);
      chatInput.value = "";
    });
  }

  function handleUserQuery(query) {
    appendMessage(query, "user");

    // Show simulated typing state then response
    setTimeout(() => {
      const botResponse = generateCounselorResponse(query);
      appendMessage(botResponse, "bot");
    }, 450);
  }

  function appendMessage(content, sender) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `chat-msg ${sender}`;

    const avatar = sender === "user" ? "👤" : "🤖";
    msgDiv.innerHTML = `
      <div class="msg-avatar">${avatar}</div>
      <div class="msg-bubble">
        ${content}
      </div>
    `;

    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

function generateCounselorResponse(input) {
  const text = input.toLowerCase();

  // 1. CS vs AI
  if ((text.includes("cs") || text.includes("computer")) && (text.includes("ai") || text.includes("data science"))) {
    return `
      <p><strong>Computer Science (CSE) vs AI & Data Science (AI & DS):</strong></p>
      <ul>
        <li><strong>CSE:</strong> Broader, foundational degree. Covers general software architecture, compilers, networking, and OS. Gives you full mobility across any tech role.</li>
        <li><strong>AI & DS:</strong> Specialized from Year 2 in statistics, machine learning algorithms, NLP, and neural networks. Ideal if you love math, models, and data pipelines.</li>
      </ul>
      <p><em>Recommendation:</em> If you aren't 100% sure you want to only do AI/ML, choose <strong>CSE</strong> because CSE graduates can easily do AI work, but have a wider safety net!</p>
    `;
  }

  // 2. Math & Physics without coding
  if ((text.includes("math") || text.includes("physics")) && (text.includes("no code") || text.includes("not coding") || text.includes("without coding") || text.includes("hate coding"))) {
    return `
      <p>If you love Mathematics & Physics but prefer to avoid heavy screen coding, these branches are tailor-made for you:</p>
      <ul>
        <li><strong>Mechanical Engineering:</strong> Applied physics (thermodynamics, fluid mechanics, stress analysis, aerodynamics).</li>
        <li><strong>Civil & Structural Engineering:</strong> Heavy trigonometry, structural vectors, and statics with minimal traditional software programming.</li>
        <li><strong>Electrical Engineering (EEE):</strong> Advanced calculus, electromagnetic theory, and power distribution systems.</li>
      </ul>
      <p>All three disciplines emphasize physical intuition and mathematics over writing web/mobile software.</p>
    `;
  }

  // 3. ECE vs EEE
  if (text.includes("ece") && text.includes("eee")) {
    return `
      <p><strong>ECE vs EEE Breakdown:</strong></p>
      <ul>
        <li><strong>ECE (Electronics & Communication):</strong> Deals with low-voltage microchips, semiconductor VLSI, digital signals, RF, and wireless communications. High overlap with software & chip companies (Intel, Qualcomm).</li>
        <li><strong>EEE (Electrical & Electronics):</strong> Deals with high-voltage power generation, transmission grids, motors, generators, and heavy power converters. High overlap with renewable energy and electric vehicles (EVs).</li>
      </ul>
      <p><em>Takeaway:</em> Choose <strong>ECE</strong> for semiconductor and telecom careers; choose <strong>EEE</strong> for electric mobility, solar power, and smart grid systems.</p>
    `;
  }

  // 4. Robotics & Electric Vehicles (EV)
  if (text.includes("robot") || text.includes("electric vehicle") || text.includes("ev")) {
    return `
      <p><strong>Best paths for Robotics and Electric Vehicles:</strong></p>
      <ul>
        <li><strong>Mechatronics / Robotics:</strong> Directly bridges sensors, microcontrollers, and actuators.</li>
        <li><strong>Mechanical Engineering:</strong> Essential for vehicle dynamics, aerodynamics, battery thermal management, and chassis design.</li>
        <li><strong>ECE / EEE:</strong> Crucial for the battery management system (BMS), motor controllers, and autonomous drive sensors.</li>
      </ul>
      <p>At companies like Tesla or Rivian, multidisciplinary teams from Mechanical, ECE, and CSE work side-by-side.</p>
    `;
  }

  // 5. Aerospace vs Mechanical
  if (text.includes("aerospace") || text.includes("aero")) {
    return `
      <p><strong>Aerospace vs Mechanical Engineering:</strong></p>
      <p>Aerospace is essentially a specialized branch of Mechanical Engineering focused on flight dynamics, supersonic fluid flow, and rocket propulsion.</p>
      <ul>
        <li><strong>Aerospace:</strong> High prestige, but a smaller job market strictly confined to space agencies (ISRO/NASA) and defense contractors.</li>
        <li><strong>Mechanical:</strong> Far broader hiring market across automotive, energy, HVAC, manufacturing, and tech, while still allowing you to do a Master's in Aerospace later!</li>
      </ul>
    `;
  }

  // 6. Biotechnology scope
  if (text.includes("biotech") || text.includes("biology") || text.includes("biomedical")) {
    return `
      <p><strong>Biotechnology & Biomedical Scope:</strong></p>
      <p>Biotechnology is thriving in genomics, pharmaceutical drug design, and wearable medical sensors. Most high-paying careers in this space require an MS or Ph.D. degree abroad (US/Europe) or specialized expertise in Bioinformatics (Python + Genomics).</p>
    `;
  }

  // 7. Salary questions
  if (text.includes("salary") || text.includes("highest pay") || text.includes("money") || text.includes("package")) {
    return `
      <p><strong>Highest Paying Branches in Current Market:</strong></p>
      <ol>
        <li><strong>Computer Science & AI / Data Science:</strong> Offers the highest starting packages (₹10 - 28+ LPA / $95k - $140k+).</li>
        <li><strong>VLSI / ECE Hardware Engineering:</strong> Very lucrative at top semiconductor firms (NVIDIA, Qualcomm).</li>
        <li><strong>Cybersecurity / Cloud Defense:</strong> Extremely high demand due to enterprise security risks.</li>
      </ol>
      <p><em>Note:</em> Exceptional engineers in core fields (like Automotive powertrain or Aerospace) also command top salaries with specialized experience!</p>
    `;
  }

  // 8. General fallback with contextual branch advice
  return `
    <p>That's an insightful question! Here's how I look at it from an engineering perspective:</p>
    <p>When selecting your discipline, consider your **Daily Work Style**:</p>
    <ul>
      <li>Do you love logic puzzles and digital creations? Look at <strong>CSE</strong> or <strong>AI & DS</strong>.</li>
      <li>Do you love tactile gadgets, circuits, and physical devices? Explore <strong>ECE</strong> or <strong>Robotics</strong>.</li>
      <li>Do you love understanding how physical forces and structures work in nature? Explore <strong>Mechanical</strong>, <strong>Civil</strong>, or <strong>Aerospace</strong>.</li>
    </ul>
    <p>Feel free to take our <strong>2-minute Career Quiz</strong> above or tell me your favorite high school subjects for an exact match!</p>
  `;
}

// -------------------------------------------------------------
// 8. EXPLORE BRANCHES DIRECTORY & FILTERING
// -------------------------------------------------------------
function initExploreDirectory() {
  const container = document.getElementById("branches-grid");
  const searchInput = document.getElementById("branch-search-input");
  const filterPills = document.querySelectorAll("#branch-category-filters .pill-btn");

  let activeCategory = "all";
  let activeSearch = "";

  function renderBranches() {
    if (!container) return;
    container.innerHTML = "";

    const filtered = BRANCHES_DATABASE.filter(b => {
      const matchCat = activeCategory === "all" || b.category === activeCategory;
      const matchSearch =
        b.name.toLowerCase().includes(activeSearch) ||
        b.tagline.toLowerCase().includes(activeSearch) ||
        b.curriculum.some(c => c.toLowerCase().includes(activeSearch)) ||
        b.careers.some(c => c.toLowerCase().includes(activeSearch));
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-dim);">
          <p>No engineering branches match your search criteria. Try a different keyword!</p>
        </div>
      `;
      return;
    }

    filtered.forEach(b => {
      const card = document.createElement("div");
      card.className = "branch-card";

      card.innerHTML = `
        <div class="branch-card-header">
          <span class="branch-card-icon">${b.icon}</span>
          <span class="badge-tag">${b.category}</span>
        </div>
        <h3>${b.name}</h3>
        <p>${b.tagline}</p>
        <div class="branch-card-stats">
          <div>
            <span>Avg Starting:</span>
            <strong>${b.avgSalary.split("(")[0]}</strong>
          </div>
          <div>
            <span>Math Load:</span>
            <strong>${"★".repeat(b.mathIntensity)}${"☆".repeat(5 - b.mathIntensity)}</strong>
          </div>
        </div>
        <div class="branch-card-footer">
          <button type="button" class="btn btn-secondary btn-sm" style="width: 100%;" onclick="openBranchModal('${b.id}')">
            Explore Discipline Details &rarr;
          </button>
        </div>
      `;

      container.appendChild(card);
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategory = pill.dataset.category;
      renderBranches();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeSearch = e.target.value.toLowerCase().trim();
      renderBranches();
    });
  }

  renderBranches();
}

// -------------------------------------------------------------
// 9. SIDE-BY-SIDE BRANCH COMPARATOR
// -------------------------------------------------------------
function initComparator() {
  const sel1 = document.getElementById("compare-branch-1");
  const sel2 = document.getElementById("compare-branch-2");

  if (!sel1 || !sel2) return;

  // Populate options
  BRANCHES_DATABASE.forEach(b => {
    const opt1 = document.createElement("option");
    opt1.value = b.id;
    opt1.textContent = `${b.icon} ${b.name}`;
    sel1.appendChild(opt1);

    const opt2 = document.createElement("option");
    opt2.value = b.id;
    opt2.textContent = `${b.icon} ${b.name}`;
    sel2.appendChild(opt2);
  });

  // Default selection
  sel1.value = "cse";
  sel2.value = "aids";

  sel1.addEventListener("change", () => renderComparisonTable(sel1.value, sel2.value));
  sel2.addEventListener("change", () => renderComparisonTable(sel1.value, sel2.value));

  renderComparisonTable(sel1.value, sel2.value);
}

function renderComparisonTable(id1, id2) {
  const b1 = BRANCHES_DATABASE.find(b => b.id === id1) || BRANCHES_DATABASE[0];
  const b2 = BRANCHES_DATABASE.find(b => b.id === id2) || BRANCHES_DATABASE[1];
  const container = document.getElementById("compare-table-container");

  if (!container) return;

  container.innerHTML = `
    <table class="compare-table">
      <thead>
        <tr>
          <th>Metric / Attribute</th>
          <th>${b1.icon} ${b1.name}</th>
          <th>${b2.icon} ${b2.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Primary Focus</td>
          <td>${b1.tagline}</td>
          <td>${b2.tagline}</td>
        </tr>
        <tr>
          <td>Coding Intensity</td>
          <td>${"★".repeat(b1.codingIntensity)}${"☆".repeat(5 - b1.codingIntensity)} (${b1.codingIntensity}/5)</td>
          <td>${"★".repeat(b2.codingIntensity)}${"☆".repeat(5 - b2.codingIntensity)} (${b2.codingIntensity}/5)</td>
        </tr>
        <tr>
          <td>Mathematical Rigor</td>
          <td>${"★".repeat(b1.mathIntensity)}${"☆".repeat(5 - b1.mathIntensity)} (${b1.mathIntensity}/5)</td>
          <td>${"★".repeat(b2.mathIntensity)}${"☆".repeat(5 - b2.mathIntensity)} (${b2.mathIntensity}/5)</td>
        </tr>
        <tr>
          <td>Work Environment</td>
          <td>${b1.workEnvs.map(e => e.toUpperCase()).join(", ")}</td>
          <td>${b2.workEnvs.map(e => e.toUpperCase()).join(", ")}</td>
        </tr>
        <tr>
          <td>Average Salary Range</td>
          <td><strong style="color: #34d399;">${b1.avgSalary}</strong></td>
          <td><strong style="color: #34d399;">${b2.avgSalary}</strong></td>
        </tr>
        <tr>
          <td>Top Career Roles</td>
          <td>${b1.careers.join("<br>")}</td>
          <td>${b2.careers.join("<br>")}</td>
        </tr>
        <tr>
          <td>Key Curriculum Topics</td>
          <td>${b1.curriculum.slice(0, 4).join(", ")}</td>
          <td>${b2.curriculum.slice(0, 4).join(", ")}</td>
        </tr>
        <tr>
          <td>Top Recruiters</td>
          <td>${b1.recruiters.join(", ")}</td>
          <td>${b2.recruiters.join(", ")}</td>
        </tr>
        <tr>
          <td>Key Advantage</td>
          <td>${b1.pros}</td>
          <td>${b2.pros}</td>
        </tr>
      </tbody>
    </table>
  `;
}

// -------------------------------------------------------------
// 10. DETAILED MODAL VIEWER
// -------------------------------------------------------------
function initModal() {
  const modal = document.getElementById("branch-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  closeBtn?.addEventListener("click", () => closeModal());
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("open")) {
      closeModal();
    }
  });
}

function openBranchModal(branchId) {
  const branch = BRANCHES_DATABASE.find(b => b.id === branchId);
  if (!branch) return;

  const modal = document.getElementById("branch-modal");
  const content = document.getElementById("modal-content");

  content.innerHTML = `
    <div class="modal-head-row">
      <div class="modal-icon">${branch.icon}</div>
      <div>
        <h2 style="font-size: 1.8rem;">${branch.name}</h2>
        <span class="badge-tag">${branch.category.toUpperCase()} STREAM</span>
      </div>
    </div>

    <p style="font-size: 1.05rem; color: #cbd5e1; margin-bottom: 20px;">${branch.description}</p>

    <div class="rec-meta-grid" style="margin-bottom: 24px;">
      <div class="rec-meta-item">
        <strong>Average Compensation</strong>
        <span style="color: #34d399;">${branch.avgSalary}</span>
      </div>
      <div class="rec-meta-item">
        <strong>Coding Demand</strong>
        <span>${branch.codingIntensity} / 5</span>
      </div>
      <div class="rec-meta-item">
        <strong>Math Rigor</strong>
        <span>${branch.mathIntensity} / 5</span>
      </div>
    </div>

    <div class="modal-section">
      <h4>🎓 Core Semester Curriculum</h4>
      <ul class="modal-list">
        ${branch.curriculum.map(c => `<li>${c}</li>`).join("")}
      </ul>
    </div>

    <div class="modal-section">
      <h4>💼 Target Job Titles</h4>
      <ul class="modal-list">
        ${branch.careers.map(car => `<li>${car}</li>`).join("")}
      </ul>
    </div>

    <div class="modal-section">
      <h4>🏢 Top Global Employers</h4>
      <p style="color: var(--text-muted);">${branch.recruiters.join(" • ")}</p>
    </div>

    <div class="modal-section">
      <h4>☀️ A Typical Day on the Job</h4>
      <p style="color: var(--text-muted); font-style: italic;">"${branch.dayInLife}"</p>
    </div>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  const modal = document.getElementById("branch-modal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

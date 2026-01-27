// Mobile nav
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("nav--open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

// Titan-style challenge parameters (sourced from Titan evaluations page)
const EVALS = {
  instant: {
    label: "Instant Pro",
    terms: [
      "Profit Target: N/A",
      "Daily Drawdown: 3%",
      "Max Drawdown: 6%",
      "Drawdown Type: Trailing HWM (equity)",
      "Min Days: 4",
      "Max Days: Unlimited",
      "Profit Split: 70%"
    ],
    plans: [
      { size: "$5k",  profitTarget: "N/A", dailyDD: "3%", ddType: "Trailing HWM (equity)", maxDD: "6%", minDays: "4 days", maxDays: "Unlimited", split: "70%", price: "$47" },
      { size: "$10k", profitTarget: "N/A", dailyDD: "3%", ddType: "Trailing HWM (equity)", maxDD: "6%", minDays: "4 days", maxDays: "Unlimited", split: "70%", price: "$65" },
      { size: "$25k", profitTarget: "N/A", dailyDD: "3%", ddType: "Trailing HWM (equity)", maxDD: "6%", minDays: "4 days", maxDays: "Unlimited", split: "70%", price: "$131" },
      { size: "$50k", profitTarget: "N/A", dailyDD: "3%", ddType: "Trailing HWM (equity)", maxDD: "6%", minDays: "4 days", maxDays: "Unlimited", split: "70%", price: "$185" }
    ]
  },

  one: {
    label: "One Step",
    terms: [
      "Profit Target: 9%",
      "Daily Drawdown: 4%",
      "Max Drawdown: 6%",
      "Drawdown Type: Trailing & Equity Based",
      "Min Days: 5",
      "Max Days: Unlimited",
      "Profit Split: 90%"
    ],
    plans: [
      { size: "$10k", profitTarget: "9%", dailyDD: "4%", ddType: "Trailing & Equity Based", maxDD: "6%", minDays: "5 days", maxDays: "Unlimited", split: "90%", price: "$53" },
      { size: "$25k", profitTarget: "9%", dailyDD: "4%", ddType: "Trailing & Equity Based", maxDD: "6%", minDays: "5 days", maxDays: "Unlimited", split: "90%", price: "$101" },
      { size: "$50k", profitTarget: "9%", dailyDD: "4%", ddType: "Trailing & Equity Based", maxDD: "6%", minDays: "5 days", maxDays: "Unlimited", split: "90%", price: "$203" },
      { size: "$100k", profitTarget: "9%", dailyDD: "4%", ddType: "Trailing & Equity Based", maxDD: "6%", minDays: "5 days", maxDays: "Unlimited", split: "90%", price: "$293" }
    ]
  },

  two: {
    label: "Two Step",
    terms: [
      "Profit Target: Phase 1 / 8%, Phase 2 / 5%",
      "Daily Drawdown: 4%",
      "Max Drawdown: 10%",
      "Drawdown Type: Static & Balance Based",
      "Min Days: 3",
      "Max Days: Unlimited",
      "Profit Split: 90%"
    ],
    plans: [
      { size: "$10k", profitTarget: "P1 8% / P2 5%", dailyDD: "4%", ddType: "Static & Balance Based", maxDD: "10%", minDays: "3 days", maxDays: "Unlimited", split: "90%", price: "$53" },
      { size: "$25k", profitTarget: "P1 8% / P2 5%", dailyDD: "4%", ddType: "Static & Balance Based", maxDD: "10%", minDays: "3 days", maxDays: "Unlimited", split: "90%", price: "$101" },
      { size: "$50k", profitTarget: "P1 8% / P2 5%", dailyDD: "4%", ddType: "Static & Balance Based", maxDD: "10%", minDays: "3 days", maxDays: "Unlimited", split: "90%", price: "$203" },
      { size: "$100k", profitTarget: "P1 8% / P2 5%", dailyDD: "4%", ddType: "Static & Balance Based", maxDD: "10%", minDays: "3 days", maxDays: "Unlimited", split: "90%", price: "$293" },
      { size: "$200k", profitTarget: "P1 8% / P2 5%", dailyDD: "4%", ddType: "Static & Balance Based", maxDD: "10%", minDays: "3 days", maxDays: "Unlimited", split: "90%", price: "$593" }
    ]
  },

  three: {
    label: "Three Step",
    terms: [
      "Profit Target: 6% / phase",
      "Daily Drawdown: 4%",
      "Max Drawdown: 10%",
      "Drawdown Type: Static & Balance Based",
      "Min Days: 3 days / phase",
      "Max Days: Unlimited",
      "Profit Split: 95%"
    ],
    plans: [
      { size: "$10k", profitTarget: "6% / phase", dailyDD: "4%", ddType: "Static & Balance Based", maxDD: "10%", minDays: "3 days / phase", maxDays: "Unlimited", split: "95%", price: "$41" },
      { size: "$25k", profitTarget: "6% / phase", dailyDD: "4%", ddType: "Static & Balance Based", maxDD: "10%", minDays: "3 days / phase", maxDays: "Unlimited", split: "95%", price: "$83" },
      { size: "$50k", profitTarget: "6% / phase", dailyDD: "4%", ddType: "Static & Balance Based", maxDD: "10%", minDays: "3 days / phase", maxDays: "Unlimited", split: "95%", price: "$167" }
    ]
  }
};

const planGrid = document.getElementById("planGrid");
const termsLine = document.getElementById("termsLine");

function render(evalKey) {
  const cfg = EVALS[evalKey];
  if (!cfg || !planGrid || !termsLine) return;

  // Terms line
  termsLine.innerHTML = cfg.terms.map(t => `<span class="chip">${t}</span>`).join("");

  // Cards
  planGrid.innerHTML = cfg.plans.map((p, idx) => {
    const featured = idx === 1 ? "planCard--featured" : "";
    const badge = idx === 1 ? `<div class="badge">Most Popular</div>` : "";
    return `
      <article class="planCard ${featured}">
        ${badge}
        <div class="planCard__top">
          <h3>${p.size}</h3>
          <div class="price">${p.price}<span>/ one-time</span></div>
        </div>

        <div class="planCard__rows">
          <div class="row"><span>Profit Target</span><b>${p.profitTarget}</b></div>
          <div class="row"><span>Daily Drawdown</span><b>${p.dailyDD}</b></div>
          <div class="row"><span>Max Drawdown</span><b>${p.maxDD}</b></div>
          <div class="row"><span>Drawdown Type</span><b>${p.ddType}</b></div>
          <div class="row"><span>Minimum Days</span><b>${p.minDays}</b></div>
          <div class="row"><span>Max Days</span><b>${p.maxDays}</b></div>
          <div class="row"><span>Profit Split</span><b>${p.split}</b></div>
        </div>

        <a class="btn btn--primary btn--wide" href="book.html#signup">Start ${cfg.label}</a>
        <p class="fineprint">All rules must be followed to pass. Trading involves risk.</p>
      </article>
    `;
  }).join("");
}

// Tabs
const tabs = document.querySelectorAll(".tab");
tabs.forEach(t => {
  t.addEventListener("click", () => {
    tabs.forEach(x => x.classList.remove("is-active"));
    t.classList.add("is-active");
    const key = t.getAttribute("data-eval");
    render(key);
  });
});

// Initial render
render("instant");

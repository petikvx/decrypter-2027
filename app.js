const { candidates, otherCandidates, polls, pollHistory, events, sources } = window.DECRYPTER_2027;
const sourcesById = new Map(sources.map(source => [source.id, source]));

const topics = [
  ["economy", "Économie & pouvoir d’achat"], ["immigration", "Immigration"], ["ecology", "Écologie & énergie"],
  ["institutions", "Institutions"], ["europe", "Europe & international"], ["services", "Services publics"]
];

const maturityLabels = {
  1: "Programme présidentiel publié et chiffré",
  2: "Propositions de campagne publiées",
  3: "Orientations de campagne",
  4: "Socle partisan ou programme antérieur",
  5: "Position personnelle ancienne",
  6: "Non documenté"
};

const frenchDate = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
function formatDate(date) {
  return frenchDate.format(new Date(`${date}T12:00:00Z`)).replace(".", "");
}

function freshnessFor(date, now = new Date()) {
  const verified = new Date(`${date}T12:00:00Z`);
  const ageInDays = Math.max(0, Math.floor((now - verified) / 86400000));
  if (ageInDays <= 7) return { key: "recent", label: "Vérifié récemment", shortLabel: "À jour", ageInDays };
  if (ageInDays <= 30) return { key: "watch", label: "À surveiller", shortLabel: "À surveiller", ageInDays };
  return { key: "review", label: "À revérifier", shortLabel: "À revérifier", ageInDays };
}

function freshnessBadge(candidate, compact = false) {
  const freshness = freshnessFor(candidate.verifiedAt);
  const label = compact ? freshness.shortLabel : freshness.label;
  return `<span class="freshness-badge freshness-${freshness.key}" title="Dernière vérification : ${formatDate(candidate.verifiedAt)}"><i aria-hidden="true"></i>${label} · <time datetime="${candidate.verifiedAt}">${formatDate(candidate.verifiedAt)}</time></span>`;
}

const grid = document.querySelector("#candidate-grid");
function candidateSourceLinks(candidate, sourceIds, className = "position-sources") {
  const links = sourceIds.map(id => {
    const source = sourcesById.get(id);
    const number = candidate.sourceIds.indexOf(id) + 1;
    return source && number > 0 ? `<a href="${source.url}" target="_blank" rel="noreferrer" title="${source.name}">${number}</a>` : "";
  }).filter(Boolean);
  return links.length ? `<small class="${className}">Sources&nbsp;: ${links.join(", ")}</small>` : "";
}

function candidateBibliography(candidate) {
  return candidate.sourceIds.map((id, index) => {
    const source = sourcesById.get(id);
    if (!source) return "";
    const publication = source.publishedAt ? ` · ${source.publishedAt.split("-").reverse().join("/")}` : "";
    const update = source.updatedAt ? ` · mise à jour ${formatDate(source.updatedAt)}` : "";
    return `<li><a href="${source.url}" target="_blank" rel="noreferrer"><b>${index + 1}. ${source.name}</b><span>${source.publisher}${publication}${update} · source vérifiée le ${formatDate(source.verifiedAt)} · ${source.description} ↗</span></a></li>`;
  }).join("");
}

function renderFreshnessOverview() {
  const counts = { recent: 0, watch: 0, review: 0 };
  candidates.forEach(candidate => { counts[freshnessFor(candidate.verifiedAt).key] += 1; });
  document.querySelector("#freshness-overview").innerHTML = `<p><b>Fraîcheur des fiches</b><span>Calculée depuis leur dernière vérification documentaire.</span></p><div><span class="freshness-count freshness-recent"><i></i><b>${counts.recent}</b> ≤ 7 jours</span><span class="freshness-count freshness-watch"><i></i><b>${counts.watch}</b> 8–30 jours</span><span class="freshness-count freshness-review"><i></i><b>${counts.review}</b> &gt; 30 jours</span></div>`;
}

function renderCandidateLandscape() {
  const groups = [
    ["declared", "Déclarés", "Candidature annoncée publiquement"],
    ["conditional", "Sous condition", "Primaire, vote militant ou autre décision préalable"],
    ["possible", "Pressentis", "Préparation ou intérêt public, sans déclaration formelle"],
    ["withdrawn", "Retraits recensés", "Candidature précédemment annoncée puis retirée"]
  ];
  document.querySelector("#candidate-landscape").innerHTML = groups.map(([key, label, description]) => {
    const entries = otherCandidates.filter(candidate => candidate.group === key);
    return `<section class="landscape-group landscape-${key}"><header><span>${entries.length}</span><div><h4>${label}</h4><p>${description}</p></div></header><ul>${entries.map(candidate => {
      const source = sourcesById.get(candidate.sourceIds[0]);
      return `<li><div><strong>${candidate.name}</strong><span>${candidate.party}</span></div><p>${candidate.note}</p><div class="landscape-meta">${freshnessBadge(candidate, true)}<a href="${source.url}" target="_blank" rel="noreferrer">Source ↗</a></div></li>`;
    }).join("")}</ul></section>`;
  }).join("");
}

function renderPollHistory() {
  const source = sourcesById.get(pollHistory.sourceId);
  const width = 900; const height = 350;
  const margin = { top: 20, right: 35, bottom: 48, left: 45 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const x = index => margin.left + index * chartWidth / (pollHistory.dates.length - 1);
  const y = value => margin.top + chartHeight - value / 40 * chartHeight;
  const gridLines = [0, 10, 20, 30, 40].map(value => `<g><line x1="${margin.left}" y1="${y(value)}" x2="${width - margin.right}" y2="${y(value)}"></line><text x="${margin.left - 10}" y="${y(value) + 4}" text-anchor="end">${value}%</text></g>`).join("");
  const dateLabels = pollHistory.dates.map((date, index) => `<text x="${x(index)}" y="${height - 14}" text-anchor="middle">${date.label}</text>`).join("");
  const lines = pollHistory.series.map(series => {
    const points = series.values.map((value, index) => `${x(index)},${y(value)}`).join(" ");
    const dots = series.values.map((value, index) => `<circle cx="${x(index)}" cy="${y(value)}" r="4" tabindex="0"><title>${series.name}, ${pollHistory.dates[index].label} : ${value} %</title></circle>`).join("");
    return `<g class="history-series" style="--series-color:${series.color}"><polyline points="${points}"></polyline>${dots}</g>`;
  }).join("");
  document.querySelector("#poll-history-chart").innerHTML = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="history-chart-title history-chart-desc"><title id="history-chart-title">Évolution de six intentions de vote de septembre 2025 à juillet 2026</title><desc id="history-chart-desc">Cinq vagues Ifop dans une hypothèse comparable avec Édouard Philippe et Marine Le Pen.</desc><g class="history-grid">${gridLines}${dateLabels}</g>${lines}</svg>`;
  document.querySelector("#poll-history-legend").innerHTML = pollHistory.series.map(series => `<span><i style="background:${series.color}"></i>${series.shortName}</span>`).join("");
  document.querySelector("#poll-history-note").innerHTML = `${pollHistory.scenario}. Terrains du 24 septembre 2025 au 8 juillet 2026. Les variations restent soumises aux marges d'erreur et aux effets de campagne. <a href="${source.url}" target="_blank" rel="noreferrer">Rapport Ifop complet ↗</a>`;
  document.querySelector("#poll-history-table").innerHTML = `<table><thead><tr><th scope="col">Vague</th>${pollHistory.series.map(series => `<th scope="col">${series.shortName}</th>`).join("")}<th scope="col">Échantillon</th></tr></thead><tbody>${pollHistory.dates.map((date, dateIndex) => `<tr><th scope="row">${date.fieldwork}</th>${pollHistory.series.map(series => `<td>${series.values[dateIndex]} %</td>`).join("")}<td>${date.sample.toLocaleString("fr-FR")}</td></tr>`).join("")}</tbody></table>`;
}

function renderCandidates(filter = "all") {
  grid.innerHTML = candidates.map(c => `
    <button class="candidate-card" data-id="${c.id}" data-family="${c.family}" ${filter !== "all" && filter !== c.family ? "hidden" : ""}>
      <div class="candidate-status"><span>${c.status}</span><i class="status-dot ${c.declared ? "declared" : ""}"></i></div>
      <div class="candidate-initials" style="background:${c.color}">${c.initials}</div>
      <h3>${c.name}</h3><small>${c.party}</small>
      ${freshnessBadge(c, true)}
      <div class="candidate-meta"><span>${c.maturity}</span><b>${c.score}</b></div>
    </button>`).join("");
}

document.querySelector("#poll-bars").innerHTML = polls.map(p => `<div class="poll-row"><span>${p.name}</span><div class="bar-track"><div class="bar-fill" style="width:${p.value / 36 * 100}%;background:${p.color}"></div></div><strong>${p.label}</strong></div>`).join("");

document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll("[data-filter]").forEach(b => b.classList.remove("active"));
  button.classList.add("active"); renderCandidates(button.dataset.filter);
}));

const candidateModal = document.querySelector("#candidate-modal");
grid.addEventListener("click", event => {
  const card = event.target.closest(".candidate-card"); if (!card) return;
  const c = candidates.find(item => item.id === card.dataset.id);
  document.querySelector("#modal-content").innerHTML = `<p class="eyebrow">${c.status} · ${c.familyLabel}</p><h2>${c.name}</h2><p class="modal-party">${c.party} · ${c.maturity}</p>${candidateSourceLinks(c, c.statusSourceIds, "status-sources")}<div class="verification-panel">${freshnessBadge(c)}<span><b>Niveau ${c.maturityLevel}/6</b>${maturityLabels[c.maturityLevel]}</span></div><p class="modal-summary">${c.summary}</p><div class="modal-positions">${topics.map(([key,label]) => `<div><b>${label}</b><p>${c.positions[key]}</p>${candidateSourceLinks(c, c.positionSourceIds[key])}</div>`).join("")}</div><section class="modal-sources" aria-label="Sources du profil"><h3>Références du profil</h3><ol>${candidateBibliography(c)}</ol></section>`;
  candidateModal.showModal();
});

document.querySelectorAll(".close-modal").forEach(b => b.addEventListener("click", () => b.closest("dialog").close()));
document.querySelectorAll("dialog").forEach(d => d.addEventListener("click", e => { if (e.target === d) d.close(); }));
document.querySelectorAll("[data-open-method]").forEach(b => b.addEventListener("click", () => document.querySelector("#method-modal").showModal()));

const tabs = document.querySelector("#topic-tabs");
tabs.innerHTML = topics.map(([key,label], i) => `<button data-topic="${key}" class="${i === 0 ? "active" : ""}">${label}</button>`).join("");
const selectA = document.querySelector("#candidate-a"); const selectB = document.querySelector("#candidate-b");
const options = candidates.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
selectA.innerHTML = options; selectB.innerHTML = options; selectA.value = "melenchon"; selectB.value = "retailleau";
let activeTopic = "economy";
function updateComparison() {
  const a = candidates.find(c => c.id === selectA.value); const b = candidates.find(c => c.id === selectB.value);
  document.querySelector("#comparison").innerHTML = `<article class="comparison-card"><small>${a.party}</small><h3>${a.name}</h3>${freshnessBadge(a, true)}<p>${a.positions[activeTopic]}</p>${candidateSourceLinks(a, a.positionSourceIds[activeTopic], "comparison-sources")}</article><div class="versus">versus</div><article class="comparison-card"><small>${b.party}</small><h3>${b.name}</h3>${freshnessBadge(b, true)}<p>${b.positions[activeTopic]}</p>${candidateSourceLinks(b, b.positionSourceIds[activeTopic], "comparison-sources")}</article>`;
}
tabs.addEventListener("click", e => { if (!e.target.dataset.topic) return; tabs.querySelectorAll("button").forEach(b => b.classList.remove("active")); e.target.classList.add("active"); activeTopic = e.target.dataset.topic; updateComparison(); });
selectA.addEventListener("change", updateComparison); selectB.addEventListener("change", updateComparison);

document.querySelector("#timeline").innerHTML = events.map(e => `<article class="timeline-item"><time class="timeline-date">${e[0]}</time><div><h3>${e[1]}</h3><p>${e[2]}</p></div><span class="timeline-tag">${e[3]}</span></article>`).join("");

document.querySelector("#source-grid").innerHTML = sources.filter(source => source.featured).map(source => `<a href="${source.url}" target="_blank" rel="noreferrer"><span>${source.category}</span><strong>${source.name}</strong><small>${source.description} ↗</small></a>`).join("");

const firstRound = new Date("2027-04-18T08:00:00+02:00");
const days = Math.max(0, Math.ceil((firstRound - new Date()) / 86400000));
document.querySelector("#days-left").textContent = days;

renderFreshnessOverview(); renderCandidates(); renderCandidateLandscape(); renderPollHistory(); updateComparison();

const { candidates, polls, events, sources } = window.DECRYPTER_2027;

const topics = [
  ["economy", "Économie & pouvoir d’achat"], ["immigration", "Immigration"], ["ecology", "Écologie & énergie"],
  ["institutions", "Institutions"], ["europe", "Europe & international"], ["services", "Services publics"]
];

const grid = document.querySelector("#candidate-grid");
function renderCandidates(filter = "all") {
  grid.innerHTML = candidates.map(c => `
    <button class="candidate-card" data-id="${c.id}" data-family="${c.family}" ${filter !== "all" && filter !== c.family ? "hidden" : ""}>
      <div class="candidate-status"><span>${c.status}</span><i class="status-dot ${c.declared ? "declared" : ""}"></i></div>
      <div class="candidate-initials" style="background:${c.color}">${c.initials}</div>
      <h3>${c.name}</h3><small>${c.party}</small>
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
  document.querySelector("#modal-content").innerHTML = `<p class="eyebrow">${c.status} · ${c.familyLabel}</p><h2>${c.name}</h2><p class="modal-party">${c.party} · ${c.maturity}</p><p class="modal-summary">${c.summary}</p><div class="modal-positions">${topics.slice(0,4).map(([key,label]) => `<div><b>${label}</b><p>${c.positions[key]}</p></div>`).join("")}</div><a class="modal-source" href="${c.source}" target="_blank" rel="noreferrer">Consulter une source de référence ↗</a>`;
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
  document.querySelector("#comparison").innerHTML = `<article class="comparison-card"><small>${a.party}</small><h3>${a.name}</h3><p>${a.positions[activeTopic]}</p></article><div class="versus">versus</div><article class="comparison-card"><small>${b.party}</small><h3>${b.name}</h3><p>${b.positions[activeTopic]}</p></article>`;
}
tabs.addEventListener("click", e => { if (!e.target.dataset.topic) return; tabs.querySelectorAll("button").forEach(b => b.classList.remove("active")); e.target.classList.add("active"); activeTopic = e.target.dataset.topic; updateComparison(); });
selectA.addEventListener("change", updateComparison); selectB.addEventListener("change", updateComparison);

document.querySelector("#timeline").innerHTML = events.map(e => `<article class="timeline-item"><time class="timeline-date">${e[0]}</time><div><h3>${e[1]}</h3><p>${e[2]}</p></div><span class="timeline-tag">${e[3]}</span></article>`).join("");

document.querySelector("#source-grid").innerHTML = sources.map(source => `<a href="${source.url}" target="_blank" rel="noreferrer"><span>${source.category}</span><strong>${source.name}</strong><small>${source.description} ↗</small></a>`).join("");

const firstRound = new Date("2027-04-18T08:00:00+02:00");
const days = Math.max(0, Math.ceil((firstRound - new Date()) / 86400000));
document.querySelector("#days-left").textContent = days;

renderCandidates(); updateComparison();

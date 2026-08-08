const candidates = [
  {
    id: "lepen", name: "Marine Le Pen", initials: "MLP", party: "Rassemblement national", family: "far-right", familyLabel: "Extrême droite", status: "Déclarée", declared: true, color: "#293d64", score: "31–32 %",
    maturity: "Orientations — programme 2027 incomplet",
    summary: "Une quatrième candidature portée par un socle électoral élevé, une stratégie de normalisation et la priorité donnée au pouvoir d’achat, à l’immigration et à l’autorité.",
    positions: { economy: "Baisse ciblée de fiscalité et priorité au pouvoir d’achat ; le chiffrage 2027 reste à stabiliser.", immigration: "Réduction forte de l’immigration et priorité nationale, sous réserve des obstacles constitutionnels et européens.", ecology: "Écologie non punitive, défense du nucléaire et critique des contraintes jugées excessives.", institutions: "Référendum et renforcement de la souveraineté nationale.", europe: "Europe des nations, refus de nouveaux transferts de souveraineté.", services: "Protection des services publics et priorité annoncée à la sécurité et à la santé." },
    source: "https://municipales2026.rassemblementnational.fr/documents/202406-programme.pdf"
  },
  {
    id: "bardella", name: "Jordan Bardella", initials: "JB", party: "Rassemblement national", family: "far-right", familyLabel: "Extrême droite", status: "Hypothèse de remplacement", declared: false, color: "#405273", score: "33,5–36 %",
    maturity: "Socle RN — candidature non déclarée",
    summary: "Le président du RN constitue l’hypothèse de remplacement si Marine Le Pen ne pouvait finalement pas concourir. Il n’est pas, à ce stade, candidat face à elle.",
    positions: { economy: "Ligne économique du RN : pouvoir d’achat, baisses fiscales ciblées et préférence pour la production nationale.", immigration: "Réduction forte de l’immigration, priorité nationale et durcissement de l’accès à certaines prestations.", ecology: "Défense du nucléaire et refus des contraintes écologiques jugées punitives.", institutions: "Référendum et réaffirmation de la souveraineté nationale.", europe: "Europe des nations et opposition à de nouveaux transferts de souveraineté.", services: "Priorité affichée à la sécurité, à la santé et aux services publics de proximité." },
    source: "https://lcp.fr/actualites/presidentielle-2027-la-liste-des-candidats-deja-en-lice-et-des-pretendants-436373"
  },
  {
    id: "melenchon", name: "Jean-Luc Mélenchon", initials: "JLM", party: "La France insoumise", family: "left", familyLabel: "Gauche", status: "Déclaré", declared: true, color: "#bd493b", score: "≈ 13 %",
    maturity: "Socle programmatique documenté",
    summary: "Une quatrième campagne fondée sur L’Avenir en commun, la rupture avec la politique économique actuelle et le récit d’une « nouvelle France » populaire.",
    positions: { economy: "Planification, redistribution, hausse des bas salaires et intervention publique renforcée.", immigration: "Accueil digne, régularisations selon critères et opposition au durcissement des politiques migratoires.", ecology: "Planification écologique et sortie progressive du nucléaire au profit des renouvelables.", institutions: "Passage à une VIe République par une assemblée constituante.", europe: "Désobéissance aux règles européennes jugées incompatibles avec le programme.", services: "Investissements massifs dans l’école, la santé et les services publics." },
    source: "https://melenchon.fr/wp-content/uploads/2026/05/LETTRE-AU-PEUPLE-DE-FRANCE-.pdf"
  },
  {
    id: "attal", name: "Gabriel Attal", initials: "GA", party: "Renaissance", family: "center", familyLabel: "Centre", status: "Déclaré", declared: true, color: "#8066a6", score: "8,5–17,5 %",
    maturity: "Orientations de campagne",
    summary: "Une candidature qui revendique l’action et cherche à s’émanciper du bilan Macron, autour de l’école, des salaires, des frontières et de l’intelligence artificielle.",
    positions: { economy: "Détaxer le travail, supprimer 100 000 postes publics et viser l’équilibre budgétaire en 2037.", immigration: "Quotas migratoires et contrôle renforcé des frontières.", ecology: "Décarbonation compatible avec l’innovation, l’industrie et le nucléaire.", institutions: "Réformes ciblées dans le cadre de la Ve République.", europe: "Ligne pro-européenne et recherche d’une Europe plus puissante.", services: "Priorité à l’école et à l’autorité ; maîtrise des effectifs publics." },
    source: "https://attalpresident.fr/"
  },
  {
    id: "philippe", name: "Édouard Philippe", initials: "ÉP", party: "Horizons", family: "center", familyLabel: "Centre droit", status: "Déclaré", declared: true, color: "#4a7795", score: "13–19 %",
    maturity: "Projet en construction",
    summary: "Parti tôt, l’ancien Premier ministre cherche à réunir le centre et la droite autour de l’ordre, de la production et du redressement des finances publiques.",
    positions: { economy: "Réduction de la dette, priorité à la production et à la compétitivité.", immigration: "Maîtrise des flux et renforcement de l’efficacité des éloignements.", ecology: "Transition pragmatique, nucléaire et adaptation au changement climatique.", institutions: "Stabilité institutionnelle et culture de coalition.", europe: "Europe de la puissance, défense commune et soutien à l’Ukraine.", services: "Recentrage de l’État sur les fonctions essentielles et réforme de l’action publique." },
    source: "https://horizonsleparti.fr/"
  },
  {
    id: "retailleau", name: "Bruno Retailleau", initials: "BR", party: "Les Républicains", family: "right", familyLabel: "Droite", status: "Désigné par LR", declared: true, color: "#305d8c", score: "7,5–10 %",
    maturity: "Premières propositions",
    summary: "Une droite assumée qui place l’autorité, l’immigration, la maîtrise des dépenses et la transmission au cœur de son offre.",
    positions: { economy: "Baisse des dépenses, libération de l’économie et refus des hausses d’impôts.", immigration: "Réduction de l’immigration légale et illégale, avec révisions constitutionnelle et européenne.", ecology: "Priorité au nucléaire, à l’innovation et au refus d’une écologie punitive.", institutions: "Référendums et primauté accrue de la décision politique sur les jurisprudences.", europe: "Europe moins normative et davantage tournée vers les frontières et la puissance.", services: "Autorité scolaire, sécurité et recentrage de l’État." },
    source: "https://republicains.fr/actualites/2026/04/20/bruno-retailleau-largement-designe-comme-candidat-des-republicains-pour-lelection-presidentielle/"
  },
  {
    id: "glucksmann", name: "Raphaël Glucksmann", initials: "RG", party: "Place publique", family: "left", familyLabel: "Gauche", status: "Pressenti", declared: false, color: "#d45d69", score: "11–14 %",
    maturity: "Propositions publiées — candidature à confirmer",
    summary: "Une ligne sociale-démocrate, écologiste et pro-européenne qui revendique une rupture politique avec LFI.",
    positions: { economy: "Réindustrialisation verte, justice fiscale et soutien au travail.", immigration: "Convention citoyenne pour construire une politique migratoire durable.", ecology: "Planification écologique européenne et investissements dans la transition.", institutions: "Proportionnelle et investiture du Premier ministre par l’Assemblée.", europe: "Renforcement de l’Europe politique, militaire et démocratique.", services: "École de l’émancipation, santé et service civique obligatoire." },
    source: "https://lcp.fr/actualites/presidentielle-raphael-glucksmann-devoile-les-premieres-lignes-de-son-possible-programme"
  },
  {
    id: "ruffin", name: "François Ruffin", initials: "FR", party: "Debout !", family: "left", familyLabel: "Gauche", status: "Conditionnel", declared: false, color: "#ce7559", score: "Non testé ici",
    maturity: "Ligne politique — programme incomplet",
    summary: "Une candidature populaire et sociale centrée sur le travail, les services publics et la reconquête des électeurs des territoires désindustrialisés.",
    positions: { economy: "Hausse des salaires, protection de l’emploi et relocalisations.", immigration: "Ligne d’accueil et d’intégration, moins centrale dans sa stratégie publique.", ecology: "Écologie populaire liant transformation et amélioration du quotidien.", institutions: "Davantage de démocratie citoyenne et limitation de la concentration des pouvoirs.", europe: "Réorientation sociale et écologique des politiques européennes.", services: "Investissement dans l’hôpital, l’école et les services publics de proximité." },
    source: "https://lcp.fr/actualites/presidentielle-2027-la-liste-des-candidats-deja-en-lice-et-des-pretendants-436373"
  },
  {
    id: "tondelier", name: "Marine Tondelier", initials: "MT", party: "Les Écologistes", family: "left", familyLabel: "Écologistes", status: "Conditionnelle", declared: false, color: "#388b61", score: "≈ 4 %",
    maturity: "Socle partisan — stratégie à définir",
    summary: "Une offre écologiste tournée vers la justice sociale, l’adaptation climatique et l’union d’une partie de la gauche.",
    positions: { economy: "Investissements verts et redistribution pour accompagner la transition.", immigration: "Accueil européen coordonné et défense du droit d’asile.", ecology: "Réduction des émissions, adaptation, biodiversité et sobriété.", institutions: "Proportionnelle et démocratie participative renforcée.", europe: "Approfondissement écologique et démocratique de l’Union européenne.", services: "Services publics de proximité et rénovation thermique des bâtiments." },
    source: "https://lcp.fr/actualites/presidentielle-2027-la-liste-des-candidats-deja-en-lice-et-des-pretendants-436373"
  },
  {
    id: "zemmour", name: "Éric Zemmour", initials: "ÉZ", party: "Reconquête !", family: "far-right", familyLabel: "Extrême droite", status: "Conditionnel", declared: false, color: "#625467", score: "≈ 4 %",
    maturity: "Socle 2022 — candidature conditionnelle",
    summary: "Une ligne nationaliste axée sur l’identité, l’immigration et l’assimilation, en concurrence directe avec le RN.",
    positions: { economy: "Baisse des prélèvements et politique favorable aux entreprises et aux indépendants.", immigration: "Immigration quasi nulle, suppression du regroupement familial et politique d’assimilation.", ecology: "Nucléaire, technologie et opposition à l’écologie dite punitive.", institutions: "Référendums et renforcement du pouvoir exécutif.", europe: "Europe des nations et primauté du droit national.", services: "Autorité scolaire, sécurité et recentrage des politiques sociales." },
    source: "https://lcp.fr/actualites/presidentielle-2027-la-liste-des-candidats-deja-en-lice-et-des-pretendants-436373"
  }
];

const polls = [
  { name: "Bardella", value: 36, label: "33,5–36 %", color: "#293d64" },
  { name: "Le Pen", value: 32, label: "31–32 %", color: "#3f5074" },
  { name: "Philippe", value: 19, label: "13–19 %", color: "#4a7795" },
  { name: "Attal", value: 17.5, label: "8,5–17,5 %", color: "#8066a6" },
  { name: "Glucksmann", value: 14, label: "11–14 %", color: "#d45d69" },
  { name: "Mélenchon", value: 13.5, label: "13–13,5 %", color: "#bd493b" },
  { name: "Retailleau", value: 10, label: "7,5–10 %", color: "#305d8c" }
];

const topics = [
  ["economy", "Économie & pouvoir d’achat"], ["immigration", "Immigration"], ["ecology", "Écologie & énergie"],
  ["institutions", "Institutions"], ["europe", "Europe & international"], ["services", "Services publics"]
];

const events = [
  ["3 septembre 2024", "Édouard Philippe annonce sa candidature", "Le président d’Horizons est le premier candidat majeur à entrer dans la course.", "Candidature"],
  ["20 avril 2026", "Bruno Retailleau désigné par les adhérents LR", "73,8 % des suffrages exprimés choisissent la désignation du président du parti.", "Droite"],
  ["4 mai 2026", "Jean-Luc Mélenchon officialise une quatrième campagne", "LFI repart avec son candidat de 2012, 2017 et 2022.", "Gauche"],
  ["22 mai 2026", "Gabriel Attal se lance", "L’ancien Premier ministre présente une campagne autour de l’école, des salaires, des frontières et de l’IA.", "Centre"],
  ["7 juillet 2026", "Marine Le Pen annonce sa candidature", "La décision intervient après l’arrêt de la cour d’appel ; son pourvoi en cassation maintient une incertitude judiciaire.", "Justice"],
  ["9 juillet 2026", "Le PS choisit une primaire du pôle socialiste", "Ce vote éloigne le projet de primaire unitaire de toute la gauche non mélenchoniste.", "Gauche"],
  ["Automne 2026", "Choix et rassemblements attendus", "Primaires, ralliements et éventuels désistements doivent réduire le nombre de prétendants.", "À venir"]
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

const firstRound = new Date("2027-04-18T08:00:00+02:00");
const days = Math.max(0, Math.ceil((firstRound - new Date()) / 86400000));
document.querySelector("#days-left").textContent = days;

renderCandidates(); updateComparison();

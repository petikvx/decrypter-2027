window.DECRYPTER_2027 = window.DECRYPTER_2027 || {};

// Registre central des références. Les profils et leurs thèmes pointent vers
// ces identifiants afin qu'une source ne soit décrite qu'une seule fois.
window.DECRYPTER_2027.sources = [
  {
    id: "government-calendar", category: "Cadre officiel", name: "Gouvernement français",
    publisher: "Gouvernement français", type: "institution", publishedAt: null, verifiedAt: "2026-08-10", featured: true,
    description: "Calendrier, règles et parrainages",
    url: "https://www.info.gouv.fr/actualite/presidentielle-2027-date-a-retenir-et-informations-cles"
  },
  {
    id: "lcp-candidates", category: "Candidatures", name: "LCP — Assemblée nationale",
    publisher: "LCP", type: "reference-media", publishedAt: "2026-05-15", updatedAt: "2026-07-10", verifiedAt: "2026-08-10", featured: true,
    description: "Recensement mis à jour des candidatures et hypothèses",
    url: "https://lcp.fr/actualites/presidentielle-2027-la-liste-des-candidats-deja-en-lice-et-des-pretendants-436373"
  },
  {
    id: "lemonde-candidates", category: "Rapports de force", name: "Le Monde — Les Décodeurs",
    publisher: "Le Monde", type: "reference-media", publishedAt: "2026-07-02", updatedAt: "2026-07-27", verifiedAt: "2026-08-10", featured: true,
    description: "État des candidatures et des familles politiques",
    url: "https://www.lemonde.fr/les-decodeurs/article/2026/07/02/presidentielle-2027-qui-sont-les-34-candidats-declares-et-probables_6680905_4355771.html"
  },
  {
    id: "ipsos-may-2026", category: "Opinion", name: "Ipsos bva",
    publisher: "Ipsos bva", type: "poll", publishedAt: "2026-06-01", verifiedAt: "2026-08-10", featured: true,
    description: "Rapport complet, configurations et méthodologie",
    url: "https://www.ipsos.com/sites/default/files/ct/news/documents/2026-06/presidentielle-2027-intention-vote-mai26-rapport-complet-web.pdf"
  },
  {
    id: "ifop-july-2026", category: "Opinion", name: "Ifop — historique comparable",
    publisher: "Ifop", type: "poll", publishedAt: "2026-07-08", verifiedAt: "2026-08-10",
    description: "Rapport complet avec cinq vagues dans une même hypothèse de premier tour",
    url: "https://www.ifop.com/wp-content/uploads/2026/07/122649-resultats.pdf"
  },
  {
    id: "rn-project-2022", category: "Projet antérieur", name: "Projet présidentiel de Marine Le Pen",
    publisher: "Rassemblement national", type: "official-party", publishedAt: "2022-03-11", verifiedAt: "2026-08-10",
    description: "Livret Entreprise du projet présidentiel de 2022",
    url: "https://rassemblementnational.fr/documents/WEB-GRN-LIVRET-ENTREPRISE.pdf"
  },
  {
    id: "rn-lepen-candidacy-2026", category: "Candidature", name: "Communiqué de Marine Le Pen",
    publisher: "Rassemblement national", type: "official-campaign", publishedAt: "2026-07-15", verifiedAt: "2026-08-10",
    description: "Communiqué la présentant comme candidate à l'élection présidentielle",
    url: "https://municipales2026.rassemblementnational.fr/communiques/ingerence-interieure-le-senat-invente-le-delit-dopinion-a-la-francaise"
  },
  {
    id: "melenchon-letter-2026", category: "Candidature", name: "Lettre au peuple de France",
    publisher: "Jean-Luc Mélenchon", type: "official-campaign", publishedAt: "2026-05-05", verifiedAt: "2026-08-10",
    description: "Déclaration de candidature et orientations de campagne",
    url: "https://melenchon.fr/wp-content/uploads/2026/05/LETTRE-AU-PEUPLE-DE-FRANCE-.pdf"
  },
  {
    id: "lfi-contributions-2026", category: "Programme", name: "Contributions à L'Avenir en commun",
    publisher: "La France insoumise", type: "official-party", publishedAt: "2026-05-20", verifiedAt: "2026-08-10",
    description: "Processus d'actualisation du programme pour 2027",
    url: "https://lafranceinsoumise.fr/2026/05/20/la-france-insoumise-ouvre-son-programme-a-contributions-citoyennes/"
  },
  {
    id: "melenchon-program-2022", category: "Projet antérieur", name: "L'Avenir en commun — version abrégée",
    publisher: "Jean-Luc Mélenchon", type: "official-campaign", publishedAt: "2022-04-05", verifiedAt: "2026-08-10",
    description: "Programme présidentiel de 2022, utilisé comme socle antérieur",
    url: "https://melenchon.fr/2022/04/05/le-programme-de-jean-luc-melenchon-lavenir-en-commun-version-abregee/"
  },
  {
    id: "attal-campaign-2026", category: "Candidature", name: "Site de campagne de Gabriel Attal",
    publisher: "Gabriel Attal 2027", type: "official-campaign", publishedAt: "2026-05-22", verifiedAt: "2026-08-10",
    description: "Candidature, priorités et chantier programmatique",
    url: "https://attalpresident.fr/"
  },
  {
    id: "attal-work-2026", category: "Proposition", name: "Travail et salaires",
    publisher: "Gabriel Attal 2027", type: "official-campaign", publishedAt: null, verifiedAt: "2026-08-10",
    description: "Page thématique consacrée au travail et aux salaires",
    url: "https://attalpresident.fr/programme/travail-salaires"
  },
  {
    id: "attal-debt-2026", category: "Proposition", name: "Dette de l'État",
    publisher: "Gabriel Attal 2027", type: "official-campaign", publishedAt: null, verifiedAt: "2026-08-10",
    description: "Page thématique consacrée aux finances publiques",
    url: "https://attalpresident.fr/programme/dette-de-letat"
  },
  {
    id: "attal-institutions-2026", category: "Proposition", name: "Réforme institutionnelle",
    publisher: "Gabriel Attal 2027", type: "official-campaign", publishedAt: "2026-08-02", verifiedAt: "2026-08-15",
    description: "Entretien au JDD repris sur le site de campagne : réforme soumise aux Français",
    url: "https://attalpresident.fr/actualites/dans-le-jdd-gabriel-attal-veut-proposer-la-plus-grande-reforme-institutionnelle-depuis-1958"
  },
  {
    id: "franceinfo-ps-primary-2026", category: "Candidatures", name: "Primaire du Parti socialiste",
    publisher: "franceinfo", type: "reference-media", publishedAt: "2026-08-04", verifiedAt: "2026-08-15",
    description: "Dates envisagées, candidats et débat sur le coût de participation",
    url: "https://www.franceinfo.fr/politique/ps/candidats-dates-cout-cinq-questions-sur-la-primaire-du-parti-socialiste-en-vue-de-la-presidentielle-de-2027_8133077.html"
  },
  {
    id: "franceinfo-bayrou-primary-2026", category: "Alliances", name: "François Bayrou et la primaire du centre",
    publisher: "franceinfo", type: "reference-media", publishedAt: "2026-08-10", verifiedAt: "2026-08-15",
    description: "Appel à une primaire entre « tous ceux qui rejettent les extrêmes »",
    url: "https://www.franceinfo.fr/politique/francois-bayrou/presidentielle-2027-francois-bayrou-veut-une-primaire-contre-les-extremes_8142209.html"
  },
  {
    id: "liberation-hollande-affiches-2026", category: "Campagne", name: "Affichage des proches de François Hollande",
    publisher: "Libération", type: "reference-media", publishedAt: "2026-08-12", verifiedAt: "2026-08-15",
    description: "Campagne d'affichage pour les 72 ans de François Hollande, présentée comme non déclarative",
    url: "https://www.liberation.fr/politique/elections/ce-nest-pas-un-lancement-de-campagne-pour-son-anniversaire-les-proches-de-francois-hollande-lui-offrent-une-campagne-daffichage-20260812_BC4FICZY2FHHFOYKPB6HUEZZHM/"
  },
  {
    id: "tf1-ref-debate-2026", category: "Campagne", name: "Débat de la REF sur LCI",
    publisher: "TF1 Info", type: "reference-media", publishedAt: "2026-07-28", verifiedAt: "2026-08-15",
    description: "Annonce du débat du 27 août 2026 organisé par le Medef et diffusé par LCI",
    url: "https://www.tf1info.fr/politique/election-presidentielle-2027-lci-organisera-le-27-aout-un-grand-debat-avec-sept-candidats-declares-ou-pressentis-2455591.html"
  },
  {
    id: "franceinfo-darmanin-philippe-2026", category: "Alliances", name: "Ralliement de Gérald Darmanin à Édouard Philippe",
    publisher: "franceinfo", type: "reference-media", publishedAt: "2026-08-18", verifiedAt: "2026-08-18",
    description: "Renoncement à candidature et soutien au candidat Horizons, annoncé le 17 août dans la presse régionale",
    url: "https://www.franceinfo.fr/elections/presidentielle/presidentielle-2027-gerald-darmanin-rallie-le-camp-edouard-philippe_8151761.html"
  },
  {
    id: "horizons-campaign-2026", category: "Candidature", name: "Discours et campagne d'Édouard Philippe",
    publisher: "Horizons", type: "official-party", publishedAt: "2026-07-05", verifiedAt: "2026-08-10",
    description: "Actualités de campagne et discours officiels",
    url: "https://horizonsleparti.fr/discours-dedouard-philippe-lors-de-son-grand-meeting-a-ladidas-arena-5-juillet-2026/"
  },
  {
    id: "horizons-manifesto", category: "Orientations", name: "Le Manifeste",
    publisher: "Horizons", type: "official-party", publishedAt: null, verifiedAt: "2026-08-10",
    description: "Principes politiques du parti Horizons",
    url: "https://horizonsleparti.fr/le-manifeste/"
  },
  {
    id: "horizons-documents", category: "Travaux thématiques", name: "Notes et documents d'Horizons",
    publisher: "Horizons", type: "official-party", publishedAt: null, verifiedAt: "2026-08-10",
    description: "Index des travaux sur la dette, l'énergie, l'Europe et les services publics",
    url: "https://horizonsleparti.fr/demande-de-documents/"
  },
  {
    id: "lr-designation-2026", category: "Candidature", name: "Désignation de Bruno Retailleau",
    publisher: "Les Républicains", type: "official-party", publishedAt: "2026-04-20", verifiedAt: "2026-08-10",
    description: "Annonce de sa désignation comme candidat des Républicains",
    url: "https://republicains.fr/actualites/2026/04/20/bruno-retailleau-largement-designe-comme-candidat-des-republicains-pour-lelection-presidentielle/"
  },
  {
    id: "lr-proposals-2026", category: "Programme", name: "Nos propositions — Le travail gagnant",
    publisher: "Les Républicains", type: "official-party", publishedAt: "2026-01-01", verifiedAt: "2026-08-10",
    description: "Brochure économique publiée par Les Républicains",
    url: "https://republicains.fr/wp-content/uploads/2026/01/51705_LesRepublicains_Brochures_A5-40P_DEF.pdf"
  },
  {
    id: "retailleau-interview-2026", category: "Propositions", name: "Ma candidature ira jusqu'au bout",
    publisher: "Les Républicains", type: "official-party", publishedAt: "2026-05-31", verifiedAt: "2026-08-10",
    description: "Entretien sur la candidature et la politique migratoire",
    url: "https://republicains.fr/actualites/2026/05/31/ma-candidature-ira-jusquau-bout/"
  },
  {
    id: "glucksmann-proposals-2026", category: "Propositions", name: "Premières lignes d'un possible programme",
    publisher: "LCP", type: "reference-media", publishedAt: null, verifiedAt: "2026-08-10",
    description: "Présentation sourcée des propositions de Raphaël Glucksmann",
    url: "https://lcp.fr/actualites/presidentielle-raphael-glucksmann-devoile-les-premieres-lignes-de-son-possible-programme"
  },
  {
    id: "place-publique-project-2025", category: "Projet partisan", name: "Pré-programme de Place publique",
    publisher: "Place publique", type: "official-party", publishedAt: "2025-09-25", verifiedAt: "2026-08-10",
    description: "Document de travail du parti, antérieur à un éventuel programme présidentiel",
    url: "https://place-publique.eu/wp-content/uploads/2025/09/20250925_PP_Reole_pre_programme_2025.pdf"
  },
  {
    id: "ruffin-campaign-2026", category: "Candidature", name: "Actualité présidentielle de François Ruffin",
    publisher: "François Ruffin", type: "official-campaign", publishedAt: null, verifiedAt: "2026-08-10",
    description: "Interventions et campagne pour recueillir des soutiens citoyens",
    url: "https://francoisruffin.fr/lactu/"
  },
  {
    id: "ruffin-work-2026", category: "Orientation", name: "Libérer les énergies des travailleurs",
    publisher: "François Ruffin", type: "official-campaign", publishedAt: "2026-04-12", verifiedAt: "2026-08-10",
    description: "Tribune sur le travail et sa protection",
    url: "https://francoisruffin.fr/liberer-les-energies-des-travailleurs/"
  },
  {
    id: "ruffin-ideas", category: "Positions", name: "Des idées, on en a !",
    publisher: "François Ruffin", type: "official-campaign", publishedAt: null, verifiedAt: "2026-08-10",
    description: "Index de propositions défendues par François Ruffin",
    url: "https://francoisruffin.fr/nos-idees/"
  },
  {
    id: "ecologists-program-2026", category: "Programme partisan", name: "Programme des Écologistes",
    publisher: "Les Écologistes", type: "official-party", publishedAt: null, verifiedAt: "2026-08-10",
    description: "Programme du parti pour la prospérité écologique",
    url: "https://lesecologistes.fr/share/page/6ImK65GKUnvibm33WGkjkj/projet"
  },
  {
    id: "tondelier-status-2026", category: "Candidature", name: "Communiqué du Bureau politique",
    publisher: "Les Écologistes", type: "official-party", publishedAt: "2026-06-09", verifiedAt: "2026-08-10",
    description: "Candidature conditionnée à l'issue d'une primaire de la gauche et des écologistes",
    url: "https://lesecologistes.fr/posts/6JnaFACGYNXg7YHgA8uDXu/communique-de-presse-du-bureau-politique-des-ecologistes"
  },
  {
    id: "reconquete-program", category: "Programme partisan", name: "Priorités et programme de Reconquête",
    publisher: "Reconquête !", type: "official-party", publishedAt: null, verifiedAt: "2026-08-10",
    description: "Priorités politiques et programme actuellement publiés par le parti",
    url: "https://www.parti-reconquete.fr/"
  }
];

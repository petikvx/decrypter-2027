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
    id: "tf1-ref-debate-2026", category: "Campagne", name: "Annonce du débat de la REF sur LCI",
    publisher: "TF1 Info", type: "reference-media", publishedAt: "2026-07-28", verifiedAt: "2026-08-29",
    description: "Annonce préalable du débat du 27 août 2026 organisé par le Medef et diffusé par LCI",
    url: "https://www.tf1info.fr/politique/election-presidentielle-2027-lci-organisera-le-27-aout-un-grand-debat-avec-sept-candidats-declares-ou-pressentis-2455591.html"
  },
  {
    id: "franceinfo-darmanin-philippe-2026", category: "Alliances", name: "Ralliement de Gérald Darmanin à Édouard Philippe",
    publisher: "franceinfo", type: "reference-media", publishedAt: "2026-08-18", verifiedAt: "2026-08-18",
    description: "Renoncement à candidature et soutien au candidat Horizons, annoncé le 17 août dans la presse régionale",
    url: "https://www.franceinfo.fr/elections/presidentielle/presidentielle-2027-gerald-darmanin-rallie-le-camp-edouard-philippe_8151761.html"
  },
  {
    id: "franceinfo-lalanne-2026", category: "Candidature", name: "Candidature de Francis Lalanne",
    publisher: "franceinfo", type: "reference-media", publishedAt: "2026-08-19", verifiedAt: "2026-08-21",
    description: "Annonce de candidature, soutien de France Libre et premier meeting à Paris",
    url: "https://www.franceinfo.fr/elections/presidentielle/presidentielle-2027-le-chanteur-francis-lalanne-officiellement-candidat-premier-meeting-vendredi-a-paris_8153588.html"
  },
  {
    id: "lefigaro-lalanne-2026", category: "Candidature", name: "Campagne et cadre judiciaire de Francis Lalanne",
    publisher: "Le Figaro", type: "reference-media", publishedAt: "2026-08-19", verifiedAt: "2026-08-21",
    description: "Meeting de lancement, orientations annoncées et fin d’inéligibilité mi-octobre 2026",
    url: "https://www.lefigaro.fr/elections/presidentielles/presidentielle-francis-lalanne-lance-sa-campagne-samedi-avec-un-premier-meeting-20260819"
  },
  {
    id: "lindependant-glucksmann-2026", category: "Candidature", name: "Officialisation attendue de Raphaël Glucksmann",
    publisher: "L’Indépendant", type: "reference-media", publishedAt: "2026-08-19", verifiedAt: "2026-08-21",
    description: "Annonce pressentie au 20 Heures de TF1 le 23 août, avec primaire du pôle socialiste",
    url: "https://www.lindependant.fr/2026/08/19/presidentielle-2027-cest-la-fin-dun-vrai-faux-suspense-raphael-glucksmann-devrait-annoncer-officiellement-sa-candidature-sur-tf1-dans-les-prochains-13514345.php"
  },
  {
    id: "franceinfo-glucksmann-2026", category: "Candidature", name: "Candidature de Raphaël Glucksmann",
    publisher: "franceinfo", type: "reference-media", publishedAt: "2026-08-23", verifiedAt: "2026-08-26",
    description: "Officialisation au 20 Heures de TF1, participation à la primaire et premières propositions",
    url: "https://www.franceinfo.fr/elections/presidentielle/le-cofondateur-de-place-publique-raphael-glucksmann-officialise-sa-candidature-a-l-election-presidentielle-pour-relever-la-france_8158841.html"
  },
  {
    id: "tf1-glucksmann-2026", category: "Candidature", name: "Interview TF1 — Raphaël Glucksmann",
    publisher: "TF1 Info", type: "reference-media", publishedAt: "2026-08-23", verifiedAt: "2026-08-26",
    description: "Déclaration de candidature, primaire d’octobre et rupture annoncée avec LFI en cas de victoire",
    url: "https://www.tf1info.fr/politique/oui-je-suis-candidat-a-l-election-presidentielle-2027-confirme-raphael-glucksmann-place-publique-sur-tf1-2459966.html"
  },
  {
    id: "lcp-glucksmann-2026", category: "Candidature", name: "LCP — candidature de Raphaël Glucksmann",
    publisher: "LCP", type: "reference-media", publishedAt: "2026-08-23", verifiedAt: "2026-08-26",
    description: "Officialisation et participation à la primaire sociale-démocrate d’octobre",
    url: "https://lcp.fr/actualites/presidentielle-2027-raphael-glucksmann-officialise-sa-candidature-et-participera-a-la"
  },
  {
    id: "franceinfo-jadot-glucksmann-2026", category: "Alliances", name: "Soutien de Yannick Jadot à Raphaël Glucksmann",
    publisher: "franceinfo", type: "reference-media", publishedAt: "2026-08-24", verifiedAt: "2026-08-26",
    description: "Ralliement annoncé sur France Inter et rôle sur un « état d’urgence écologique »",
    url: "https://www.franceinfo.fr/elections/presidentielle/presidentielle-2027-le-senateur-ecologiste-yannick-jadot-soutient-raphael-glucksmann-sans-hesitation-estimant-qu-il-peut-gagner-cette-election_8159192.html"
  },
  {
    id: "franceinfo-ps-primary-modalities-2026", category: "Primaires", name: "Modalités de la primaire PS–Place publique",
    publisher: "franceinfo", type: "reference-media", publishedAt: "2026-08-25", verifiedAt: "2026-08-26",
    description: "Ratification de l’accord : deux tours les 9-10 et 16-17 octobre, scrutin électronique, cotisation 15 euros",
    url: "https://www.franceinfo.fr/politique/ps/le-parti-socialiste-valide-l-accord-sur-les-modalites-de-la-primaire-a-laquelle-participera-raphael-glucksmann_8161388.html"
  },
  {
    id: "lemonde-maurel-grs-2026", category: "Primaires", name: "Participation de la GRS à la primaire",
    publisher: "Le Monde", type: "reference-media", publishedAt: "2026-08-26", verifiedAt: "2026-08-26",
    description: "Annonce de la Gauche républicaine et socialiste ; candidat éventuel après le campus d’été du PS",
    url: "https://www.lemonde.fr/politique/article/2026/08/26/presidentielle-2027-le-parti-du-depute-emmanuel-maurel-participera-a-la-primaire-du-ps-et-de-place-publique_6757377_823448.html"
  },
  {
    id: "harris-august-2026", category: "Opinion", name: "Toluna Harris Interactive — août 2026",
    publisher: "Toluna Harris Interactive", type: "poll", publishedAt: "2026-08-24", verifiedAt: "2026-08-26", featured: true,
    description: "Baromètre M6/RTL : terrains des 18-19 août, 1 764 inscrits, cinq hypothèses de premier tour",
    url: "https://tolunacorporate.com/wp-content/uploads/2026/08/Rapport-Toluna-Barometre-Presidentielle-2027-Vague-4-M6-RTL-Aout-2026.pdf"
  },
  {
    id: "lcp-philippe-mayotte-2026", category: "Propositions", name: "Propositions d’Édouard Philippe pour Mayotte",
    publisher: "LCP", type: "reference-media", publishedAt: "2026-08-20", verifiedAt: "2026-08-21",
    description: "Suspension de l’asile, du droit du sol et de l’immigration familiale à Mayotte pendant le quinquennat",
    url: "https://lcp.fr/actualites/mayotte-pour-edouard-philippe-l-urgence-est-de-fermer-les-vannes-de-l-immigration-440519"
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
  },
  {
    id: "franceinfo-ref-debate-2026", category: "Campagne", name: "Premier débat REF — ce qu’il faut retenir",
    publisher: "franceinfo", type: "reference-media", publishedAt: "2026-08-27", updatedAt: "2026-08-28", verifiedAt: "2026-08-29", featured: true,
    description: "Compte rendu du débat Medef du 27 août : dette, retraites, réindustrialisation, coût du travail, normes et fiscalité",
    url: "https://www.franceinfo.fr/elections/presidentielle/dette-publique-retraites-reindustrialisation-ce-qu-il-faut-retenir-du-premier-debat-des-principaux-candidats-a-la-presidentielle_8165342.html"
  },
  {
    id: "lefigaro-lepen-125bn-2026", category: "Proposition", name: "Plan d’économies de 125 Md€ annoncé par Marine Le Pen",
    publisher: "Le Figaro", type: "reference-media", publishedAt: "2026-08-27", verifiedAt: "2026-08-29",
    description: "Annonce faite au débat Medef d’une trajectoire de 125 milliards d’euros d’économies avant le débat budgétaire",
    url: "https://www.lefigaro.fr/elections/presidentielles/presidentielle-2027-marine-le-pen-presentera-un-plan-d-economies-de-125-milliards-d-euros-avant-le-debat-budgetaire-20260827"
  },
  {
    id: "affiches-ref-debate-2026", category: "Campagne", name: "Synthèse Affiches Parisiennes du débat REF",
    publisher: "Affiches Parisiennes", type: "reference-media", publishedAt: "2026-08-27", verifiedAt: "2026-08-29",
    description: "Points retenus sur dette, retraites, normes, coût du travail et pacte Dutreil",
    url: "https://mesinfos.fr/75000-paris/presidentielle-2027-que-retenir-du-debat-organise-par-le-medef-a-laref-2026-337765.html"
  },
  {
    id: "elabe-august-2026", category: "Opinion", name: "Elabe — août 2026",
    publisher: "Elabe", type: "poll", publishedAt: "2026-08-29", verifiedAt: "2026-09-01", featured: true,
    description: "Rapport complet BFMTV / La Tribune Dimanche ; terrain 26–28 août, 1 378 inscrits",
    url: "https://elabe.fr/fichier-pdf/13224-les-francais-et-lelection-presidentielle-2027/"
  },
  {
    id: "franceinfo-faure-2026", category: "Candidature", name: "Candidature d’Olivier Faure à la primaire",
    publisher: "franceinfo", type: "reference-media", publishedAt: "2026-08-30", verifiedAt: "2026-09-01",
    description: "Annonce au 20 Heures de TF1 de la candidature du premier secrétaire du PS à la primaire sociale-démocrate",
    url: "https://www.franceinfo.fr/elections/presidentielle/le-chef-du-parti-socialiste-olivier-faure-confirme-sa-candidature-a-la-primaire-de-son-camp-en-vue-de-l-election-presidentielle_8169896.html"
  },
  {
    id: "ouest-france-sens-2026", category: "Campagne", name: "Débat Hollande–Philippe à Sens",
    publisher: "Ouest-France", type: "reference-media", publishedAt: "2026-08-29", verifiedAt: "2026-09-01",
    description: "Compte rendu du débat du 29 août : redressement, fiscalité et positionnement face aux « extrêmes »",
    url: "https://www.ouest-france.fr/elections/presidentielle/debat-entre-edouard-philippe-et-francois-hollande-echanges-polices-les-extremes-cibles-ce-quil-faut-retenir-88e2dfba-a3cc-11f1-8465-547a0964275c"
  },
  {
    id: "lcp-sens-2026", category: "Campagne", name: "LCP — débat de Sens et union des démocrates",
    publisher: "LCP", type: "reference-media", publishedAt: "2026-08-29", verifiedAt: "2026-09-01",
    description: "Compte rendu de la journée de Sens et du débat Hollande–Philippe",
    url: "https://lcp.fr/actualites/presidentielle-2027-a-sens-la-necessite-d-une-union-des-democrates-face-aux-extremes-au"
  },
  {
    id: "franceinfo-primary-right-2026", category: "Campagne", name: "Primaire droite/centre : le refus de Philippe",
    publisher: "franceinfo", type: "reference-media", publishedAt: "2026-09-03", verifiedAt: "2026-09-03", featured: true,
    description: "Philippe refuse une primaire à Châlons ; Attal et Retailleau se disent ouverts ; pression de Wauquiez et Morin",
    url: "https://www.franceinfo.fr/elections/presidentielle/les-socialistes-la-font-bien-la-droite-et-le-centre-peuvent-ils-encore-organiser-une-primaire-pour-la-presidentielle-de-2027_8171882.html"
  },
  {
    id: "lacroix-school-2026", category: "Proposition", name: "Rentrée scolaire : propositions des candidats sur l’école",
    publisher: "La Croix", type: "reference-media", publishedAt: "2026-09-01", verifiedAt: "2026-09-03",
    description: "Tour d’horizon des mesures éducatives, dont le plan Glucksmann (salaires, effectifs, mixité du privé sous contrat)",
    url: "https://www.la-croix.com/politique/rentree-scolaire-ce-que-proposent-les-candidats-a-la-presidentielle-2027-pour-reformer-l-ecole-20260901"
  },
  {
    id: "nouvelobs-glucksmann-school-2026", category: "Proposition", name: "Glucksmann conditionne les subventions au privé sous contrat",
    publisher: "Le Nouvel Obs", type: "reference-media", publishedAt: "2026-09-01", updatedAt: "2026-09-02", verifiedAt: "2026-09-03",
    description: "Rentrée à Trilport : mixité sociale, revalorisation des enseignants et réduction des effectifs",
    url: "https://www.nouvelobs.com/politique/20260901.OBS117858/la-mixite-sociale-doit-etre-partout-raphael-glucksmann-propose-de-conditionner-les-subventions-aux-ecoles-privees-sous-contrat.html"
  },
  {
    id: "humanite-roussel-2026", category: "Candidature", name: "Université d’été PCF et calendrier Roussel",
    publisher: "L’Humanité", type: "reference-media", publishedAt: "2026-08-23", verifiedAt: "2026-09-03",
    description: "Calendrier d’une investiture communiste attendue après un vote militant le 6 septembre",
    url: "https://www.humanite.fr/politique/communisme/a-luniversite-dete-du-pcf-fabien-roussel-parie-sur-lelargissement-du-socle-electoral-de-la-gauche"
  },
  {
    id: "franceinfo-maurel-2026", category: "Candidature", name: "Candidature d’Emmanuel Maurel à la primaire",
    publisher: "franceinfo", type: "reference-media", publishedAt: "2026-09-04", verifiedAt: "2026-09-04", featured: true,
    description: "Annonce sur franceinfo de la candidature du député GRS à la primaire sociale-démocrate",
    url: "https://www.franceinfo.fr/politique/ps/primaire-socialiste/le-depute-emmanuel-maurel-annonce-sa-candidature-a-la-primaire-socialiste-pour-l-election-presidentielle_8176532.html"
  },
  {
    id: "lcp-roussel-vote-2026", category: "Candidature", name: "Vote PCF sur l’investiture Roussel",
    publisher: "LCP", type: "reference-media", publishedAt: "2026-09-03", verifiedAt: "2026-09-04",
    description: "Vote des adhérents du 3 au 6 septembre ; proclamation attendue dimanche soir sur TF1",
    url: "https://lcp.fr/actualites/presidentielle-fabien-roussel-bientot-candidat-malgre-les-attaques-de-lfi-440943"
  },
  {
    id: "ouest-france-zemmour-2026", category: "Candidature", name: "Zemmour annoncera sa candidature avant décembre",
    publisher: "Ouest-France", type: "reference-media", publishedAt: "2026-09-03", verifiedAt: "2026-09-04",
    description: "Déclaration à la foire de Châlons : annonce de candidature prévue avant décembre (AFP)",
    url: "https://www.ouest-france.fr/elections/presidentielle/presidentielle-2027-eric-zemmour-compte-annoncer-sa-candidature-avant-decembre-0d19995c-a7ad-11f1-8a27-1e0c4eb5e395"
  },
  {
    id: "bfmtv-zemmour-chalons-2026", category: "Campagne", name: "Zemmour à Châlons : référendum sur l’immigration",
    publisher: "BFMTV", type: "reference-media", publishedAt: "2026-09-03", verifiedAt: "2026-09-04",
    description: "Visite à la foire agricole de Châlons-en-Champagne et appel à un référendum sur l’immigration",
    url: "https://www.bfmtv.com/politique/video-en-visite-a-la-foire-agricole-de-chalons-en-champagne-eric-zemmour-president-du-parti-reconquete-souhaite-un-referendum-sur-l-immigration_VN-202609030636.html"
  },
  {
    id: "leparisien-lisnard-2026", category: "Candidature", name: "Lisnard et les 500 promesses de parrainages",
    publisher: "Le Parisien", type: "reference-media", publishedAt: "2026-09-02", verifiedAt: "2026-09-04",
    description: "Le maire de Cannes affirme avoir recueilli 500 formulaires de promesses, à confirmer en février",
    url: "https://www.leparisien.fr/elections/presidentielle/presidentielle-2027-le-maire-de-cannes-david-lisnard-assure-avoir-deja-recueilli-les-500-promesses-de-parrainages-02-09-2026-KXBG4QLUFJCAPPEKM3HCGIIHMA.php"
  },
  {
    id: "lefigaro-rn-parrainages-2026", category: "Campagne", name: "RN : plus de 400 parrainages selon Aliot",
    publisher: "Le Figaro", type: "reference-media", publishedAt: "2026-09-03", verifiedAt: "2026-09-04",
    description: "Louis Aliot (TF1) annonce plus de 400 engagements d’élus et critique la procédure des 500 signatures",
    url: "https://www.lefigaro.fr/elections/presidentielles/presidentielle-2027-le-rn-pas-inquiet-sur-sa-collecte-de-parrainages-mais-y-voit-une-mauvaise-procedure-20260903"
  },
  {
    id: "franceinfo-tondelier-2026", category: "Campagne", name: "Tondelier : « Personne ne gagnera seul »",
    publisher: "franceinfo", type: "reference-media", publishedAt: "2026-09-02", verifiedAt: "2026-09-04",
    description: "Appel renouvelé à l’union à gauche et annonce de rencontres avec « tout le monde » dans les semaines à venir",
    url: "https://www.franceinfo.fr/elections/presidentielle/personne-ne-gagnera-seul-la-presidentielle-2027-martele-marine-tondelier-qui-prevoit-de-rencontrer-tout-le-monde-a-gauche-dans-les-semaines-a-venir_8173526.html"
  },
  {
    id: "ipsos-sept-2026", category: "Opinion", name: "Ipsos bva-CESI · intentions de vote septembre 2026",
    publisher: "Ipsos bva", type: "poll", publishedAt: "2026-09-05", verifiedAt: "2026-09-07", featured: true,
    description: "Enquête pour Le Parisien (31 août–2 septembre, 1 500 inscrits) : six hypothèses de 1er tour ; Le Pen à 34–36 %",
    url: "https://www.ipsos.com/sites/default/files/ct/news/documents/2026-09/presidentielle-2027-intention-vote-ipsos-bva-cesi-le-parisien-09-26-rapport-complet.pdf"
  },
  {
    id: "lcp-roussel-candidacy-2026", category: "Candidature", name: "Roussel officialise sa candidature PCF",
    publisher: "LCP", type: "reference-media", publishedAt: "2026-09-06", verifiedAt: "2026-09-07", featured: true,
    description: "Vote militant à 72 % puis annonce au 20 Heures de TF1 ; candidature autonome du PCF",
    url: "https://lcp.fr/actualites/fabien-roussel-officiellement-candidat-du-pcf-a-l-election-presidentielle-de-2027-441389"
  },
  {
    id: "lefigaro-royal-parrainages-2026", category: "Primaires", name: "Royal affirme avoir ses parrainages",
    publisher: "Le Figaro", type: "reference-media", publishedAt: "2026-09-06", verifiedAt: "2026-09-07",
    description: "Sur LCI, Ségolène Royal annonce disposer des parrainages pour la primaire sociale-démocrate (AFP)",
    url: "https://www.lefigaro.fr/politique/primaire-socialiste-pour-la-presidentielle-2027-segolene-royal-annonce-avoir-obtenu-les-parrainages-necessaires-20260906"
  },
  {
    id: "franceinfo-verdier-2026", category: "Primaires", name: "Candidature de Fabien Verdier à la primaire",
    publisher: "franceinfo", type: "reference-media", publishedAt: "2026-09-03", verifiedAt: "2026-09-07",
    description: "Ancien maire de Châteaudun candidat pour porter la voix des « terroirs » et « sous-préfectures »",
    url: "https://www.franceinfo.fr/elections/presidentielle/l-ancien-maire-de-chateaudun-fabien-verdier-candidat-a-la-primaire-de-la-gauche-pour-porter-la-voix-des-sous-prefectures_8176064.html"
  },
  {
    id: "lcp-glucksmann-ruffin-2026", category: "Primaires", name: "Glucksmann ferme la porte à Ruffin",
    publisher: "LCP", type: "reference-media", publishedAt: "2026-09-08", verifiedAt: "2026-09-09", featured: true,
    description: "Refus d’élargir la primaire sociale-démocrate à François Ruffin ; rappel du vote des militants PS",
    url: "https://lcp.fr/actualites/on-ne-change-pas-les-regles-en-cours-de-jeu-glucksmann-ferme-la-porte-a-ruffin-et"
  },
  {
    id: "lemonde-glucksmann-ruffin-2026", category: "Primaires", name: "Glucksmann rejette une primaire élargie à Ruffin",
    publisher: "Le Monde", type: "reference-media", publishedAt: "2026-09-08", verifiedAt: "2026-09-09",
    description: "AFP / Le Monde : « on ne change pas les règles en cours de jeu » ; Ruffin dit oui à Faure",
    url: "https://www.lemonde.fr/politique/article/2026/09/08/presidentielle-2027-raphael-glucksmann-rejette-l-idee-d-une-primaire-elargie-a-francois-ruffin-estimant-qu-on-ne-change-pas-les-regles-en-cours-de-jeu_6768307_823448.html"
  },
  {
    id: "bfmtv-philippe-toussaint-2026", category: "Campagne", name: "Philippe propose un comité à la Toussaint",
    publisher: "BFMTV", type: "reference-media", publishedAt: "2026-09-08", verifiedAt: "2026-09-09", featured: true,
    description: "Invitation de la droite et du centre ; Retailleau refuse ; Philippe quitte la présidence d’Horizons le 1er octobre",
    url: "https://www.bfmtv.com/politique/elections/presidentielle/direct-presidentielle-2027-gabriel-attal-lance-son-operation-1-000-bistrots-pour-aller-a-la-rencontre-des-francais-premier-comite-de-campagne-des-soutiens-d-edouard-philippe-a-paris_LN-202609080118.html"
  },
  {
    id: "lefigaro-philippe-retailleau-2026", category: "Campagne", name: "Philippe tend la main, Retailleau refuse",
    publisher: "Le Figaro", type: "reference-media", publishedAt: "2026-09-09", verifiedAt: "2026-09-09",
    description: "Main tendue vers un comité début novembre ; Retailleau décline une « réunion pour les macronistes »",
    url: "https://www.lefigaro.fr/elections/presidentielles/en-direct-presidentielle-2027-edouard-philippe-tend-la-main-a-la-droite-et-au-centre-bruno-retailleau-la-refuse-20260909"
  }
];

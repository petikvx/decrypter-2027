window.DECRYPTER_2027 = window.DECRYPTER_2027 || {};

window.DECRYPTER_2027.polls = [
  { name: "Bardella", value: 36, label: "33,5–36 %", color: "#293d64" },
  { name: "Le Pen", value: 32, label: "31–32 %", color: "#3f5074" },
  { name: "Philippe", value: 19, label: "13–19 %", color: "#4a7795" },
  { name: "Attal", value: 17.5, label: "8,5–17,5 %", color: "#8066a6" },
  { name: "Glucksmann", value: 14, label: "11–14 %", color: "#d45d69" },
  { name: "Mélenchon", value: 13.5, label: "13–13,5 %", color: "#bd493b" },
  { name: "Retailleau", value: 10, label: "7,5–10 %", color: "#305d8c" }
];

// Série strictement limitée à une même hypothèse de premier tour publiée par
// l'Ifop : Édouard Philippe pour le bloc central et Marine Le Pen pour le RN.
window.DECRYPTER_2027.pollHistory = {
  sourceId: "ifop-july-2026",
  scenario: "Hypothèse Édouard Philippe et Marine Le Pen",
  dates: [
    { label: "Sept. 2025", fieldwork: "24–25 sept. 2025", sample: 1127 },
    { label: "Févr. 2026", fieldwork: "26–27 févr. 2026", sample: 1393 },
    { label: "Mai 2026", fieldwork: "26–28 mai 2026", sample: 1368 },
    { label: "Juin 2026", fieldwork: "22–24 juin 2026", sample: 1415 },
    { label: "Juil. 2026", fieldwork: "7–8 juil. 2026", sample: 984 }
  ],
  series: [
    { name: "Marine Le Pen", shortName: "Le Pen", color: "#293d64", values: [33, 34, 33, 32, 36] },
    { name: "Édouard Philippe", shortName: "Philippe", color: "#4a7795", values: [16, 16, 19, 20, 19] },
    { name: "Jean-Luc Mélenchon", shortName: "Mélenchon", color: "#bd493b", values: [12, 10, 13, 12, 15] },
    { name: "Raphaël Glucksmann", shortName: "Glucksmann", color: "#d45d69", values: [15, 11, 11, 9, 9] },
    { name: "Bruno Retailleau", shortName: "Retailleau", color: "#305d8c", values: [9, 11, 9, 11, 8] },
    { name: "Éric Zemmour", shortName: "Zemmour", color: "#625467", values: [4, 4, 4, 6, 4] }
  ]
};

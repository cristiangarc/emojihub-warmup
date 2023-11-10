const data = [
  {
    name: "grinning face",
    category: "smileys and people",
    group: "face positive",
    htmlCode: ["&#128512;"],
    unicode: ["U+1F600"],
  },
  {
    name: "grinning face with smiling eyes",
    category: "smileys and people",
    group: "face positive",
    htmlCode: ["&#128513;"],
    unicode: ["U+1F601"],
  },
  {
    name: "face with tears of joy",
    category: "smileys and people",
    group: "face positive",
    htmlCode: ["&#128514;"],
    unicode: ["U+1F602"],
  },
  {
    name: "rolling on the floor laughing",
    category: "smileys and people",
    group: "face positive",
    htmlCode: ["&#129315;"],
    unicode: ["U+1F923"],
  },
  {
    name: "face with stuck-out tongue and tightly-closed eyes ≊ face with stuck-out tongue ",
    category: "smileys and people",
    group: "face neutral",
    htmlCode: ["&#128541;"],
    unicode: ["U+1F61D"],
  },
  {
    name: "drooling face",
    category: "smileys and people",
    group: "face neutral",
    htmlCode: ["&#129316;"],
    unicode: ["U+1F924"],
  },
  {
    name: "pensive face",
    category: "smileys and people",
    group: "face neutral",
    htmlCode: ["&#128532;"],
    unicode: ["U+1F614"],
  },
  {
    name: "upside-down face",
    category: "smileys and people",
    group: "face neutral",
    htmlCode: ["&#128579;"],
    unicode: ["U+1F643"],
  },
  {
    name: "money-mouth face",
    category: "smileys and people",
    group: "face neutral",
    htmlCode: ["&#129297;"],
    unicode: ["U+1F911"],
  },
];

function run() {
  const main = document.querySelector("main");

  data.forEach((em) => {
    const emCode = em.htmlCode[0];
    const newSpan = document.createElement("span");
    newSpan.innerHTML = `<h2>${emCode}</h2>`;
    console.log(newSpan);
    main.append(newSpan);
  })
}

run();

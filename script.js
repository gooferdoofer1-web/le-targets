const randomizeCase = str => [...str].map(x => Math.random() > 0.5 ? x.toUpperCase() : x.toLowerCase()).join("");
const origTitle = document.title;
setInterval(() => {
  document.title = randomizeCase(origTitle);
}, 1000 / 5)

// const fs = require('fs');

function analyzeText() {
  createFrequencyDictionary();
}

function createFrequencyDictionary() {
  let textEl = document.querySelector("#bio-text");
  let text = textEl.getAttribute("raw-text");
  console.log(text.slice(0, 30));
}

document.ondblclick = async () => {
  let sel =
    (document.selection && document.selection.createRange().text) ||
    (window.getSelection && window.getSelection().toString());

  let url =
    "https://dictionaryapi.com/api/v3/references/collegiate/json/" +
    sel +
    "?key=bf700303-1f77-4482-b590-d32e5ab5bf9a";
  let response = await fetch(url);
  let json = await response.json();

  console.log(json);
  let def = json[0].def[0].sseq[0][0][1].dt[0][1];
  console.log(def);

  if (def) alert(sel + ": " + def);
  else alert("No definition found for " + sel);
};


const showBiography = el => {
  console.log(el);
  document.querySelector("#story-1").style.setProperty("opacity", "0");
  document.querySelector("#story-1").style.setProperty("z-index", "-1");
  document.querySelector("#bio-text").style.setProperty("opacity", "1");
  document.querySelector("#bio-text").style.setProperty("z-index", "1");
}

const showShortStories = el => {
  console.log(el);
  document.querySelector("#bio-text").style.setProperty("opacity", "0");
  document.querySelector("#bio-text").style.setProperty("z-index", "-1");
  document.querySelector("#story-1").style.setProperty("opacity", "1");
  document.querySelector("#story-1").style.setProperty("z-index", "1");
}

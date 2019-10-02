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

//   alert(sel);
};

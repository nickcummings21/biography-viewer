async function search() {
  const searchTerms = document.querySelector(".search-input").value;
  if (searchTerms == "") return;

  const modal = document.querySelector(".modal");
  const background = document.querySelector(".background");

  modal.childNodes[1].innerHTML = 'Search terms: "' + searchTerms + '"';

  const formatSearchTerms = searchTerms.split(" ").join("_");
  const url =
    "https://en.wikipedia.org/api/rest_v1/page/summary/" + formatSearchTerms;
  console.log(url);
  const res = await fetch(url, {});
  const data = await res.json();
  console.log(data);

  const pageUrl = data.content_urls.desktop.page;
  const link = "See <a href='" + pageUrl + "' target='_blank'>here</a> for more information.";
  const content = data.extract == "" ? "No extract found." : data.extract;
  modal.childNodes[3].innerHTML = content + "<br><br>" + link;

  background.style.display = "flex";
  background.onclick = () => (background.style.display = "none");
}

const freqDict = {};

function analyzeText() {
  createFrequencyDictionary();

  document.querySelector(".main").onclick = event => {
    // console.log("Click", event);
    let defPopup = document.querySelector(".def-popup");
    if (defPopup) {
      defPopup.parentNode.removeChild(defPopup);
    }
  };
}

function createFrequencyDictionary() {
  let textEl = document.querySelector("#bio-text");
  let text = textEl.getAttribute("raw-text");
  // console.log(text.slice(0, 30));
  let textWords = text
    .replace(/[.,\/#!$%&;:()\"\n]/g, " ")
    .replace(/\s{2,}/g, " ")
    .toLowerCase()
    .split(" ");
  for (let i = 0; i < textWords.length; i++) {
    if (freqDict[textWords[i]] != undefined) {
      freqDict[textWords[i]] += 1;
    } else {
      freqDict[textWords[i]] = 1;
    }
  }
  console.log(freqDict);
}

// document.querySelectorAll("*").forEach(el => {
//   el.ondblclick = event => {
//     console.log("Click", event);
//   };
// });

document.ondblclick = async event => {
  // console.log(event);

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

  let popup = document.createElement("div");
  popup.classList.add("def-popup");
  popup.innerHTML = `
  <div class="def-popup-title">Definition: ${sel}</div>
  <div class="def-popup-content">${def}</div>
  `;
  popup.style.top = event.offsetY + 20 + "px";
  popup.style.left = event.offsetX - 24 + "px";
  event.path[0].style.position = "relative";
  event.path[0].appendChild(popup);

  // if (def) alert(sel + ": " + def);
  // else alert("No definition found for " + sel);
};

const showBiography = el => {
  console.log(el);
  document.querySelector("#story-1").style.setProperty("opacity", "0");
  document.querySelector("#story-1").style.setProperty("z-index", "-1");
  document.querySelector("#bio-text").style.setProperty("opacity", "1");
  document.querySelector("#bio-text").style.setProperty("z-index", "1");
};

const showShortStories = el => {
  console.log(el);
  document.querySelector("#bio-text").style.setProperty("opacity", "0");
  document.querySelector("#bio-text").style.setProperty("z-index", "-1");
  document.querySelector("#story-1").style.setProperty("opacity", "1");
  document.querySelector("#story-1").style.setProperty("z-index", "1");
};

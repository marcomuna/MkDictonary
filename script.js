let btn = document.querySelector(".btn");
let heading = document.querySelector("h1");
let input = document.querySelector("#input");
let dataBox = document.querySelector(".data");
let audioBtn = document.querySelector(".audioBtn");
let audio = document.querySelector(".audio");

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

let data;
let audioUrl;

async function searchWord() {
  let res = await fetch(url + input.value);
  let datas = await res.json();
  data = datas[0];
}

btn.addEventListener("click", Search);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    Search();
  }
});

async function Search() {
  await searchWord();

  let meaning = data.meanings[0];

  for (let i = 0; i < data.phonetics.length; i++) {
    audioUrl = data.phonetics[i].audio;
    console.log(audioUrl);
  }
  // audioUrl = data.phonetics[0].audio || data.phonetics[1].audio;
  let definitation1 = meaning.definitions[0].definition;
  let definitation2 = meaning.definitions[1].definition;
  let definitation3 = meaning.definitions[2].definition;

  console.log(data);
  console.log(meaning);
  document.querySelector("h2").innerText = input.value.toUpperCase();
  document.querySelector(".p1").innerText = `1.  ${definitation1}`;
  document.querySelector(".p2").innerText = `2.  ${definitation2}`;
  document.querySelector(".p3").innerText = `3.  ${definitation3}`;
  dataBox.style.visibility = "visible";
  audioBtn.style.visibility = "visible";

  input.value = "";
}

audioBtn.addEventListener("click", () => {
  audio.setAttribute("src", audioUrl);
  audio.play();
  console.log(audioUrl);
});

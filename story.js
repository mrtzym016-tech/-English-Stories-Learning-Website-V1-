/* =========================
LOAD STORY
========================= */

const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get("id"));

let story = stories.find(s => s.id === id);

let page = 0;

if(story){
document.getElementById("storyTitle").innerText = story.title;
renderPage();
}

/* =========================
RENDER PAGE
========================= */

function renderPage(){

if(!story) return;

const container = document.getElementById("storyContent");

let p = story.english[page];
let a = story.arabic[page];

container.innerHTML = `

<p class="eng">${p}</p>
<p class="ar">${a}</p>

`;

saveProgress();
}

/* =========================
NAVIGATION
========================= */

function nextPage(){

if(page < story.english.length - 1){
page++;
renderPage();
}

}

function prevPage(){

if(page > 0){
page--;
renderPage();
}

}

/* =========================
SAVE LAST POSITION
========================= */

function saveProgress(){

localStorage.setItem("lastStory", story.id);
localStorage.setItem("lastPage", page);

}

/* =========================
SPEECH (IMPROVED)
========================= */

function speakStory(){

if(!story) return;

const text = story.english[page];

let speech = new SpeechSynthesisUtterance(text);

speech.lang = "en-US";
speech.rate = 0.9;
speech.pitch = 1;

let voices = window.speechSynthesis.getVoices();
let voice = voices.find(v => v.lang.includes("en"));

if(voice) speech.voice = voice;

window.speechSynthesis.cancel();
window.speechSynthesis.speak(speech);

}

function stopSpeech(){
window.speechSynthesis.cancel();
}

/* =========================
AUTO RESTORE LAST PAGE
========================= */

window.onload = function(){

let savedPage = localStorage.getItem("lastPage");

if(savedPage){
page = parseInt(savedPage);
renderPage();
}

};

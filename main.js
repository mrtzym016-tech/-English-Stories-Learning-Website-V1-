/* =========================
STORIES DATA
========================= */

const stories = [
{
id: 1,
title: "The Lost Boy",
english: "Once there was a boy who got lost in the forest. He was scared but kept walking forward.",
arabic: "كان هناك فتى ضائع في الغابة. كان خائفًا لكنه استمر في المشي للأمام."
},

{
id: 2,
title: "A New Friend",
english: "Ali moved to a new school. He felt lonely at first but soon made a new friend.",
arabic: "انتقل علي إلى مدرسة جديدة. شعر بالوحدة في البداية لكنه سرعان ما كوّن صديقًا جديدًا."
},

{
id: 3,
title: "The Brave Girl",
english: "A girl saved a small dog from the rain and took it home to care for it.",
arabic: "أنقذت فتاة كلبًا صغيرًا من المطر وأخذته إلى المنزل للاعتناء به."
}
];

/* =========================
INDEX PAGE RENDER
========================= */

if (document.getElementById("storyContainer")) {

const container = document.getElementById("storyContainer");
const search = document.getElementById("searchInput");

function render() {

container.innerHTML = "";

stories
.filter(s => s.title.toLowerCase().includes(search.value.toLowerCase()))
.forEach(s => {

container.innerHTML += `
<div class="card">
<h3>${s.title}</h3>
<p>${s.english.slice(0, 80)}...</p>

<a href="story.html?id=${s.id}">
📖 Read Story
</a>
</div>
`;
});
}

search.addEventListener("input", render);
render();
}

/* =========================
STORY PAGE LOAD
========================= */

if (document.getElementById("storyTitle")) {

const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get("id"));

const story = stories.find(s => s.id === id);

if (story) {
document.getElementById("storyTitle").innerText = story.title;
document.getElementById("englishText").innerText = story.english;
document.getElementById("arabicText").innerText = story.arabic;
}

/* =========================
TEXT TO SPEECH
========================= */

window.speakStory = function () {
const text = story.english;
const speech = new SpeechSynthesisUtterance(text);
speech.lang = "en-US";
speech.rate = 0.9;
window.speechSynthesis.speak(speech);
};

window.stopSpeech = function () {
window.speechSynthesis.cancel();
};
}

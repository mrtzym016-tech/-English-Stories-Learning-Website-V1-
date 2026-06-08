/* =========================
STORIES (LONG + IMAGES)
========================= */

const stories = [
{
id: 1,
title: "The Lost Journey",
english: [
"Once upon a time, there was a young boy named Adam who lived in a small village near the mountains.",
"One day, he decided to explore the forest alone, even though his parents warned him not to go too far.",
"The forest was deep, quiet, and full of strange sounds that made him nervous but curious at the same time.",
"He kept walking until he realized he was completely lost and could no longer see the path back home."
],
arabic: [
"في قديم الزمان كان هناك فتى اسمه آدم يعيش في قرية صغيرة قرب الجبال.",
"في يوم من الأيام قرر استكشاف الغابة وحده رغم تحذير والديه.",
"كانت الغابة عميقة وهادئة ومليئة بأصوات غريبة جعلته خائفًا ومتحمسًا في نفس الوقت.",
"استمر في المشي حتى أدرك أنه ضائع تمامًا ولا يستطيع العودة."
],
images: [
"https://images.unsplash.com/photo-1501785888041-af3ef285b470",
"https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
]
},

{
id: 2,
title: "The Silent Village",
english: [
"The village was known for being silent after sunset.",
"People believed strange stories about the old house at the end of the road.",
"A girl named Lina wanted to discover the truth behind these stories.",
"She entered the house with a flashlight and a brave heart."
],
arabic: [
"كانت القرية معروفة بالصمت بعد غروب الشمس.",
"كان الناس يروون قصصًا غريبة عن المنزل القديم في نهاية الطريق.",
"فتاة اسمها لينا أرادت معرفة الحقيقة وراء هذه القصص.",
"دخلت المنزل وهي تحمل مصباحًا وقلبًا شجاعًا."
],
images: [
"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
"https://images.unsplash.com/photo-1520975916090-3105956dac38"
]
}
];

/* =========================
PAGE SYSTEM
========================= */

let currentStory = null;
let page = 1;

/* =========================
LOAD STORY
========================= */

if (document.getElementById("storyTitle")) {

const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get("id"));

currentStory = stories.find(s => s.id === id);

renderPage();

/* NEXT PAGE */
window.nextPage = function () {
page = 2;
renderPage();
};

/* BACK PAGE */
window.prevPage = function () {
page = 1;
renderPage();
};
}

/* =========================
RENDER PAGE
========================= */

function renderPage() {

if (!currentStory) return;

document.getElementById("storyTitle").innerText =
currentStory.title;

let content = "";

if (page === 1) {

content += `<h2>English Story</h2>`;

currentStory.english.forEach((p, i) => {
content += `<p>${p}</p>`;

if (currentStory.images[i]) {
content += `<img src="${currentStory.images[i]}" class="storyImg">`;
}
});

content += `<button onclick="nextPage()">Next ➜</button>`;
}

else if (page === 2) {

content += `<h2>English + Arabic</h2>`;

currentStory.english.forEach((p, i) => {
content += `
<p><b>${p}</b></p>
<p style="color:#aaa">${currentStory.arabic[i]}</p>
`;

if (currentStory.images[i]) {
content += `<img src="${currentStory.images[i]}" class="storyImg">`;
}
});

content += `<button onclick="prevPage()">⬅ Back</button>`;
}

document.getElementById("storyContent").innerHTML = content;
}

/* =========================
IMPROVED SPEECH
========================= */

window.speakStory = function () {

if (!currentStory) return;

let text = currentStory.english.join(" ");

const speech = new SpeechSynthesisUtterance(text);

speech.lang = "en-US";
speech.rate = 0.85;
speech.pitch = 1;

// اختيار صوت أفضل إذا موجود
let voices = window.speechSynthesis.getVoices();
let enVoice = voices.find(v => v.lang.includes("en"));

if (enVoice) speech.voice = enVoice;

window.speechSynthesis.cancel();
window.speechSynthesis.speak(speech);
};

window.stopSpeech = function () {
window.speechSynthesis.cancel();
};

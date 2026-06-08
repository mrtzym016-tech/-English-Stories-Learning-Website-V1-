/* =========================
STORIES DATA
========================= */

const stories = [
{
id: 1,
title: "The Lost Journey",
level: "A1",
thumb: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
english: [
"Once upon a time, there was a young boy named Adam.",
"He lived in a small village near the mountains.",
"One day, he explored the forest alone.",
"He got lost in the deep forest."
],
arabic: [
"كان هناك فتى اسمه آدم.",
"كان يعيش في قرية صغيرة قرب الجبال.",
"في يوم من الأيام دخل الغابة وحده.",
"ضاع داخل الغابة."
]
},

{
id: 2,
title: "The Silent Village",
level: "A2",
thumb: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
english: [
"The village was silent after sunset.",
"People told strange stories about an old house.",
"A girl wanted to discover the truth.",
"She entered the house bravely."
],
arabic: [
"كانت القرية صامتة بعد الغروب.",
"كان الناس يروون قصص عن منزل قديم.",
"فتاة أرادت معرفة الحقيقة.",
"دخلت المنزل بشجاعة."
]
}
];

/* =========================
LOCAL STORAGE HELPERS
========================= */

function getFavorites(){
return JSON.parse(localStorage.getItem("favorites")) || [];
}

function saveFavorites(data){
localStorage.setItem("favorites", JSON.stringify(data));
}

function getCompleted(){
return JSON.parse(localStorage.getItem("completed")) || [];
}

/* =========================
FAVORITE
========================= */

function toggleFavorite(id){

let fav = getFavorites();

if(fav.includes(id)){
fav = fav.filter(x => x !== id);
} else {
fav.push(id);
}

saveFavorites(fav);
renderStories();
}

/* =========================
CONTINUE READING
========================= */

function saveLastStory(id){
localStorage.setItem("lastStory", id);
}

function renderContinue(){

const box = document.getElementById("continueReading");
if(!box) return;

const id = localStorage.getItem("lastStory");
if(!id) return;

const story = stories.find(s => s.id == id);
if(!story) return;

box.innerHTML = `
<div class="continueBox">
<h3>Continue Reading</h3>
<img src="${story.thumb}" class="continueThumb">
<a href="story.html?id=${story.id}">Continue</a>
</div>
`;
}

/* =========================
RENDER STORIES
========================= */

function renderStories(filter = ""){

const container = document.getElementById("storyContainer");
if(!container) return;

const level = document.getElementById("levelFilter")?.value || "All";
const fav = getFavorites();

container.innerHTML = "";

stories
.filter(s =>
(s.title.toLowerCase().includes(filter.toLowerCase())) &&
(level === "All" || s.level === level)
)
.forEach(story => {

container.innerHTML += `
<div class="card">

<img src="${story.thumb}" class="thumb">

<h3>${story.title}</h3>
<p>Level: ${story.level}</p>

<div class="actions">

<a href="story.html?id=${story.id}"
onclick="saveLastStory(${story.id})">
📖 Read
</a>

<button onclick="toggleFavorite(${story.id})">
${fav.includes(story.id) ? "❤️" : "🤍"}
</button>

</div>

</div>
`;
});

updateStats();
renderContinue();

}

/* =========================
STATS
========================= */

function updateStats(){

document.getElementById("storyCount").innerText = stories.length;
document.getElementById("favoriteCount").innerText = getFavorites().length;
document.getElementById("completedCount").innerText = getCompleted().length;

}

/* =========================
INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {

renderStories();

document.getElementById("searchInput")
.addEventListener("input", e => renderStories(e.target.value));

document.getElementById("levelFilter")
.addEventListener("change", () => renderStories());

});

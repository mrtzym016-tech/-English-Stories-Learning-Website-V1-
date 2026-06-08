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
"Once upon a time, there was a young boy named Adam who lived in a small village near the mountains.",
"One day, he decided to explore the forest alone.",
"The forest was deep, quiet, and full of strange sounds.",
"He kept walking until he realized he was completely lost."
],
arabic: [
"في قديم الزمان كان هناك فتى اسمه آدم يعيش في قرية صغيرة قرب الجبال.",
"في يوم من الأيام قرر استكشاف الغابة وحده.",
"كانت الغابة عميقة وهادئة ومليئة بأصوات غريبة.",
"استمر في المشي حتى أدرك أنه ضائع تمامًا."
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
"كان الناس يروون قصصًا غريبة عن منزل قديم.",
"فتاة أرادت اكتشاف الحقيقة.",
"دخلت المنزل بشجاعة."
]
}
];

/* =========================
RENDER SYSTEM (FIXED)
========================= */

function renderStories() {

const container = document.getElementById("storyContainer");
if (!container) return;

const search = document.getElementById("searchInput").value.toLowerCase();
const level = document.getElementById("levelFilter").value;

container.innerHTML = "";

stories
.filter(story => {

const matchSearch = story.title.toLowerCase().includes(search);
const matchLevel = level === "All" || story.level === level;

return matchSearch && matchLevel;

})
.forEach(story => {

container.innerHTML += `
<div class="card">

<img src="${story.thumb}" class="thumb">

<h3>${story.title}</h3>

<p>Level: ${story.level}</p>

<a href="story.html?id=${story.id}">
📖 Read Story
</a>

</div>
`;
});

}

/* =========================
INIT (SAFE + CLEAN)
========================= */

document.addEventListener("DOMContentLoaded", () => {

renderStories();

document.getElementById("searchInput")
.addEventListener("input", renderStories);

document.getElementById("levelFilter")
.addEventListener("change", renderStories);

});

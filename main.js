/* =========================
STORIES DATA
========================= */

const stories = [
{
id: 1,
title: "The Lost Journey",
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
RENDER STORIES LIST (FIXED)
========================= */

function renderStories(filter = "") {

const container = document.getElementById("storyContainer");

if (!container) return;

container.innerHTML = "";

stories
.filter(s => s.title.toLowerCase().includes(filter.toLowerCase()))
.forEach(story => {

container.innerHTML += `
<div class="card">

<img src="${story.thumb}" class="thumb">

<h3>${story.title}</h3>

<a href="story.html?id=${story.id}">
📖 Read Story
</a>

</div>
`;
});

}

/* =========================
SEARCH FIX
========================= */

document.addEventListener("DOMContentLoaded", () => {

renderStories();

const search = document.getElementById("searchInput");

if (search) {
search.addEventListener("input", (e) => {
renderStories(e.target.value);
});
}

});

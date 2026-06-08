/* =========================
STORIES DATA
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
RENDER STORIES LIST
========================= */

function renderStories(filter = "") {

const container = document.getElementById("storyContainer");

container.innerHTML = "";

stories
.filter(s =>
s.title.toLowerCase().includes(filter.toLowerCase())
)
.forEach(story => {

container.innerHTML += `
<div class="card">

<h3>${story.title}</h3>

<img src="${story.images[0]}" style="width:100%;border-radius:10px;margin-top:10px;">

<a href="story.html?id=${story.id}">
📖 Read Story
</a>

</div>
`;
});

}

/* =========================
SEARCH
========================= */

document.getElementById("searchInput")
.addEventListener("input", (e) => {
renderStories(e.target.value);
});

/* =========================
INIT
========================= */

renderStories();

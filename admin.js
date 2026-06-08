let pageCount = 0;

function addPage(){

pageCount++;

const container =
document.getElementById("pagesContainer");

container.innerHTML += `

<div class="pageBox">

<h3>Page ${pageCount}</h3>

<textarea
id="en${pageCount}"
placeholder="English Text">
</textarea>

<textarea
id="ar${pageCount}"
placeholder="Arabic Translation">
</textarea>

<input
id="img${pageCount}"
placeholder="Image URL">

</div>

`;

}

function saveStory(){

const title =
document.getElementById("storyTitle").value;

const level =
document.getElementById("storyLevel").value;

const thumbnail =
document.getElementById("storyThumb").value;

const voice =
document.getElementById("storyVoice").value;

let pages = [];

for(let i=1;i<=pageCount;i++){

const english =
document.getElementById(`en${i}`).value;

const arabic =
document.getElementById(`ar${i}`).value;

const image =
document.getElementById(`img${i}`).value;

pages.push({

english,
arabic,
image,

words:[]
});

}

const storiesData =
JSON.parse(
localStorage.getItem("stories")
)
||
stories;

storiesData.push({

id: Date.now(),

title,

level,

thumbnail,

cardColor:"#1a1a22",

textColor:"#ffffff",

voice,

pages

});

localStorage.setItem(
"stories",
JSON.stringify(storiesData)
);

alert("Story Saved");

location.reload();

}

addPage();

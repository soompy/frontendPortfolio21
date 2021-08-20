const tagWrap = document.querySelector('.floating-tag-wrap');

for (let i = 1; i < 15; i++) {
    const tagDiv = document.createElement("div");
    tagDiv.className = `tag tag_${i}`;
    tagWrap.appendChild(tagDiv);
    document.querySelector('.tag').innerText = getRandomName();
}

const bubbleWrap = document.querySelector('.company-audition');

for(let i = 1; i < 7; i++ ) {
    const buttonSpan = document.createElement("span")
    buttonSpan.className = `bubble bubble_${i}`;
    bubbleWrap.appendChild(buttonSpan);
}



function getRandomName() {
    var names = [
        'TWICE',
        'DAY6',
        'Stray kids',
        'J.Y. Park',
        '2PM',
        'Bernard Park',
        'Stray Kids',
        'BOY STORY',
        'ITZY',
        'NiziU',
    ];
    return names[Math.floor(Math.random() * names.length)];

}

// document.write( getRandomName() );

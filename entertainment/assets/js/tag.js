// const tagWrap = document.querySelector('.floating-tag-wrap');

// for (let i = 1; i < 15; i++) {
//     const tagDiv = document.createElement("div");
//     tagDiv.className = `tag tag_${i}`;
//     tagWrap.appendChild(tagDiv);
//     document.querySelector('.tag').innerText = getRandomName();
// }

const getRandomName = () => {
    const names = [
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

const tagWrap = document.querySelector('.floating-tag-wrap');

Array.from({ length: 15 }, (v, i) => {
    const tagDiv = document.createElement("div");
    tagDiv.className = `tag tag_${i}`;
    tagDiv.innerText = getRandomName();
    tagDiv.onanimationiteration = e => {
        console.log(e)
        tagDiv.innerText = `${ getRandomName() }_${e.elapsedTime}`
    }
    return tagDiv
}).forEach(tag => {
    tagWrap.appendChild(tag)
})



// document.write( getRandomName() );

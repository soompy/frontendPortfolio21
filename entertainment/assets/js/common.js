// 스크롤 시 헤더에 bg-header 클래스가 들어오도록 하기
let scrollpos = window.scrollY
const header = document.querySelector("header")
const header_height = header.offsetHeight

const add_class_on_scroll = () => header.classList.add("bg-header")
const remove_class_on_scroll = () => header.classList.remove("bg-header")

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;

    if (scrollpos > header_height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

    console.log(scrollpos)
})

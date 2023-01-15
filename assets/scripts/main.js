const navBtn = document.querySelector(".nav-btn")
const mobileNav = document.querySelector(".mobile-nav")
const cover = document.querySelector(".cover")
let navOpen = false

navBtn.addEventListener("click", function () {
    if (navOpen) {
        navBtn.classList.remove("nav-btn--open")
        mobileNav.classList.remove("mobile-nav--open")
        cover.classList.remove("cover--show")
        navOpen = false
    } else {
        navBtn.classList.add("nav-btn--open")
        mobileNav.classList.add("mobile-nav--open")
        cover.classList.add("cover--show")
        navOpen = true
    }
})
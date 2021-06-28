const headerMenu = document.querySelector(".header-row");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > headerMenu.clientHeight) {
        headerMenu.style.background = "black"
    } else {
        headerMenu.style.background = "none"
    }
})
"use strict"
const header = document.querySelector("#header")
const navIco = document.querySelector("#header .nav-ico")
const navUl = document.querySelector("#header ul")


navIco.addEventListener("click", function () {
    navUl.classList.toggle("orxan")

})


// window.addEventListener("scroll", function () {

//     if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
//         header.classList.add("active")
//     } else {
//         header.classList.remove("active")

//     }

// })



window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

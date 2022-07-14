const navEl = document.querySelector('.navbar')
const navToggleEl = document.querySelector('.nav-toggle')
const navLinksEl = document.querySelector('.nav-links')

navToggleEl.addEventListener('click',() =>{
    navToggleEl.classList.toggle('rotate')
    navToggleEl.classList.toggle('black')
    navLinksEl.classList.toggle('show-links')
    if(navEl.classList.contains('change')) {
        navEl.classList.remove('change')
    } else {
        navEl.classList.add('change')
    }

    if(navEl.classList.contains('scrolled')) {
        navEl.classList.remove('scrolled')
    } else {
        navEl.classList.add('scrolled')
    }
})

// button effect
const btnEl = document.querySelector(".btn");

btnEl.addEventListener('mouseover',(event)=>{
    const x = event.pageX - btnEl.offsetLeft;
    const y = event.pageY - btnEl.offsetTop;

    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
})


window.addEventListener('scroll', () => {
    if(navLinksEl.classList.contains('show-links')){
        navLinksEl.classList.remove('show-links')
        navToggleEl.classList.remove('rotate')
    }
    if(window.scrollY > 40) {
        navEl.classList.add('scrolled')
        navToggleEl.classList.add('black')
    } else {
        navToggleEl.classList.remove('black')
        navEl.classList.remove('scrolled')
    }
})

// get date 
const date = document.getElementById('date');
let year = new Date().getFullYear();
date.innerText = year;


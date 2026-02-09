/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// Servicios

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

const gap = 24;
let index = 0;

// 🔁 DUPLICAR SLIDES
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
});

const allSlides = Array.from(track.children);

function slideWidth() {
    return allSlides[0].getBoundingClientRect().width + gap;
}

function updatePosition() {
  track.style.transform = `translateX(-${index * slideWidth()}px)`;
}

nextButton.addEventListener('click', () => {
    index++;
    updatePosition();

    if (index >= slides.length) {
        setTimeout(() => {
        track.style.transition = 'none';
        index = 0;
        updatePosition();
        track.offsetHeight;
        track.style.transition = 'transform 0.4s ease';
        }, 400);
    }
});

prevButton.addEventListener('click', () => {
    if (index === 0) {
        track.style.transition = 'none';
        index = slides.length;
        updatePosition();
        track.offsetHeight;
        track.style.transition = 'transform 0.4s ease';
    }
    index--;
    updatePosition();
});

window.addEventListener('resize', updatePosition);

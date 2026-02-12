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

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 
        ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}

window.addEventListener('scroll', bgHeader)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*=====================SHOW SCROLL UP====================*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)
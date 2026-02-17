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

if (track) {

    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    const gap = 24;
    let index = 0;

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
}

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


/*=============== SLIDER PROYECTOS ===============*/

const projectsContainer = document.querySelector(".projects-container");
if (projectsContainer) {

    const projectsTrack = projectsContainer.querySelector(".projects-track");
    const nextBtnProjects = projectsContainer.querySelector(".project-next");
    const prevBtnProjects = projectsContainer.querySelector(".project-prev");

    const gapProjects = 60;
    const slidesProjects = Array.from(projectsTrack.children);

    let indexProjects = 0;

    // 🔁 DUPLICAR SLIDES
    slidesProjects.forEach(slide => {
        const clone = slide.cloneNode(true);
        projectsTrack.appendChild(clone);
    });

    const allSlidesProjects = Array.from(projectsTrack.children);

    function slideWidthProjects() {
        return allSlidesProjects[0].getBoundingClientRect().width + gapProjects;
    }

    function updatePositionProjects() {
        projectsTrack.style.transform =
        `translateX(-${indexProjects * slideWidthProjects()}px)`;
    }

    nextBtnProjects.addEventListener("click", () => {
        indexProjects++;
        updatePositionProjects();

        if (indexProjects >= slidesProjects.length) {
        setTimeout(() => {
            projectsTrack.style.transition = "none";
            indexProjects = 0;
            updatePositionProjects();
            projectsTrack.offsetHeight;
            projectsTrack.style.transition = "transform 0.6s ease";
        }, 600);
        }
    });

    prevBtnProjects.addEventListener("click", () => {

        if (indexProjects === 0) {
        projectsTrack.style.transition = "none";
        indexProjects = slidesProjects.length;
        updatePositionProjects();
        projectsTrack.offsetHeight;
        projectsTrack.style.transition = "transform 0.6s ease";
        }

        indexProjects--;
        updatePositionProjects();
    });

    window.addEventListener("resize", updatePositionProjects);

}
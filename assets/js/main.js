/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})



// function TITLE(){
//     let title=document.getElementById('TITLE')
// title.innerHtml=`<span>HE</span><br>LLO.`
// console.log(title);
// }
// TITLE();
var bodyStyles = document.body.style;
bodyStyles.setProperty('--first-color', '#5361FF');
document.querySelector('.themebtn').addEventListener('click',()=>{
     document.querySelector('.theme-change').classList.toggle('activethemebtn')
})
sr.reveal('.theme-change', {delay: 1000});

document.getElementById('yellow').addEventListener('click', ()=>{
    bodyStyles.setProperty('--first-color', '#FFD93D');
    document.getElementById('hero-image').innerHTML=`<img src="assets/img/profile-pic.png" alt="" class="home__img"> `


})
document.getElementById('blue').addEventListener('click', ()=>{
    bodyStyles.setProperty('--first-color', '#5361FF');
    document.getElementById('hero-image').innerHTML=`<img src="assets/img/profile.png" alt="" class="home__img"> `
})

document.getElementById('dark').addEventListener('click', ()=>{
    bodyStyles.setProperty('--first-color', '#1f2937');
    document.getElementById('hero-image').innerHTML=`<img src="assets/img/profile-pic (1).png" alt="" class="home__img"> `

})
document.getElementById('light').addEventListener('click', ()=>{
    bodyStyles.setProperty('--first-color', '#AAE3E2');
    document.getElementById('hero-image').innerHTML=`<img src="assets/img/profile1.png" alt="" class="home__img"> `

})
document.getElementById('orange').addEventListener('click', ()=>{
    bodyStyles.setProperty('--first-color', '#ff8900');
    document.getElementById('hero-image').innerHTML=`<img src="assets/img/profile-pic (4).png" alt="" class="home__img"> `

})
document.getElementById('pink').addEventListener('click', ()=>{
    bodyStyles.setProperty('--first-color', '#ca0331');
    document.getElementById('hero-image').innerHTML=`<img src="assets/img/profile.png" alt="" class="home__img"> `

})




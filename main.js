'use strict'

/* Make navbar transparent when it is on the top */
const navbar = document.querySelector('#navbar');// ID 가 navbar 인 테그를 선택
const navbarHeight = navbar.getBoundingClientRect().height; //위에 선택된 테그의 실질적 높이를 측정할 수 있음
document.addEventListener('scroll', () => {
    /* console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHeight}`); */

    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
})


/* Handle scrolling when tapping on the navbar menu */

const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click',(event) =>{
    
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    console.log(event.target.dataset.link);
    scrollIntoView(link);
});


/* Handle click on "contact me" button on home */
const homeContactBtn = document.querySelector('.home__contact');

homeContactBtn.addEventListener('click', () =>{

    const target = event.target;
    const link = target.dataset.link;
    console.log(event.target.dataset.link);
    scrollIntoView('#contact');
});


function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth'});
}
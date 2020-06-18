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
    // console.log(event.target.dataset.link);
    scrollIntoView(link);
});


/* Handle click on "contact me" button on home */
const homeContactBtn = document.querySelector('.home__contact');

homeContactBtn.addEventListener('click', () =>{

    /* const target = event.target;
    const link = target.dataset.link;
    console.log(event.target.dataset.link); */
    scrollIntoView('#contact');
});


/* Make home slowly fade to transparent as the window scrolls down */
const home = document.querySelector('.home__container'); //class 가 home__container 인 테그를 지정
const homeHeight = home.getBoundingClientRect().height; // home 의 높이를 측정할 수 있다.
document.addEventListener('scroll',() =>{
    // console.log(homeHeight);  //높이 확인
    // console.log(1 - window.scrollY / homeHeight);  // 만약 homeHeight(고정값)가 800이면 window 를 y축으로 스크롤 할때마다 값이 변한다. 1 - window.scrollY / homeHeight 가 1이면 불투명 0에 가까울 수록 투명해진다.
    home.style.opacity = 1 - window.scrollY / homeHeight;
})










function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth'});
}


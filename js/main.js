'use strict'


const hbgBtn = document.querySelector('.menuBtn');
const lines = document.querySelector('.menuBtn div');
const body = document.querySelector('.menu-body');
const html = document.querySelector('html');
const header = document.querySelector('header');

hbgBtn.addEventListener('click',()=>{
  lines.classList.toggle('active');
  body.classList.toggle('menu-body-ac');
  if(lines.innerHTML === 'Menu'){
    lines.innerHTML = 'Close'
    html.style.overflow = 'hidden'
  }
  else {lines.innerHTML = 'Menu'
        html.style.overflow = 'visible'}
});

const swiper = new Swiper('.swiper',{
  loop: true,
  speed: 3000,
  allowTouchMove: false,
  loopedSlides: 2,
  slidesPerView: "auto",
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});
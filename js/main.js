'use strict'


const hbgBtn = document.querySelector('.menuBtn');
const lines = document.querySelector('.menuBtn div');
const body = document.querySelector('.menu-body');

hbgBtn.addEventListener('click',()=>{
  lines.classList.toggle('active');
  body.classList.toggle('menu-body-ac')
  if(lines.innerHTML === 'Menu'){
    lines.innerHTML = 'Close'
  }
  else lines.innerHTML = 'Menu';
});

const swiper = new Swiper('.swiper',{
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 0,
  },
});
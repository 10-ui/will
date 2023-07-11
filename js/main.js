'use strict'


const hbgBtn = document.querySelector('.menuBtn');
const lines = document.querySelector('.lineChar');
const activeMenu = document.querySelector('.menu-list')


hbgBtn.addEventListener('click',()=>{
  lines.classList.toggle('active-hbg-line');
  activeMenu.classList.toggle('menu-list-active');
});
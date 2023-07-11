'use strict'


const hbgBtn = document.querySelector('.btn');
const lines = document.querySelector('.lines');
const onState = document.querySelector('.onState');
const offState = document.querySelector('.offState');
const activeMenu = document.querySelector('.menu-list')


hbgBtn.addEventListener('click',()=>{
  lines.classList.toggle('active-hbg-line');
  onState.classList.toggle('onState-active');
  offState.classList.toggle('offState-active');
  activeMenu.classList.toggle('menu-list-active');
});
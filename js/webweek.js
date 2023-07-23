'use strict'

const sleep = waitTime => new Promise( resolve => setTimeout(resolve, waitTime) );
const Menu = document.querySelector('.menu');
const curchar = document.querySelector('.current');
const list = document.querySelector('.weekList');
const current = document.querySelector('body').getAttribute('data-current');
const dayindex = document.querySelectorAll('.weekList li');
const Mon = document.querySelector('.mon');
const clas = document.querySelector('.class');

list.style.display = 'none'
let state = 0;

Menu.addEventListener('click',()=>{
  if (state===0){
    state = 1
    open();
  }
  else {
    state = 0
    close();
  }
});

async function open() {
  curchar.innerHTML = null;
  Menu.classList.add('open');
  await sleep(1000);
  list.style.display = 'block';
}

async function close() {
  curchar.innerHTML = current;
  Menu.classList.remove('open');
  list.style.display = 'none'
  await sleep(1000);
}

// gsap.to(Mon, {
//   opacity: 0,
//   y: 100,
//   duration: 2
// });
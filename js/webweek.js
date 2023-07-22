'use strict'

const sleep = waitTime => new Promise( resolve => setTimeout(resolve, waitTime) );
const Menu = document.querySelector('.menu');
const curchar = document.querySelector('.current');
const list = document.querySelector('.weekList');
const current = document.querySelector('body').getAttribute('data-current')

list.style.display = 'none'
let state = 0;

Menu.addEventListener('click',()=>{
  if (state===0){
    open();
    state = 1
  }
  else {
    close();
    state = 0
  }
});

async function open() {
  curchar.innerHTML = null;
  Menu.classList.add('open');
  await sleep(1000);
  list.style.display = 'block';
}

async function close() {
  Menu.classList.remove('open');
  list.style.display = 'none'
  await sleep(1000);
  curchar.innerHTML = current;
}
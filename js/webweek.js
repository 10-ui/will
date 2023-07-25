'use strict'

const sleep = waitTime => new Promise( resolve => setTimeout(resolve, waitTime) );
const Menu = document.querySelector('.menu');
const Close = document.querySelector('.close');
const curchar = document.querySelector('.current');
const list = document.querySelector('.weekList');
const curre = document.querySelector('body');
const dayindex = document.querySelectorAll('.weekList li');
const Mon = document.querySelector('.mon');
const clas = document.querySelector('.class');
const afsc = document.querySelector('.afsc')
const circlecs = document.querySelector('.circle.class');
const circleas = document.querySelector('.circle.afsc');
const intro = document.querySelector('.introc');
const introa = document.querySelector('.introa');

list.style.display = 'none'
let state = 0;

async function classdispflex(){
  circlecs.style.top = '20%';
  circlecs.style.right = '15%';
  intro.style.display = 'none';
  await sleep(1000);
  circleas.style.display = 'flex';
}

async function afterschooldispflex(){
  circleas.style.top = '60%';
  circleas.style.right = '53%';
  introa.style.display = 'none';
  await sleep(1000);
  circlecs.style.display = 'flex';
}

Menu.addEventListener('click',()=>{
  if (curchar.innerHTML === '閉じる') {
    if(circleas.style.display === 'none'){    
      classdispflex();
      daychange();
    } 
    else if (circlecs.style.display === 'none') {
      afterschooldispflex();
      daychange();
    }
  }
  else if (state===0){
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
  let current = document.querySelector('body').getAttribute('data-current');
  curchar.innerHTML = current;
  Menu.classList.remove('open');
  list.style.display = 'none';
  await sleep(1000);
}

clas.addEventListener('click',()=>{
  circleas.style.display = 'none';
  circlecs.style.top = '5%';
  circlecs.style.right = '5%';
  curchar.innerHTML = '閉じる';
  intro.style.display = 'block'
})

afsc.addEventListener('click',()=>{
  circlecs.style.display= 'none';
  circleas.style.top = '5%';
  circleas.style.left = 'auto';
  circleas.style.right = '5%';
  curchar.innerHTML = '閉じる';
  introa.style.display = 'block'
})

function daychange() {
  let current = document.querySelector('body').getAttribute('data-current');
  curchar.innerHTML = current;
}

window.addEventListener('scroll',function(){
  let y = window.scrollY;
  if (y <= 700) {
    curre.setAttribute('data-current','月曜日');
    daychange();
  }
  else if (y >= 2800) {
    curre.setAttribute('data-current','金曜日');
    daychange();
  }
  else if (y >= 2100) {
    curre.setAttribute('data-current','木曜日');
    daychange();
  }
  else if (y >= 1400) {
    curre.setAttribute('data-current','水曜日');
    daychange();
  }
  else if (y >= 700) {
    curre.setAttribute('data-current','火曜日');
    daychange();
  }
})


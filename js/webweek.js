'use strict'

const sleep = waitTime => new Promise( resolve => setTimeout(resolve, waitTime) );
const Menu = document.querySelector('.menu');
const Close = document.querySelector('.close');
const curchar = document.querySelector('.current');
const list = document.querySelector('.weekList');
const curre = document.querySelector('body');
const Mon = document.querySelector('.mon');
const clas = Array.from(document.querySelectorAll('.class'));
const afsc = Array.from(document.querySelectorAll('.afsc'));
const days = Array.from(document.querySelectorAll('.day'));
const circlecs = Array.from(document.querySelectorAll('.circle.class'));
const circleas = Array.from(document.querySelectorAll('.circle.afsc'));
const intro = Array.from(document.querySelectorAll('.introc'));
const introa = Array.from(document.querySelectorAll('.introa'));
const html = document.querySelector('html');

list.style.display = 'none';
let state = 0;
let i = 0;
let notcurrentnums = days.filter(function(value){
  return value != days[i];
})

async function classdispflex(){
  circlecs[i].style.top = '20%';
  circlecs[i].style.right = '15%';
  intro[i].style.display = 'none';
  await sleep(1000);
  circleas[i].style.display = 'flex';
}

async function afterschooldispflex(){
  circleas[i].style.top = '60%';
  circleas[i].style.right = '53%';
  introa[i].style.display = 'none';
  await sleep(1000);
  circlecs[i].style.display = 'flex';
}

Menu.addEventListener('click',async function(){
  if (curchar.innerHTML === '閉じる') {
    html.style.scrollBehavior = 'auto'
    Menu.style.backgroundColor = 'rgba(255,255,255,1)';
    if(circleas[i].style.display === 'none'){
      classdispflex();
      daychange();
    } 
    else if (circlecs[i].style.display === 'none') {
      afterschooldispflex();
      daychange();
    }
    switch (i){
      case 0:
        location.href = '#mon';
        break;
      case 1:
        location.href = '#tue';
        break;
      case 2:
        location.href = '#wed';
        break;
      case 3:
        location.href = '#thu';
        break;
      case 4:
        location.href = '#fri';
        break;
      default:
        console.log("error");
    }
    for(let j = 0; j <= (notcurrentnums.length-1); j++){
      notcurrentnums[j].style.display = 'block';
    }
    await sleep(2000)
    html.style.scrollBehavior = 'smooth';
  }
  else if (state===0){
    open();
    await sleep(1100)
    state = 1
  }
  else {
    close();
    await sleep(1100)
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
  let current = document.querySelector('body').getAttribute('data-current');
  curchar.innerHTML = current;
  Menu.classList.remove('open');
  list.style.display = 'none';
  await sleep(1000);
}

function clasOpen(x){
  circleas[x].style.display = 'none';
  circlecs[x].style.top = '5%';
  circlecs[x].style.right = '5%';
  curchar.innerHTML = '閉じる';
  Menu.style.backgroundColor = 'rgba(255,255,255,.4)';
  intro[x].style.display = 'block';
  for(let j = 0; j <= (notcurrentnums.length-1); j++){
    notcurrentnums[j].style.display = 'none';
  }
}

function afskOpen(x){
  circlecs[x].style.display= 'none';
  circleas[x].style.top = '5%';
  circleas[x].style.right = '5%';
  curchar.innerHTML = '閉じる';
  Menu.style.backgroundColor = 'rgba(255,255,255,.4)';
  introa[x].style.display = 'block';
  for(let j = 0; j <= (notcurrentnums.length-1); j++){
    notcurrentnums[j].style.display = 'none';
  }
}

function daychange() {
  let current = document.querySelector('body').getAttribute('data-current');
  curchar.innerHTML = current;
  notcurrentnums = days.filter(function(value){
    return value != days[i];
  })
}

window.addEventListener('scroll',function(){
  if(curchar.innerHTML === '閉じる'){
    return
  }
  else {
  let y = window.scrollY;
  if (y <= 700) {
    curre.setAttribute('data-current','月曜日');
    i = 0;
    daychange();
  }
  else if (y >= 2800) {
    curre.setAttribute('data-current','金曜日');
    i = 4;
    daychange();
  }
  else if (y >= 2100) {
    curre.setAttribute('data-current','木曜日');
    i = 3;
    daychange();
  }
  else if (y >= 1400) {
    i = 2;
    curre.setAttribute('data-current','水曜日');
    daychange();
  }
  else if (y >= 700) {
    i = 1;
    curre.setAttribute('data-current','火曜日');
    daychange();
  }}
})


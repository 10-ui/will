'use strict'

const sleep = waitTime => new Promise( resolve => setTimeout(resolve, waitTime) );
const menu = document.querySelector('.menu');
const currentChar = document.querySelector('.data-current');
const closeChar = document.querySelector('.closeChar');
const weeks = document.querySelector('.weekList');
const day = Array.from(document.querySelectorAll('.day'));
const classes = Array.from(document.querySelectorAll('.class'));
const afterschools = Array.from(document.querySelectorAll('.afsc'));
const classIntro = Array.from(document.querySelectorAll('.introc'));
const afterschoolIntro = Array.from(document.querySelectorAll('.introa'));
const currentDay = ['月曜日','火曜日','水曜日','木曜日','金曜日'];

//-----------------------------ここから-----------------------------//
//左下メニューの記述
let state = 0;//stateで管理

menu.addEventListener('click',async function(){
  if (currentChar.innerHTML === '閉じる'){
    return
  }
  else if(state === 0){
    currentChar.style.display = 'none';
    menu.classList.add('open');
    await sleep(1000);
    weeks.style.display = 'block';
    await sleep(150);
    state = 1;
  } 
  else if(state === 1){
    weeks.style.display = 'none';
    menu.classList.remove('open');
    await sleep(1000);
    currentChar.style.display = 'block';
    await sleep(150);
    state = 0;
  }
});
//-----------------------------ここまで-----------------------------//


//-----------------------------ここから-----------------------------//
//data-currentの設定
function dayChange(x){
  currentChar.innerHTML = `${currentDay[x]}`
}

window.addEventListener('scroll',function(){
  let y = window.scrollY;
  if (y <= 650) {
    dayChange(0);
  }
  else if (y >= 2600) {
    dayChange(4);
  }
  else if (y >= 1950) {
    dayChange(3);
  }
  else if (y >= 1300) {
    dayChange(2);
  }
  else if (y >= 650) {
    dayChange(1);
  }
});
//-----------------------------ここまで-----------------------------//


//-----------------------------ここから-----------------------------//
//授業ボタン押下後の処理
async function Classopen(x){
  afterschools[x].style.display = 'none';
  classes[x].style.top = '5%';
  classes[x].style.right = '5%';
  currentChar.style.display = 'none';
  closeChar.style.display = 'block';
  await sleep(1000)
  classIntro[x].style.display = 'block';
};

async function Close(){
  if(afterschools[Classopen().index].style.display === 'none'){
  }
  else if(Classopen().openedclass.style.display === 'none') {
    Classopen().afternum.style.top = '60%';
    Classopen().afternum.style.right = '53%';
    classIntro.style.display = 'none';
    await sleep(1000)
    Classopen().openedclass.style.display = 'flex';
  }
  else return
});
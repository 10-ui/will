// モーダルを一個作って

// 問題文、img、ボタンごとにidとかつけとく

// jsで内容を逐一変えていく。

// カウント数を判定して

// 正解不正解と

// 最後に数を出す

const tapHide = document.querySelector('.tap-hide-area');
const modal = document.querySelector('.out-modal');
const picture = document.querySelector('.quiz-picture');
const quizNum = document.querySelector('.quiz-num');
const quizPre = document.querySelector('#quiz-pre')
const quizSentence = document.querySelector('.quiz-sentence');
const modalsLogout = document.querySelector('#quiz-out');
const modalsSenior = document.querySelector('#hint-senior');
const modalsTv = document.querySelector('#hint-tv');
const modalsTeacher = document.querySelector('#hint-teacher');
const teacher = document.querySelector('.teacher-pic');
const attention = document.querySelector('.attention');
const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
const op1st = document.querySelector('#btn1');
const op2nd = document.querySelector('#btn2');
const op3rd = document.querySelector('#btn3');
const op4th = document.querySelector('#btn4');

let count = 0;
let collect = 0;

//ロード時にモーダルで挑戦確認
window.onload = function Ready() {
  tapHide.classList.add('tap-hide-active');//モーダルエリアを表示
  modal.classList.add('out-modal-active');//グレーの部分を表示
  attention.innerHTML = 'おさらいクイズを始めますか？';
  yes.innerHTML = 'やってみる！';
  no.innerHTML = '今はまだいいかな...';
}


// モーダルエリアの表示、非表示と範囲外タップで見えなくする
function modalOn() {
  tapHide.classList.add('tap-hide-active');//モーダルエリアを表示
  modal.classList.add('out-modal-active');//グレーの部分を表示
}

function tapToHide() {
  tapHide.classList.remove('tap-hide-active');//範囲外のグレー部分を非表示
  modal.classList.remove('out-modal-active');//モーダルエリアを非表示
  teacher.classList.remove('teacher-ac');
  yes.style.display = 'block';
  no.style.display = 'block';
  attention.style.marginTop = '2rem';
}

tapHide.addEventListener('click',()=> {//グレーの部分をタップしたときの処理
  tapToHide();
});

//-----------------------------------ここまで-----------------------------------//


//はい・いいえの処理(共通)
yes.addEventListener('click',function (){//yesが押されたとき
  if(yes.innerHTML === '助けてもらう'){//だったら
          teacher.classList.add('teacher-ac');
      yes.style.display = 'none';
      no.style.display = 'none';
      attention.style.marginTop = '1.3rem';
      switch (count){
        case 1:
          attention.innerHTML = '時間内に来るのが<br>社会人としてのマナーですよ！';
          break;
        case 2:
          attention.innerHTML = 'ロッカーのカギは生命線です！<br>忘れたら罰が待ってますよ...?';
          break;
        case 3:
          attention.innerHTML = '３つとも大切ですが、これがないと<br>コミュニケーションに<br>大きく支障が出てしまいますよ？';
          break;
        case 4:
          attention.innerHTML = '企業様と学校が<b>連携</b>して行う<br>Webデザイン科の強みですね～';
          break;
        case 5:
          attention.innerHTML = '私の名前です！！！<br>山は「やま」とは読みませんよ？';
          break;
        default:
          alert('error');
    }
    modalsTeacher.style.backgroundColor = 'gray';//色を暗くして
    modalsTeacher.disabled = true;//二回目を使えなくする
  }
  else if(count === 0){
    tapToHide();
    count += 1;
  }
  else if(yes.innerHTML === '減らす'){//だったら
    modalsTv.style.backgroundColor = 'gray';//色を暗くして
    modalsTv.disabled = true;//二回目を使えなくする
    if(count === 1){
      op1st.style.display = 'none';
      op2nd.style.display = 'none';
    }
    else if(count === 2){
      op2nd.style.display = 'none';
      op4th.style.display = 'none';
    }
    else if(count === 3){
      op1st.style.display = 'none';
      op3rd.style.display = 'none';
    }
    else if(count === 4){
      op2nd.style.display = 'none';
      op3rd.style.display = 'none';
    }
    else {
      op3rd.style.display = 'none';
      op4th.style.display = 'none';
    }
    tapToHide();
  }
  else if(yes.innerHTML === 'もらってみる'){//だったら
    modalsSenior.style.backgroundColor = 'gray';//色を暗くして
    modalsSenior.disabled = true;//二回目を使えなくする
  }
  else if( yes.innerHTML = 'トップページへ戻る'){//退出時の処理
    location.href='../index.html';
    }
})

no.addEventListener('click',()=> {//いいえを選んだときの処理
  if(count === 0){
    location.href = '../index.html';
  }
  tapToHide();
})

//-----------------------------------ここまで-----------------------------------//


//選択肢及びヒントボタンの処理

////選択肢ボタン
//最初
function one() {
  picture.setAttribute('src', '../img/slidePic/advice.JPG');
  quizNum.innerHTML = 'Q1/Q5.';
  quizSentence.innerHTML = 'Webデザイン科で遅刻をすると<br>どのような扱いになるか？';
  op1st.innerHTML = '遅刻';
  op2nd.innerHTML = '５分以内<br class="noiphone">なら出席';
  op3rd.innerHTML = '欠席';
  op4th.innerHTML = '５分以内<br class="noiphone">なら遅刻';
}
//１問目から２問目
function oneToTwo() {
  picture.setAttribute('src', '../img/slidePic/casino.JPG');
  quizNum.innerHTML = 'Q2/Q5.';
  quizSentence.innerHTML = 'Webデザイン科で使用している<br>ロッカーの鍵を忘れるとどうなる？';
  op1st.innerHTML = '掃除をさせられる';
  op2nd.innerHTML = '帰らされる';
  op3rd.innerHTML = '怒られる';
  op4th.innerHTML = '特に何もない';
  count += 1;
}

//２問目から３問目
function twoToThree() {
  picture.setAttribute('src', '../img/slidePic/halloween.JPG');
  quizNum.innerHTML = 'Q3/Q5.';
  quizSentence.innerHTML = 'Webデザイン科で重要な3つの柱は<br>「考える」「作る」、もう一つは？';
  op1st.innerHTML = '楽しむ';
  op2nd.innerHTML = '伝える';
  op3rd.innerHTML = '学ぶ';
  op4th.innerHTML = '教える';
  count += 1;
}

//３問目から４問目
function threeToFour() {
  picture.setAttribute('src', '../img/slidePic/search.JPG');
  quizNum.innerHTML = 'Q4/Q5.';
  quizSentence.innerHTML = '企業様からテーマを頂き提案を行う<br>Webデザイン科の強みといえば？';
  op1st.innerHTML = '企業交流';
  op2nd.innerHTML = '学生提案';
  op3rd.innerHTML = '会社連携';
  op4th.innerHTML = '産学連携';
  count += 1;
}

function fourToFive() {
  picture.setAttribute('src', '../img/slidePic/welcome.JPG');
  quizNum.innerHTML = 'Q5/Q5.';
  quizSentence.innerHTML = 'Webデザイン科の学科長の名前は？';
  op1st.innerHTML = 'おさない先生';
  op2nd.innerHTML = 'おやまない先生';
  op3rd.innerHTML = 'こやまうち先生';
  op4th.innerHTML = 'こさんない先生';
  count += 1;
}

function toResult() {
  document.cookie = `data=${collect}; path=/quiz/`;
  location.href = '../quiz/result/index.html'
}


////選択肢1-4までの処理
//リセット
function reset() {
  op1st.style.display = 'inline-block';
  op2nd.style.display = 'inline-block';
  op3rd.style.display = 'inline-block';
  op4th.style.display = 'inline-block';
}
//選択肢1
op1st.addEventListener('click',()=>{
  reset();
  if(count === 1){
    oneToTwo();
  }
  else if(count === 2){
    collect += 1;
    twoToThree();
  }
  else if(count === 3){
    threeToFour();
  }
  else if(count === 4){
    fourToFive();
  }
  else {
    collect += 1;
    toResult();
  }
});

//選択肢2
op2nd.addEventListener('click',()=>{
  reset();
  if(count === 1){
    oneToTwo();
  }
  else if(count === 2){
    twoToThree();
  }
  else if(count === 3){
    collect +=1;
    threeToFour();
  }
  else if(count === 4){
    fourToFive();
  }
  else {
    toResult();
  }
});

//選択肢3
op3rd.addEventListener('click',()=>{
  reset();
  if(count === 1){
    collect +=1;
    oneToTwo();
  }
  else if(count === 2){
    twoToThree();
  }
  else if(count === 3){
    threeToFour();
  }
  else if(count === 4){
    fourToFive();
  }
  else {
    toResult();
  }
});

//選択肢4
op4th.addEventListener('click',()=>{
  reset();
  if(count === 1){
    oneToTwo();
  }
  else if(count === 2){
    twoToThree();
  }
  else if(count === 3){
    threeToFour();
  }
  else if(count === 4){
    collect += 1;
    fourToFive();
  }
  else {
    toResult();
  }
});
//-----------------------------------ここまで-----------------------------------//


////ヒントボタン
//一個前に戻るボタン
quizPre.addEventListener('click',()=> {
  if(count===5){
    if(collect === 4){
      collect -= 1;
    }
    count -= 2;
    threeToFour();
  }
  else if(count===4){
    if(collect === 3){
      collect -= 1;
    }
    count -= 2;
    twoToThree();
  }
  else if(count===3){
    if(collect === 2){
      collect -= 1;
    }
    count -= 2;
    oneToTwo();
  }
  else {
    if(collect === 2){
      collect -= 1;
    }
    count -= 1;
    one();
  }
});
//先生にヒントを貰うボタンの処理
modalsTeacher.addEventListener('click',()=>{//ミリオネアボタンを押したときの処理
  attention.innerHTML = '先生に助けてもらいますか？';//書き換え
  yes.innerHTML = '助けてもらう';//書き換え
  no.innerHTML = 'もう少し自分で考えてみる';//書き換え
  modalOn();
});
//ミリオネアボタンの処理
modalsTv.addEventListener('click',()=>{//ミリオネアボタンを押したときの処理
  attention.innerHTML = '選択肢を2つに減らしますか？';//書き換え
  yes.innerHTML = '減らす';//書き換え
  no.innerHTML = 'もう少し自分で考えてみる';//書き換え
  modalOn();
});

//先輩に聞くボタンの処理
// modalsSenior.addEventListener('click',()=>{//先輩に聞くボタンを押したときの処理
//   attention.innerHTML = '先輩にヒントをもらいますか？';//書き換え
//   yes.innerHTML = 'もらってみる';//書き換え
//   no.innerHTML = 'もう少し自分で考えてみる';//書き換え
//   modalOn();
// });

//退出ボタンの処理
modalsLogout.addEventListener('click',()=>{//退出ボタンを押したときの処理
  attention.innerHTML = 'ここで本当に退出しますか？<br>ここまでの回答は保存されません。';
  yes.innerHTML = 'トップページへ戻る';//書き換える
  no.innerHTML = '問題へ戻る';//書き換える
  modalOn();
});

//-----------------------------------ここまで-----------------------------------//
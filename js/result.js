let result = document.cookie.split( '; ' )[ 0 ].split( '=' )[ 1 ];

const num = document.querySelector('.collectNum');
const com = document.querySelector('.com');

num.innerHTML = `${result}`;

switch (result){
  case '0':
    com.innerHTML = 'Webデザイン科のことを<br>もっと知れるように<br>Webデザイン科の一週間を<br>見てみよう！';
    break;
  case '1':
    com.innerHTML = 'もう一度やって考えてみると<br>新しい気付きがあるかも？';
    break;
  case '2':
    com.innerHTML = '残り３問を考え直してみよう！<br>ヒントも使ってみてね';
    break;
  case '3':
    com.innerHTML = 'あと２問！<br>Webデザイン科の一週間も<br>見てみよう！';
    break;
  case '4':
    com.innerHTML = 'おしい！あと一つ！<br>次は満点を目指してみよう！';
    break;
  case '5':
    com.innerHTML = '完璧です！<br>君ならWebデザイン科を<br>生き抜けるはず！';
    break;
  default:
    com.innerHTML = 'エラー'
}

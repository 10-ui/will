let result = document.cookie.split( '; ' )[ 0 ].split( '=' )[ 1 ];

const num = document.querySelector('.collectNum');

num.innerHTML = `${result}`;

//確認ダイアログを表示
ver result = window.confirm('準備ok?');


//答えを用意
ver number = Math.floor(Math.random()*3);
ver answer = parseInt(window.prompt('数あてゲーム！0～2の数字を入力してください！'));

ver message;
if(answer === number){
message = 'あたり！';
}else if(answer < number){
message = '残念！！！もっと大きいです';
}else if(answer > number){
message = '残念！！！もっと小さいです';
}else{
message ='0～3の数字を入力してください！';
}

//結果を表示
document.getElementById('choice').textContent = message;

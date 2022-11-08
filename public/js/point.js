
// var ball = document.getElementById("ball");
// ball.onmousedown = function(event){
//   console.log("タップされたよ!");
// }

// ball.style.position = "absolute";


// ball.onmousedown = function(event){
//     document.addEventListener("mousemove",onMouseMove);
// }
// var onMouseMove = function(event){
//     var x = event.clientX;
//     var y = event.clientY;
//     var width = ball.offsetWidth;
//     var height = ball.offsetHeight;
//     ball.style.top = (y-height/2) + "px";
//     ball.style.left = (x-width/2) + "px";
//     ball.onmouseup = function(event){
//         document.removeEventListener("mousemove",onMouseMove);
//       }
    
// }
ball.ondragstart = function() {
    return false;
  };

ball.onmousedown = function(event) { // (1) 処理を開始

    // (2) 移動のための準備: absolute にし、z-index でトップにする
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    // 現在の親から body へ直接移動させ、body に対して相対配置をする
    document.body.appendChild(ball);
    // ...そしてその絶対配置されたボールをカーソルの下に置く
  
    moveAt(event.pageX, event.pageY);
  
    // ボールを（pageX、pageY）座標の中心に置く
    function moveAt(pageX, pageY) {
      ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
      ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // (3) mousemove でボールを移動する
    document.addEventListener('mousemove', onMouseMove);
  
    // (4) ボールをドロップする。不要なハンドラを削除する
    ball.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
    };
  
  };
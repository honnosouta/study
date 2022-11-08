ball.ondragstart = function() {
    return false;
  };

ball.onmousedown = function(event) { 
    console.log("マウスダウン");
    ball.style.position = "absolute";
    ball.style.zIndex = 1000;

    document.body.appendChild(ball);

    // moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
        ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
        console.log(pageX);
        // console.log(pageY);
      }

    console.log(moveAt.length+"moveAt");

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
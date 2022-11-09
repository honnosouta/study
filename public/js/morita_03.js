const btn = document.querySelector("#like-btn");
let sw = true;

btn.onclick = function(event){
    if( sw == true ){
        btn.style.backgroundImage = "url(img/heart_pink.svg)";
        sw = false;
    }else{
        btn.style.backgroundImage = "url(img/heart_blue.svg)";
        sw = true;
    }
}
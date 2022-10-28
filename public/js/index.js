const header = document.querySelector(".header");
let set = 0;

window.addEventListener('scroll',(e) => {

    const TOPY = document.documentElement.scrollTop
    // console.log(document.documentElement.scrollTop);
    if(set < TOPY){
        console.log("down");
        // header.classList.remove('header-anime');
        // header.classList.add('header');
        header.style.position = "relative"
    }
    else{
        console.log("up");
        // header.classList.add('header-anime');
        // header.classList.remove('header');
        header.style.position = "fixed"
    }

    console.log(TOPY);

    
    // if(set < document.documentElement.scrollTop){
        // header.style.transform = "translateY(-200px)"
    //     console.log("down");
    //     header.style.opacity = 0
    // }else if(set > document.documentElement.scrollTop){
        // header.style.transform = "translateY(0)"
    //     header.style.opacity = 1
    //     console.log("up");
    // }
    set = TOPY;
});

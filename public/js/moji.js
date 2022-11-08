// const text = documen
// text.forEach(element => {
    
// });

const text = document.querySelectorAll("p")
text.forEach((e,i) => {
    for (let v = 0; v < e.innerHTML.length; v++) {
        console.log(e.innerHTML[v]);
    }
});
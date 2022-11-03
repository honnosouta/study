function cut(food){
    // 色々処理
    const cutFood = food.slice();
    return cutFood;
}

const cutCarrot = cut(carrot);
const cutPotato = cut(carrot);

function throwAway(food){
    // 捨てる処理
    delete food;
}




function isTweetable(text){
    return text.length <= 140;
}

// console.log(isTweetable("foo"));

function isTweetable(text){
    return (text.length <= 140){
        alert("you can tweet!")
    }
}
alertTwwtable("foo");

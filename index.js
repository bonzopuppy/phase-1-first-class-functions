function receivesAFunction (getJohnSnow) {
    getJohnSnow();
}

function returnsANamedFunction () {
    return function findPeanuts (){
        console.log("Help i can't find peanuts")
    }
}

function returnsAnAnonymousFunction () {
    return function () {
        console.log("I need a name");
    }
}



function counter() {
    var i = 0;
    return function () {
        console.log(++i)
    }
}
var result = counter();

setInterval(function () {
    result()
}, 1500)
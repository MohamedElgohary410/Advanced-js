
var number = parseInt(prompt("Enter Integer"))
function help(num) {
    if (num <= 1) {
        return 1
    } else {
        return num * help(num - 1)
    }
}
console.log(help(number))
function help() {
    var cache = {};
    return function factorial(n) {
        if (n == 0 || n == 1) return 1
        if (cache[n]) return cache[n]
        return cache[n] = n * factorial(n - 1)
    }
}

var fact = help()
console.log(fact(4))
console.log(fact(7))
console.log(fact(9))
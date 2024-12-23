function Person() {
}

Person.compare = function (num1, num2) {
    if (num1.age > num2.age) return num1.name + "is oldest"
    else return num2.name + " is oldest"
}

var p1 = {
    name: 'Ahmed',
    age: 25
}
var p2 = {
    name: 'Mohamed',
    age: 35
}
var result = Person.compare(p1, p2)
console.log(result);

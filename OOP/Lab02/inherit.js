function Person(name) {
    this.name = name;
}
Person.prototype.greet = function () {
    console.log("Hello");

}

function Stu(name, school) {
    Person.call(this, name)
    this.school = school
}
//==========================================//
Stu.prototype = Object.create(Person.prototype)
Stu.prototype.constructor = Stu

Stu.prototype.greet = function () {
    return this.name + " === " + this.school;
}

var stu1 = new Stu('mohamed', 'ITI')
console.log(stu1.greet())
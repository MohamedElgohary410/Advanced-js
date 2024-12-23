function Person(name, id) {
    this.name = name
    var ssn = id
    this.getssn = function () {
        return ssn
    }
}

var stu1 = new Person('mona', '0109344')
console.log(stu1.getssn())
console.log(stu1.ssn);

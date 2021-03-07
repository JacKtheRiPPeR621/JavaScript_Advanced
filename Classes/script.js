class Person{
    constructor(name , age) {
        this.name = name
        this.age = age
    }

    isAdult() {
        return this.age >= 18
    }
}

let p1 = new Person('John Doe' , 25)
let p2 = new Person('Jane Doe' , 15)

console.log(typeof Person)   //function;  there is no new data type such as class
console.log(p1.__proto__ == Person.prototype)                 //true
console.log(p1.__proto__.__proto__ == Object.prototype)       //true
console.log("=========================================")


class Student extends Person{
    constructor(name , age , grade){
        super(name , age)  //Allows you to use the constructor the of Person Class
        this.grade = grade
    }
}
let s1 = new Student('Harry' , 15 , 7)
let s2 = new Student('James' , 14, 6)

console.log(s1.__proto__ == Student.prototype)
console.log(s1.__proto__.__proto__ == Person.prototype)
console.log(s1.__proto__.__proto__.__proto__ == Object.prototype)


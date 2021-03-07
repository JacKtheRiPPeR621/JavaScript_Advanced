let str = 'ghoshogi'                                 // 3 levels from null
let num = 4928492                                    // 3 levels from null
let bool = true                                      // 3 levels from null
let arr = [3,6,33,21, "hgie" , false]                // 3 levels from null
let obj = {a:20 , b:45 , c:'gjies'}                  // 2 levels from null
let fun = function(){ console.log("yay!") }          // 3 levels from null

// let x and y are non primitive
// and x == y  ... what does that means?
// that means they are referenced to the same object in memory

console.log("=============types=============")
console.log('type of String: ' , typeof String )
console.log('type of Number: ' , typeof Number )
console.log('type of Boolean: ' , typeof Boolean)
console.log('type of Array: ' , typeof Array )
console.log('type of Object: ' , typeof Object )
console.log('type of Function: ' , typeof Function )
console.log("===============================")

console.log("=============proto chains=============")
console.log(str.__proto__.__proto__ == obj.__proto__)
console.log(num.__proto__.__proto__ == obj.__proto__)
console.log(bool.__proto__.__proto__ == obj.__proto__)
console.log(arr.__proto__.__proto__ == obj.__proto__)
console.log(fun.__proto__.__proto__ == obj.__proto__)
console.log("======================================")

// Everthing is inherited from the same thing from which
// obj is inherited from
// i.e.  In JavaScript, everything is essentially an Object

console.log("============prototypes=============")
console.log(obj.__proto__ == Object.prototype)
console.log(str.__proto__ == String.prototype)
console.log(num.__proto__ == Number.prototype)
console.log(bool.__proto__ == Boolean.prototype)
console.log(arr.__proto__ == Array.prototype)
console.log(fun.__proto__ == Function.prototype)
console.log("===================================")

// Conclusion:  String.prototype inherits from Object.prototype

let x = Object.create(Boolean.prototype)
console.log(x.__proto__ == bool.__proto__)
console.log(typeof x)      //object
console.log(typeof bool)   //boolean
console.log("====================================")

// It is not neccessary that if both have same proto, they will have same typeof...

/*
     Difference Between __proto__ and prototypes 
     
     Prototypes: Just like java,C++ classes are used as blueprints to create objects. Here in
                 JavaScript, prototypes are the blueprints to create objects
                 eg. String.prototype is the model or blueprint from which every single strings 
                 are made
    
    __proto__  : This is the hidden pointer in every object which points to the model or blueprint 
                 from which it was created
*/

console.log(str.charAt(4))
console.log(typeof str.charAt)  //function
let str2 = "fiehfieh"
console.log(str.charAt == str2.charAt)  // true
str.charAt = function() { return 'X'}   // Does Not Work

String.prototype.charAt = function() { return 'X'}

// String.prototype contains all default string function 
// like charAt , indexOf , substring , slice etc
console.log("=====================================")

Array.prototype.joinOriginal = Array.prototype.join

Array.prototype.join = function() {
     console.log('Join called on ' , this)
     return this.joinOriginal(...arguments)
}
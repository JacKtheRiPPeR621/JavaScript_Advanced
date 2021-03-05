obj1 = {
    a:10,
    b:20,
    c:30
}

obj2 = Object.create(obj1)  // Prototype based Inheritance
obj2.p = 'hgohe'
obj2.q = 'nciie'
obj2.r = 'cjiwo'

/*
      obj2.a : it will try to find  a  in obj2
        if not found
             : it will try to find it in  obj2.__proto__
        if not found
             : it will try to find it in obj2.__proto__.proto__
        and so on ... 
             : till .__proto__ becomes null
      
*/

obj3 = Object.create(obj2)
// obj3.__proto__ == obj2
// obj3.__proto__.__proto__ == obj1

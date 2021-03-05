console.log(1 == '1')  //Abstract Equality Comparision  //true '1' will typecast to Number: 1
console.log(1 === '1') //Strict Equality Comparision //false  DataTypes mismatch

//Peculiar Cases
console.log('false' == false)  //false   Both will typecast to Number
                               // Number('false') = NaN  and Number(false) = 0
console.log('' == false) //true   Both typecast to zero

console.log('' == 0)    //true   Both will type cast to Number
console.log('\n' == 0)  //true
console.log('\t' == 0)  //true
console.log('\n' == '\t')  //false (Both Strings not matched)  Here in Abstract equality trasitive property not works
                           // a=b , b=c implies that  a=c ... Not gonna work

console.log([1,2] == [1,2])  //false  because both refrence don't matched
                             //Different memory allocation
function outer(arg1){
    let value1 = 10
    let x = 10;
    console.log(arguments[0])

    function inner(arg2){
        let value2 = 20
        let x = 20
        console.log(arg1 , value1 , arg2 , value2 , x)
        console.log(arguments[0])
    }
    return inner
}

let x = outer("param1")
// typeof x = function
// which means x = inner

x("param2")


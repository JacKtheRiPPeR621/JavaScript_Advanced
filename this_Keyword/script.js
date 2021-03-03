function checkThis(){
    console.log(this)
}

let obj = {
    a: 10 ,
    b: 'ajdjfgie' ,
    c: true ,
    d: function(){
        console.log(this)  // Points to obj
    } ,

    10: 92839283 ,
    true: "hello" ,
    e: {
        l: 234 ,
        m: 'fjighe' ,
        n: function(){
            console.log(this)
        },
    },
}
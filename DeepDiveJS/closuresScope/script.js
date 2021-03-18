function createCounter(initial , final){
    return {
        up(){
            initial += final
            console.log(initial)
        } ,
        down(){
            initial -= final
            console.log(initial)
        }
    }
}

var c = createCounter(10 , 5)
c.up()  //15
c.up()  //20
c.down()//15
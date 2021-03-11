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
c.up()
c.up()
c.down()
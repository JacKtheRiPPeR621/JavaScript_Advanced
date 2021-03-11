// function sayhello() {
//     console.log('Hello!')
// }
// console.log('Wait for 1 sec...')
// setInterval(sayhello , 1000)



var intervalId
var count = 0
function sayhello() {
    count++
    if(count > 5){
        clearInterval(intervalId)
    }
    console.log('Hello!')
}
console.log('Wait for 1 sec...')
var intervalId = setInterval(sayhello , 1000)


// Another way of writing function with setInterval
setInterval(function(){
    console.log("this comes afer 2 sec...")
},2000)



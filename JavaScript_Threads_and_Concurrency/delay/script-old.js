let btnWait = document.getElementById('btnWait')
let btnCount = document.getElementById('btnCount')
let divState = document.getElementById('divState')
let divVal = document.getElementById('divVal')


let count = 0

btnCount.onclick = function() {
    count++
    divVal.textContent = count
}

btnWait.onclick = function() {
    divState.textContent = 'Waiting'    // Paint in HTML will occur after this function will complete
                                        // When the call stack gets empty  ... This improves efficeincy of website 
    let start = Date.now()
    while(Date.now() <= start+5000){ /* do nothing */ }   //Since this is a synchronous function, for five seconds
                                                          //everything in website gets blocked
    divState.textContent = 'Done'
}
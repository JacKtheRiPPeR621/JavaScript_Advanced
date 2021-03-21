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
    divState.textContent = 'Waiting'
    let start = Date.now()
    while(Date.now() <= start+5000){ /* do nothing */ }
    divState.textContent = 'Done'
}
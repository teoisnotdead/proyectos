const counter = document.getElementById('counter')
const btnDecrease = document.getElementById('btnDecrease')
const btnIncrease = document.getElementById('btnIncrease')
const btnReset = document.getElementById('btnReset')
let valorCounter = 0

btnDecrease.onclick = function decrease() {
    valorCounter -= 1;
    counter.innerHTML = valorCounter;
}

btnReset.onclick = function increase() {
    valorCounter = 0;
    counter.innerHTML = valorCounter;
}

btnIncrease.onclick = function reset() {
    valorCounter +=1;
    counter.innerHTML = valorCounter;
}
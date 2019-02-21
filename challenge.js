document.addEventListener("DOMContentLoaded", () => {

window.addEventListener("load", startCounter);
let counter = document.querySelector("#counter")
let minus = document.querySelector('#minus')
let plus = document.querySelector('#plus')
minus.addEventListener('click', minusCounter)
plus.addEventListener('click', plusCounter)
})

let i = 0;

function startCounter(){
  counter.innerHTML = i
    do {
      i += 1
    return i;
  } while (true);
}

function minusCounter(){
  console.log('minus');
  counter.innerHTML = i
  return i = i - 1
}

function plusCounter() {
  console.log('plus');
  counter.innerHTML = i
  return i += 1
}

let timerId = setInterval(startCounter, 1500)

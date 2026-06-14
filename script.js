let number = document.getElementById("number")
const btn = document.getElementById("btn")
const result = document.getElementById("result")
// verifier si le bouton marche//
btn.onclick = function(){
let inputnumber = number.value
result.textContent = inputnumber;
}

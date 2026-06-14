let number = document.getElementById("number")
const btn = document.getElementById("btn")
const result = document.getElementById("result")
// verifier si le bouton marche//
btn.onclick = function(){
//lire le input value=nombre que tu tapes//
let inputnumber = number.value
result.textContent = inputnumber;
//le boucle 
let texte = "" //feuille vide pour stocker,ecrire les trucs//
for (let i = 1; i <= 10; i++) {
    texte += inputnumber + "X" + i + "=" + (inputnumber * i) + "<br>";
    result.innerHTML = texte; // afficher UNE seule fois
}
//
}

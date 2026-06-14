let number = document.getElementById("number")
const btn = document.getElementById("btn")
const result = document.getElementById("result")
// verifier si le bouton marche//
btn.onclick = function(){
    result.innerHTML = "";
let inputnumber = number.value
//lire le input value=nombre que tu tapes//
//le boucle 
let texte = "" //feuille vide pour stocker,ecrire les trucs//
for (let i = 1; i <= 10; i++) {
    texte += inputnumber + "X" + i + "=" + (inputnumber * i) + "<br>";
    result.innerHTML = texte; // afficher UNE seule fois
}
//
}

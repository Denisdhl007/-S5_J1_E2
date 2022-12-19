

// exo1
/*
let prenom = `Denis`
console.log(prenom)

let age = 29
console.log(age)

let presentation = `mon prénom est ${prenom} et j'ai ${age} ans`;
console.log(presentation)
*/

// exo2
/*
let prenom2 = prompt(`quel est le prénom?`);
let age2 = prompt("quel est l'âge?");
let presentation2 = `Votre prénom est ${prenom2} et vous avez ${age2} ans`;
alert(presentation2);
*/


// exo3
/*
let nombre = parseInt(prompt("Enter a Value", "0"), 10);
let nombre2 = parseInt(prompt("Enter a Value", "0"), 10);

let addition = `le résultat de ${nombre} + ${nombre2} est ${nombre+nombre2}`;
alert(addition);

let soustraction  = `le résultat de ${nombre} - ${nombre2} est ${nombre-nombre2}`;
alert(osoustraction );

let division = `le résultat de ${nombre} / ${nombre2} est ${nombre/nombre2}`;
alert(division);

let multiplication = `le résultat de ${nombre} * ${nombre2} est ${nombre*nombre2}`;
alert(multiplication);
*/


// exo4
let phrase = prompt(`quelle est la phrase?`);
let phrase1 = prompt(`quel mot de la phrase précedente faut-il changer svp?`);
let replacement = prompt('Nouveau mot');
alert (phrase.replace (phrase1, replacement));
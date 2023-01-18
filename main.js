// > Sur base de l'html fourni :

// # 1. En utilisant une boucle pour appliquer un écouteur d'événement sur chaque "li", créer un programme qui permet de lancer une function du nom de sayMyName qui affiche une alert du texte du li sur le quel on clique.

// # 2. En utilisant le meme procédé qu'au dessus Créer un programme qui permet de modifier le contenu de chaque Li en double cliquant dessus via un prompt(attention peut-être que tu devras commenter l'exercice précédent)

// # 3. Créer un programme qui permet d'inverser l'ordre de deux li ! avec l'aide des inputs et du button inverser


// 1 

let total = document.querySelector('ul');
console.log(total);
let li = total.children;
console.log(li);

// for (let i = 0; i < li.length; i++) {
//     li[i].addEventListener('click', function sayMyName() {
//     alert(li[i].innerText)
//     });
// }

// 2

let modif;

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('dblclick', function () {
        modif = prompt(" ");
        li[i].innerText = modif;
    });
}


// 3

let label1 = document.querySelectorAll('label')[0];
console.log(label1);
let label2 = document.querySelectorAll('label')[1];

let input1 = document.getElementById('li-one');
console.log(input1);
let input2 = document.getElementById('li-two');
console.log(input2);

let inputBtn = document.getElementById('inputBtn'); 
console.log(inputBtn);

input1.addEventListener('click', function () {
    label1.innerText = input2.value;
    label2.innerText = input1.value;
});

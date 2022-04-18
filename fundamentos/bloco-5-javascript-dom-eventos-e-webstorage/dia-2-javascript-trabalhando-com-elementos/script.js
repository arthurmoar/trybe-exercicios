//Exercicio 1: Criando uma tag filho da tag body
let catBody = document.body;
let innerBody = document.createElement('h1');
catBody.appendChild(innerBody);
document.getElementsByTagName('h1')[0].innerHTML = "Exercício 5.2 - JavaScript DOM "

//Exercicio 2: Criando a tag main e adicionando uma classe.
let innerMain = document.createElement('main');
catBody.appendChild(innerMain);

innerMain.classList.add('main-content');

//Exercicio 3: Criando uma section dentro do main e adicionando uma classe.
let catMain = document.querySelector('.main-content');
let section = document.createElement('section')
catMain.appendChild(section);
section.classList.add('center-content')
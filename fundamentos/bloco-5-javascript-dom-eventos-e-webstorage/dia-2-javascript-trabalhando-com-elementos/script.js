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
section.classList.add('center-content');

//Exercicio 4: Criando uma tag 'p' dentro da section crianda.
let centerContent = document.querySelector('.center-content');
let paragraph = document.createElement('p');
centerContent.appendChild(paragraph);

//Exercicio 5: Criando outra section left com outra classe.
let mainSectionLeft = document.querySelector('.main-content');
let sectionLeft = document.createElement('section');
sectionLeft.classList.add('left-content');
mainSectionLeft.appendChild(sectionLeft);

//Exercicio 6: Criando outra section rigth com outra classe.
let mainSectionRigth = document.querySelector('.main-content');
let sectionRigth = document.createElement('section');
sectionRigth.classList.add('right-content');
mainSectionRigth.appendChild(sectionRigth);

//Exercicio 7: Criando uma tag de imagem, adicionando um endereço e uma classe nova.
let smallImage = document.querySelector('.left-content');
let image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.classList.add('small-image');
smallImage.appendChild(image);

//Exercicios 8: Criando uma lista filha da section-left.
let listOrdered = [
  'um',
  'dois',
  'três',
  'quatro',
  'cinco',
  'seis',
  'sete',
  'oito',
  'nove',
  'dez'
];
let listRigth = document.querySelector('.right-content');
let lista = document.createElement('ol');
lista.classList.add('ordered-list')
listRigth.appendChild(lista);

let listLineOrdered = document.querySelector('.ordered-list');

for (let i = 0; i < listOrdered.length; i += 1) {
  let line = listOrdered[i];

  let listLine = document.createElement('li');
  listLine.innerHTML = line;

  listLineOrdered.appendChild(listLine);
}
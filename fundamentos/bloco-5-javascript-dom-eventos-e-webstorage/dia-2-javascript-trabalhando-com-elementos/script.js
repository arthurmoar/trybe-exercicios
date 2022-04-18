//Exercicio 1: Criando uma tag filho da tag body
let catBody = document.body;
let innerBody = document.createElement('h1');
catBody.appendChild(innerBody);
document.getElementsByTagName('h1')[0].innerHTML = "Exercício 5.2 - JavaScript DOM "
// Exercicio 10: Criando uma classe para o h1.
innerBody.classList.add('title');

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

//Exercicio 9: Criando 3 tags h3 filhas da tag main.
let h3 = document.querySelector('.center-content');
let firstH3 = document.createElement('h3');
h3.appendChild(firstH3);
document.getElementsByTagName('h3')[0].innerHTML = "Titulo aleatórios."
firstH3.classList.add('description');

let titleImage = document.querySelector('.left-content');
let secondH3 = document.createElement('h3');
titleImage.appendChild(secondH3);
document.getElementsByTagName('h3')[1].innerHTML = "Titulo para a imagem."
secondH3.classList.add('description');

let titleList = document.querySelector('.right-content');
let thirdH3 = document.createElement('h3');
titleList.appendChild(thirdH3);
document.getElementsByTagName('h3')[2].innerHTML = "Titulo para a lista."
thirdH3.classList.add('description');

//Exercicio 11: Removendo left-contet
let removendo = document.getElementsByClassName('main-content')[0];
removendo.removeChild(removendo.firstChild.nextSibling)
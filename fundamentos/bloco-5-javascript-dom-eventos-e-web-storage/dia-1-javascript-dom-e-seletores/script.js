/* Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie uma função que mude a cor do quadrado vermelho para branco.
Crie uma função que corrija o texto da tag <h1>.
Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie uma função que exiba o conteúdo de todas as tags <p> no console. */
const changeParagraph = () => {
  const textP = document.getElementById('main-text');
  textP.innerText = "Me vejo como um programador ainda jr mas a passos largos ao midlevel";
}
changeParagraph();

function changeColor() {
  const yellowColor = document.getElementsByClassName('main-content')[0];
  yellowColor.style.backgroundColor = 'rgb(76,164,109)';
};
changeColor();

const changeCenterContent = () => {
  const centerContent = document.getElementsByClassName('center-content')[0];
  centerContent.style.backgroundColor = "white"
};

changeCenterContent();

const correctText = () => {
  const correctTitle = document.getElementsByClassName('title')[0];
  correctTitle.innerText = 'Exercício 5.1 - JavaEscript'
}
correctText();

const upperCaseParagraph = () => {
  const upperCase = document.getElementById('main-text');
  upperCase.innerHTML = upperCase.innerHTML.toUpperCase()
}

upperCaseParagraph();

const showParagraph = () => {
  const paragraph = document.getElementsByTagName('p');
  for (let i = 0; i < paragraph.length; i += 1) {
    console.log(paragraph[i].innerHTML);
  }
};

showParagraph();

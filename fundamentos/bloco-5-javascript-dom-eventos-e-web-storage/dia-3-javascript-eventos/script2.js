/* eslint-disable complexity, max-lines-per-function */
const cor1 = document.querySelector('.black');
const cor2 = document.querySelector('.blue');
const cor3 = document.querySelector('.yellow');
const cor4 = document.querySelector('.green');
const tabela = document.querySelectorAll('.pixel');
const botao = document.querySelector('#clear-board');

function seleciona(event) {
  const selected = document.querySelector('.selected');
  const thisElement = event.target;
  selected.classList.remove('selected');
  thisElement.classList.add('selected');
}

function trocaCor(event) {
  const selected = document.querySelector('.selected');
  const thisElement = event.target;
  if (thisElement.classList.contains('white')) {
    if (selected.classList.contains('black')) {
      thisElement.classList.replace('white', 'black');
    }
    if (selected.classList.contains('blue')) {
      thisElement.classList.replace('white', 'blue');
    }
    if (selected.classList.contains('yellow')) {
      thisElement.classList.replace('white', 'yellow');
    }
    if (selected.classList.contains('green')) {
      thisElement.classList.replace('white', 'green');
    }
  }
  if (thisElement.classList.contains('black')) {
    if (selected.classList.contains('blue')) {
      thisElement.classList.replace('black', 'blue');
    }
    if (selected.classList.contains('yellow')) {
      thisElement.classList.replace('black', 'yellow');
    }
    if (selected.classList.contains('green')) {
      thisElement.classList.replace('black', 'green');
    }
  }
  if (thisElement.classList.contains('blue')) {
    if (selected.classList.contains('black')) {
      thisElement.classList.replace('blue', 'black');
    }
    if (selected.classList.contains('yellow')) {
      thisElement.classList.replace('blue', 'yellow');
    }
    if (selected.classList.contains('green')) {
      thisElement.classList.replace('blue', 'green');
    }
  }
  if (thisElement.classList.contains('yellow')) {
    if (selected.classList.contains('black')) {
      thisElement.classList.replace('yellow', 'black');
    }
    if (selected.classList.contains('blue')) {
      thisElement.classList.replace('yellow', 'blue');
    }
    if (selected.classList.contains('green')) {
      thisElement.classList.replace('yellow', 'green');
    }
  }
  if (thisElement.classList.contains('green')) {
    if (selected.classList.contains('black')) {
      thisElement.classList.replace('green', 'black');
    }
    if (selected.classList.contains('blue')) {
      thisElement.classList.replace('green', 'blue');
    }
    if (selected.classList.contains('yellow')) {
      thisElement.classList.replace('green', 'yellow');
    }
  }
}

function limpa() {
    for(let i = 0; i < tabela.length; i += 1) {
        tabela[i].className = 'pixel white';
    }
}

cor1.addEventListener('click', seleciona);
cor2.addEventListener('click', seleciona);
cor3.addEventListener('click', seleciona);
cor4.addEventListener('click', seleciona);
botao.addEventListener('click', limpa);


for (let i = 0; i < tabela.length; i += 1) {
  tabela[i].addEventListener('click', trocaCor);
}
const btn = document.querySelector('.btn');

let nameComplete = document.getElementById('nome-completo');
let email = document.getElementById('email');

btn.addEventListener('click', function() {

  let sizeName = nameComplete.length;
  console.log(sizeName)

  if (nameComplete.value < 10 || email.value < 10) {
    alert('Dados Inválidos');
  } else if (nameComplete.value > 40 || email.value > 50) {
    alert('Dados Inválidos')
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
})

function verificaPalindromo(palavra) {
  for (let i = 0; i < palavra.length; i += 1) {
    for (let j = palavra.length; j > 0; j -= 1) {
      if (palavra[i] === palavra[j]) {
        return true;
      } else {
        return false;
      }
    }
  }
}
console.log(verificaPalindromo('arara'));

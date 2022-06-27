// Desafio 1
function compareTrue(comparando1, comparando2) {
  let resultado;
  if (comparando1 === true && comparando2 === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
}

// Desafio 4
function concatName(arrayDeString) {
  let ultimo = arrayDeString[arrayDeString.length - 1];
  let primeiro = arrayDeString[0];
  let resultado = `${ultimo}, ${primeiro}`;

  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = wins * 3 + ties;
  return resultado;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let maiorNumero = Math.max.apply(null, arrayDeNumeros);
  let resultado = 0;
  for (const index in arrayDeNumeros) {
    if (maiorNumero === arrayDeNumeros[index]) {
      resultado += 1;
    }
  }
  return resultado;
}

// Desafio 7
function catAndMouse(rato, cat1, cat2) {
  let empate = rato - cat1;
  let emtate2 = cat2 - rato;
  let resultado = '';
  if (empate === rato && emtate2 === rato) {
    resultado = 'os gatos trombam e o rato foge';
  } else if (cat2 < cat1 && cat2 > rato) {
    resultado = 'cat2';
  } else {
    resultado = 'cat1';
  }
  return resultado;
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

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
function fizzBuzz(arrayDeNumeros) {
  let resultado = [];
  for (index of arrayDeNumeros) {
    if (index % 3 === 0 && index % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (index % 3 === 0) {
      resultado.push('fizz');
    } else if (index % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(string) {
  let resultado = '';
  for (index of string) {
    if (index === 'a') {
      resultado += '1';
    } else if (index === 'e') {
      resultado += '2';
    } else if (index === 'i') {
      resultado += '3';
    } else if (index === 'o') {
      resultado += '4';
    } else if (index === 'u') {
      resultado += '5';
    } else if (index === ' ') {
      resultado += ' ';
    } else {
      resultado += index;
    }
  }
  return resultado;
}

function decode(string) {
  let resultado = '';
  for (index of string) {
    if (index === '1') {
      resultado += 'a';
    } else if (index === '2') {
      resultado += 'e';
    } else if (index === '3') {
      resultado += 'i';
    } else if (index === '4') {
      resultado += 'o';
    } else if (index === '5') {
      resultado += 'u';
    } else if (index === ' ') {
      resultado += ' ';
    } else {
      resultado += index;
    }
  }
  return resultado;
}

// Desafio 10
function techList(stringTech, nome) {
  let ordenando = stringTech.sort();
  let nomeTech = [];
  let resultado;
  for (let index = 0; index < ordenando.length; index += 1) {
    nomeTech.push({ name: nome, tech: stringTech[index] });
  }
  if (nomeTech.length < 4) {
    resultado = 'Vazio!';
  } else {
    resultado = nomeTech;
  }
  return resultado;
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

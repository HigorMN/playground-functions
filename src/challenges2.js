// Desafio 11
function generatePhoneNumber(numeros) {
  let contarNumero = 0;
  let numerosRepitidos = 0;
  let menor0 = 0;
  let maior9 = 0;
  let dDD = '';
  let telFirst5 = '';
  let telEnd4 = '';
  let resultado;
  for (let index = 0; index < numeros[1]; index += 1) {
    dDD += numeros[index];
    if (numeros[index] < 0) {
      menor0 = numeros[index];
    } else if (numeros[index] > 9) {
      maior9 = numeros[index];
    }
  }
  for (let index2 = 2; index2 <= numeros[6]; index2 += 1) {
    telFirst5 += numeros[index2];
    if (numeros[index2] < 0) {
      menor0 = numeros[index2];
    } else if (numeros[index2] > 9) {
      maior9 = numeros[index2];
    } else if (telFirst5.length >= 6) {
      telFirst5 = telFirst5.substring(0, telFirst5.length - 1);
    }
  }
  for (let index3 = 7; index3 < numeros.length; index3 += 1) {
    telEnd4 += numeros[index3];
    if (numeros[index3] < 0) {
      menor0 = numeros[index3];
    } else if (numeros[index3] > 9) {
      maior9 = numeros[index3];
    }
  }
  for (index4 in numeros) {
    let numeroIndex = numeros[index4];
    for (index5 in numeros) {
      if (numeroIndex === numeros[index5]) {
        numerosRepitidos += 1;
      }
    }
    if (numerosRepitidos > contarNumero) {
      contarNumero = numerosRepitidos;
    }
    numerosRepitidos = 0;
  }
  if (numeros.length !== 11) {
    resultado = 'Array com tamanho incorreto.';
  } else if (menor0 < 0) {
    resultado = 'não é possível gerar um número de telefone com esses valores';
  } else if (maior9 > 9) {
    resultado = 'não é possível gerar um número de telefone com esses valores';
  } else if (contarNumero >= 3) {
    resultado = 'não é possível gerar um número de telefone com esses valores';
  } else {
    resultado = '(' + dDD + ') ' + telFirst5 + '-' + telEnd4;
  }
  return resultado;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let resultado;
  if (lineA + lineB < lineC || lineC + lineB < lineA || lineA + lineC < lineA) {
    resultado = false;
  } else if (Math.abs(lineA - lineB) > lineC || Math.abs(lineC - lineB) > lineA || Math.abs(lineA - lineC) > lineA) {
    resultado = false;
  } else {
    resultado = true;
  }
  return resultado;
}

console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(string) {
  let total = 0;
  let resultado;
  if (string.match(/\d+/g)) {
    for (let index = 0; index < string.match(/\d+/g).length; index += 1) {
      total += parseInt(string.match(/\d+/g)[index], 10);
    }
    if (total === 0) {
      resultado = 'Vazio!';
    } else if (total === 1) {
      resultado = `${total} copo de água`;
    } else {
      resultado = `${total} copos de água`;
    }
  }
  return resultado;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

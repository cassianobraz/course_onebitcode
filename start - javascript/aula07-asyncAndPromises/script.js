// console.log("Script iniciado");

// setTimeout(() => {
//   console.log("após 3 segundo");
// }, 3 * 1000);
// let contador = 1;

// const intervalId = setInterval(() => {
//   console.log(`Executando ${contador} vezes após 2 segundos`);
//   contador++;
//   if (contador >= 6) {
//     //! Parar o Time
//     clearInterval(intervalId);
//   }
// }, 2 * 1000);

// console.log("Script finalizado");
//* Promise tem 4 estados: pendente, resolvida, rejeitada ou finalizada

// console.log("Iniciado");

// const minhaPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Executando a promise...");
//     resolve("Promise resolvida");
//   }, 3 * 1000);
// });

// minhaPromise.then((resultado) => {
//   console.log(resultado);
// });

// console.log(minhaPromise);
// console.log("Finalizado");

//! forma de usar a Promise
// function somaAssincrona(a, b) {
//   return new Promise(function (resolve, reject) {
//     const numA = parseFloat(a);
//     const numB = parseFloat(b);

//     if (isNaN(numA) || isNaN(numB)) {
//       reject("Números inválidos!");
//     } else {
//       resolve(numA + numB);
//     }
//   });
// }

// somaAssincrona(3, 7)
//   .then(function (resultado) {
//     console.log(resultado);
//   })
//   .catch((motivo) => {
//     console.log(motivo);
//   })
//   .finally(() => {
//     console.log("Promise finalizada");
//   });

// console.log("finalizado");

//* Async await

function somaAssincrona(a, b) {
  return new Promise(function (resolve, reject) {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      reject("Números inválidos!");
    } else {
      resolve(numA + numB);
    }
  });
}

async function somaAsync(a, b) {
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  return numA + numB;
}

const resultado = somaAsync(3, 7);
console.log(resultado);
console.log("finalizado");

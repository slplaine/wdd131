// Declarações de variáveis
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// For loop para percorrer o array
for (let i = 0; i < studentReport.length; i++) {
  // Verifica se o valor atual é menor que LIMIT (30)
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]); // imprime no console
  }
}
// Fim do código
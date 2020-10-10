// var nao eh nomeacao ideal para variaveis em JS desde ES6, ideal eh let.
let name = 'Matheus'; // let cria a variavel
console.log(name);

const interestRate = 0.3; // Variaveis const nao podem ser redefinidas.
//interestRate = 1;
console.log(interestRate);
// Caso precisa variar o valor de uma variavel, deve-se usar let, caso contrario, usar const.

// Tipos de variaveis em JS
let name = 'Matheus';  // String Literal 
let age = 30;  // Number Literal
let isApproved = true;  // Boolean Literal
let firstName = undefined;  // Valor implicito de uma variavel indefinida
let selectedColor = null;  // Util para explicitamente limpar o valor de uma variavel.
// Obs; selectedColor eh um objeto.
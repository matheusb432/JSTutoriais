// Sintaxe de uma função em JS => function nome(parametros) {  }
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

function square(number){
    return number * number;
}


let result = square(4);
console.log(result);


/* Calculadorazinha com variavel global var result
// Obs; declarando variaveis implicitamente sao declaradas como globais/var tambem.
var result;
function calculate(num1, num2, op){
    if(op === '+'){
        result = num1 + num2;
    }
    else if(op === '-'){
        result = num1 - num2;
    }
    else if(op === '*'){
        result = num1 * num2;
    }
    else if(op === '/'){
        result = num1 / num2;
    }
    else{
        console.log('Invalid input');
    }
}
calculate(5, 10, 'x');
console.log(result);
*/

// Value Types = Number , String , Boolean , Symbol , undefined , null
// Reference Types = Object , Function , Array

let x = {value:10};
let y = x;

x.value = 20;
// y.value printa 20, pois esta apontando para o mesmo endereco que x.value
// Nota-se que isso é uma propriedade de ponteiros basicamente.
console.log(y.value);

let number = 10;

function increase(number){
    number++;
}
// O parametro number de function nao o mesmo que let number
increase(number);
console.log(number);


let obj = {value: 10};

function increase(obj){
    obj.value++;
}

// Como o objeto aponta para obj.value, esse método incrementará globalmente obj.value
increase(obj);
console.log(obj);
let name = 'Mosh';
let age = 30;
// Sintaxe => var/let/const objeto = {  atributos,atributos, ... };
let person = {  // Declarando um objeto, ou Object Literal
    name: 'Mosh',
    age: 30
};  // objeto person com duas propriedades/atributos.

// Dot Notation
person.name = 'Homie';  // Chamando a propriedade name do objeto person

// Bracket Notation
let selection = 'name';
person[selection] = 'Mary';  // Mesmo que person.name
// Com a bracket notation eh possivel selecionar atributos de forma dinâmica.
person['age'] = 25;  // Mesmo que person.age

console.log(person); // Printando as propriedades desse objeto.
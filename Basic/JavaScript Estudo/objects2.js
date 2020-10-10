// Objetos em Javascript === Dicionários em Python

let student = {
    first: 'Matheus',
    last: 'Bastos',
    age: 20,
    height: 181,
    studentInfo: function(){
        return this.first + ' ' + this.last + "\n" + this.age; // Chamando dois atributos desse(this) objeto.
    } // this.atributo eh o equivalente de self.atributo em Python
};

console.log(student.first);
console.log(student['last']);   // Sintaxe => student["atributo"]
console.log(student["age"]);    // Tanto faz se usar ' ' ou " "
student.age++;  // Incrementação funciona igual a em C
console.log(student['age']);

console.log(student.studentInfo());
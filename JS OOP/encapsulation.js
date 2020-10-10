let baseSalary = 30_000;
let overtime = 10;
let rate = 20;
// Exemplo em programacao estrutural
function getWage(baseSalary, overtime, rate){
    return baseSalary + (overtime * rate);
}
// Exemplo em programacao encapsulada
// Quantos menos parametros a funcao tem, mais facil se torna a manutenção da mesma.
let employee = {
    baseSalary: 30_000,  // Os parametros sao organizadas como
    overtime: 10,        // propriedadaes do objeto.
    rate: 20,
    getWage: function(){ // Essa funcao nao tem parametros.
        return this.baseSalary + (this.overtime * this.rate);
    }   // Pegando as 3 propriedades de employee com this.x
};
employee.getWage();

console.log(employee.getWage());
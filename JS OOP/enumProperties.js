
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(10);

// Percorrendo os valores de um objeto
for(let key in circle){
    // se o tipo da propriedade circle[key] nao for funcao
    if(typeof circle[key] !== 'function')
     console.log(key, circle[key]); 
   // Nome das propriedades (key) e os valores das propriedades (circle[key])
}

// Guardando as propriedades de um objeto (circle) em um array arrayy
const arrayy = Object.keys(circle);
// Sintaxe Object.keys(objeto);
console.log(arrayy);

// verificando se existe uma propriedade com nome radius no objeto circle
if('radius' in circle)
  console.log('Circle has a radius');
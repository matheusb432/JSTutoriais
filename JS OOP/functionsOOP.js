// No javascript , funções são objetos.
function Circle(radius){
    this.radius = radius;
    this.draw = function(){ // Definindo um metodo
        console.log('draw');
    }
}
/* Uma função quando declarada é internamente representada como o código abaixo.
const Circle1 = new Function('radius', `this.radius = radius;
this.draw = function(){
    console.log('draw');
}
`);

const circle = new Circle1(1);
*/
// Isso equivale a new Circle(1)
Circle.call({}, 5);
// apply serve para utilizar arrays como argumentos qnd se define um objeto
Circle.apply({}, [1, 2, 3]);


const another = new Circle(1);

console.log(another)
// Factory Function (Tipo uma classe aparentemente)
function createCircle(radius){
    return {
        radius, // Mesmo que radius: radius
        draw: function(){ // Definindo um método
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
circle.draw();

// Constructor Function
function Circle(radius){
    // this. é uma referência ao objeto que está executando esse código, tipo como self. em Python
    // console.log('this', this); mostra Circle {} no console.
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
    // return this; está implícito nessa função.
}

// Classe em javascript
class Square
{
    constructor(side){
        this.side = side;
        }

        get area(){
            return this.calculaArea();
        }
        calculaArea(){
            return this.side * this.side;
        }
    
}

const squareySquare = new Square(4);
console.log(squareySquare);
const getArea = squareySquare.area;
console.log(getArea);

// definindo o objeto another com new Circle, sintaxe => const objeto = new Constructor(parametros);
// O operador 'new' basicamente cria um objeto vazio ( Nesse caso Circle {} )
const another = new Circle(1);
// sintaxe igual a como instanciar uma classe em objeto com C#
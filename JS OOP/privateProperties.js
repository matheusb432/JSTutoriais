// Abstraction -> Hide the details, show the essentials
function Circle(radius){
    // Declarando uma variavel local no objeto Circle, nao esta no escopo global
    // let color = 'red';

    this.radius = radius;

    // this.defaultLocation = {x: 0, y: 0};
    // declarando defaultLocation com let deixa o objeto privado, fora do acesso do usuario
    let defaultLocation = { x:0, y:0 };
    // Assim, defaultLocation eh uma private property / propriedade privada. 

    let computeOptimumLocation = function(factor){
        
    }

    this.draw = function(){
        computeOptimumLocation(0.1);
        // defaultLocation
        // this.radius

        console.log('draw');
    }
}

const circle = new Circle(10);

// circle. so visualiza radius e draw, pois defaultLocation e computeOptimumLocation nao estao em escopo global.


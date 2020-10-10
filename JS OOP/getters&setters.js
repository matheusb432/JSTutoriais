function Circle(radius){
    this.radius = radius;

    let defaultLocation = { x:0, y:0 };
  
    this.getDefaultLocation = function(){
        return defaultLocation;
    };

    this.draw = function(){
        console.log('draw');
    };
    // Usando Object.defineProperty para definir getters ou setters
    Object.defineProperty(this, 'defaultLocation', {
        get: function(){  
            return defaultLocation;
        },
        set: function(value){
            if(!value.x || !value.y) // se nao esta definindo defaultLocation.x ou defaultLocation.y, throw um erro
              throw new Error('Invalid location.'); 
            defaultLocation = value;
        }
        // get e set sao definicoes especiais do JS, get executa uma funcao com return enqnt set executa uma funcao void.
    })
}

const circle = new Circle(10);

circle.defaultLocation.x = 0;
//circle.getDefaultLocation();


function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(10);

// Adicionando uma nova propriedade para o objeto circle.
circle.location =  {x:1,
                    y:2,
                    drawee: function(){
                        console.log('hello there');
                    },
                    z:3
};
// obs; circle.location nesse caso se comporta como um objeto

// Com bracket notation pode se definir o nome da propriedade dinamicamente.
// Também é util quando o nome da propriedade tem caracteres especiais ou espaços
const propertyName = 'fly-beats';
circle[propertyName] = {x: 5};

// Chamando o método drawee() do objeto location do objeto circle 
// Da pra ver +/- o conceito de herança aqui aparentemente
circle.location.drawee();

// delete circle.location;


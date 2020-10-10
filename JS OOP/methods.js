const calculadora = {
    somar: function(){
        return 1+1;
    },
    duplicar: function(x){
        return x*2;
    }
}

// Só algo legal para observar, da pra armazenar métodos de objetos em variáveis.
const somar = calculadora.somar;
console.log(somar());
const duplicar = calculadora.duplicar;
console.log(duplicar(10));

// Funcao para achar o n-ésimo caractere de uma string name
function findCharacter(name, charNum){
    let targetCharacter = name[charNum - 1];
    if(targetCharacter === undefined){
        console.log('Invalid input');
    }
    else{
        console.log(targetCharacter);
    }
}

findCharacter("Math", 3); // Chamando essa funcao

let firstName = "Math";
let lastChar = firstName[firstName.length - 1];


console.log("String = " + firstName + "\nLast character of string = " + lastChar);
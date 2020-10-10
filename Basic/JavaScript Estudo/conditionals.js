// Conditionals, Control flows 
// If/else statements
var age = prompt('what is your age?');  // prompt pedira uma string como input
var status;

if( age >= 18 && age <= 35){
    status = 'target demo';
    console.log(status);
}
else{
    status = 'not my audience';
    console.log(status);
}

// Switch statements
// differentiate between weekday vs. weekend
var dayNum = prompt('What day is it (0-6)? ');  // Inicialmente prompt traz dayNum como string.
var dayID = parseInt(dayNum); // parseInt() ou parseFloat() converte strings para numbers.
var text;

switch(dayID){  
    case 0:  // Caso dayNum for 0, 5 ou 6, text sera weekend.
        text = 'Weekend';
        break;
    case 5:
        text = 'Weekend';
        break;
    case 6:
        text = 'Weekend';
        break;
    default:  // Caso contrario (mesmo que else) text sera weekday.
        text = 'Weekday';
}

console.log(text);
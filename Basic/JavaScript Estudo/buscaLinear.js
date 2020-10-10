let Arrayy = [1,2,3,44,5,10,6];
let index = 0;
let lengthyLength = 0;
while(Arrayy[index] !== undefined){
    console.log(Arrayy[index]);
    index++;
    lengthyLength++;
}

console.log(lengthyLength);
let greater;
for(let i =0;i<lengthyLength;i++){
    if(greater === undefined){
        greater = Arrayy[i];
    }
    else if(Arrayy[i] > greater){
        greater = Arrayy[i];
    }
}

console.log("The biggest number is " + greater);
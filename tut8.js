console.log('hey');
const age = 38;
const doesDrive = false;
//const varl = 34;

if (age!=19){
    console.log('Age is not 19')
}

 if(age !== 65){
     console.log('Age is not 65')
 } 

else{
    console.log('Age is not 19')
}

if (typeof varl !== 'undefined'){
    console.log('varl is defined')
}

else{
    console.log('varl not defined')
}

if (doesDrive|| age>18){
    console.log('you can drive')
}

else{
    console.log('you cannot drive')
}
 
console.log(age == 45? 'age is 45': 'age is not 45');

switch (age) {
    case 18:
        console.log('you are 18');
        break;
    case 28:
        console.log('you are 28');
        break;
    case 38:
        console.log('you are 38');
        break;
    default:
            console.log('you are unknown age');
        break;
}

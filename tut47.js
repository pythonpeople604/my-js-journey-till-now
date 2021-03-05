console.log('Hello')

let regex = /harryggdd/;
// lets look into metachracters symbols

//1. caret symbol^ = matches the string with start expression
regex = /^harr/;

//2. dollar symbol$ = matches the string with last expressions
regex = /ry$/

//3. dot symbol. = mathces anyone chracter
regex = /h.rry/;

//4. star symbol* = matches any 0 or more chracters
regex = /h*rry/;

//5. question symbol? = matches any optional expression 
regex = /ha?rryi?/

//6.
regex = /h\*arry/


let str = 'harry means codewith'

let result = regex.exec(str);
console.log('the result from exec is', result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`)
}
else{
    console.log(`The string ${str} does match the expression ${regex.source}`)
}
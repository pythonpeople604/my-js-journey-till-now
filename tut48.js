console.log('js')
// Regular expression
// Metachracter symbols

//const regex = /^h/i;
// Chractersets

let regex = /h[a-z]rry/;

regex = /h[^aty]rr/ //this is different carret symbol. it use to dos not match the expression

regex = /h[a-zA-Z]rr/

const str = 'hirrY bhai';

let result = regex.exec(str);
console.log('the result from exec is', result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`)
}
else{
    console.log(`The string ${str} does match the expression ${regex.source}`)
}
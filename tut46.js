console.log('hello');

let reg = /harry/g; // This is a regular expression literal in js
//reg = /harry/g; //g means global
//reg = /harry/i; // i means case insensitive

//console.log(reg);
//console.log(reg.source)
let s = 'This is great code with harry and great harry';
//functions to match expression

//1. exec() = this function will return an array for match or null for no match
let result = reg.exec(s);
//result = reg.exec(s);
//console.log(result) 
//result = reg.exec(s);
//console.log(result) ---> We can use multiple exec with global flag
//if (result) {
    //console.log(result)
    //console.log(result.input)
    //console.log(result.index)
//}
//2. test() = returns true or false
result = reg.test(s)
//console.log(result) ---> This will only print if the 'reg' is there in the string 'a'

//3. match() = it will return a array of result or null
result = s.match(reg);
//console.log(result)
//result = reg.match(s) ---> This is wrong syntax

//4. search() = return index of first match else -1
result = s.search(reg);
//console.log(result);

//5. replace() = returns replaced string with all the replacements (if no global flag is given the first match will be replaced)
result = s.replace(reg, 'SHUBHAM')
console.log(result)
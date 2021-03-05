//Arrow Functions

//creating a regular function
//console.log('hello')
 //const harry = function h (){
    //console.log('this is the best function ever')
//}

// converting to arrow func
//harry()
//const harry = ()=>{
    //console.log('hey')
//}
//harry()

// One liners do not reqiure braces{} or return
//const greet =()=> "Good Morning"

// single parameters do not need  paranthesis but you will have to put paranthesis if there are multiple parameters.
const greet = (name, ending) => "Good Morning" + name + ending;

console.log(greet(' Divya', ' bye!'))
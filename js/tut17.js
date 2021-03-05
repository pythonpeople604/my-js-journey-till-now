console.log('hello');

document.getElementById('heading').addEventListener('click', function(e){
    let variable;
console.log('you have clicked the heading');
variable = e.target;
variable = e.target.className;
variable =  Array.from(e.target.classList);
variable = e.target.id;
//variable = e.offsetY
variable = e.clientX
console.log(variable);
});
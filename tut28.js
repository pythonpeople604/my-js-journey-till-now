console.log('hello');


//0bject literal : object.prototype
let obj = {
    name: "divya",
    Channel: "Devil divgamer",
    address: "Indore"
}
function Obj(givenName){
    this.name = givenName
}
Obj.prototype.setName = function(newName) {
    this.name = newName;
}

let obj2 = new Obj("divya");
console.log(obj);
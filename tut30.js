console.log('hello');

const proto = {
    slogan: function(){
        return This `company is the best`;

    },
    changeName: function(Newname){
        this.name = Newname
    }
}

var harry = Object.create(proto);
harry.name = "harry";
harry.role = "programmer";
harry.changeName("divya")
//console.log(harry);

const harry1 = Object.create(proto, {
    name: {value: "divya", writable: true},
    role: {value: "programmer"}
})
harry1.changeName = ("harry")
//console.log(harry1)

function Employee(name, salary, expierence ){
    this.name = name;
    this.salary = salary;
    this.expierence = expierence;
};
Employee.prototype.slogan = function(){
        return This `company is the best. regards${this.name}`;

    }
    let harry2 = new Employee("harry", 3445555, "none");
    console.log(harry2Obj.slogan())



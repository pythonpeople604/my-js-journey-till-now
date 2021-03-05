console.log('hello')

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan(){
        return `I am ${this.name} and this company is the best`;
    }

    joiningYear(){
        return 2020 - this.experience;
        
    }

    static add(a, b){
        return a + b;
    }
}

//Divya = new Employee("Divya", 20 , "Division")
//console.log(Divya.joiningYear());
//console.log(Employee.add(34, 5));

class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, Language , github){
        super(givenName, givenExperience, givenDivision);
        this.Language = Language 
        this.github = github;
    }
     favouriteLanuage(){
        if (this.Language == 'Python' ){ 
            return 'Python'
        }
        else{
            return 'Javascript'
        }    
    }
    static multiply(a,b){
        return a*b;
    }
}
rohan = new Programmer('Rohan', 3, 'lays', 'Go', 'rohan420');
console.log(rohan)
console.log(rohan.favouriteLanuage());
console.log(Programmer.multiply(5, 7));
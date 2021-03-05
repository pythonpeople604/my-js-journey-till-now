console.log('hello');

// pretend that this response server
 const students = [
     {name: "harry", subject: "JavaScript"},
     {name: "Divya", subject: "Machine Learning"}
 ]

function enrollStudent(student, callback){
     setTimeout(function() {
         students.push(student);
         console.log('Student has been enrolled');
         callback();
     }, 1000);
 }

 function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
        })
        document.getElementById('students').innerHTML = str;
        console.log('Students has been fetched');
    },5000);
 }

let newStudent = {name:"sunny", subject:"python"}
 enrollStudent(newStudent, getStudents);
 getStudents();
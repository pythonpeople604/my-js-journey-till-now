console.log('hello');

// pretend that this is coming from response server
const students = [
    { name: "harry", subject: "JavaScript" },
    { name: "Divya", subject: "Machine Learning" }
]

function enrollStudent(student,) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log('Student has been enrolled');
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 1000);

    })

}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name}</li>`
        })
        document.getElementById('students').innerHTML = str;
        console.log('Students has been fetched');
    }, 5000);
}

let newStudent = { name: "sunny", subject: "python" }
enrollStudent(newStudent).then(function () {
    getStudents();
}).catch(function () {
    console.log('Some error occured')

})
 //getStudents();
 // inside then is resolve() and inside catch is reject()
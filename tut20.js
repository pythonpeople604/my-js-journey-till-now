console.log('hello')
let impArray = ['adrak', 'pyaz', 'bhindi'];

//add a key value under local storage
localStorage.setItem('Name', 'Divya')
localStorage.setItem('Name2', 'Rohan')
localStorage.setItem('sabzi', JSON.stringify(impArray));

//localStorage.clear();

//clear a particular key-value
//localStorage.clear('Name2');


//retrieve an item from local storage
let name = localStorage.getItem('Name2');
name = JSON.parse(localStorage.getItem('sabzi'));
console.log(name);


sessionStorage.setItem('sessionName', 'sDivya')
sessionStorage.setItem('sessionName2', 'sRohan')
sessionStorage.setItem('sessionsabzi', JSON.stringify(impArray));

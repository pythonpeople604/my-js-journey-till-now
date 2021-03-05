console.log('heloo');

// single element selector
let element = document.getElementById('myfirst');
// = element.childNodes
//element = element.parentNode;
element.style.color = 'red';
element.innerHTML = '<b>Devil divgamer</b>'
//console.log(element)
let sel = document.querySelector('div');
console.log(sel)
sel.style.color = 'green'


// multi element selector
let elems = document.getElementsByClassName('child');
 elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems);

Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = 'blue'
    
});
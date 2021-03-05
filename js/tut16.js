console.log('heeloo')
let element = document.createElement('li');
element.className = 'childu1';
element.id = 'createLi';
element.setAttribute('title', 'mytite');
element.innerHTML = '<b>hello this is created by divya</b>'

let ul = document.querySelector('ul.this')
ul.appendChild(element)
//console.log(element)

let elem2 = document.createElement('h3')
elem2.id = 'elem2'
elem2.className = 'elem2'
let tNode = document.createTextNode('this is a created by devil')
elem2.appendChild(tNode);

element.replaceWith(elem2)
let myul = document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
let pr = elem2.hasAttribute('href');
elem2.removeAttribute('id');

console.log(elem2,pr );


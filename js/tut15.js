console.log('this is tut15.js')
let cont = document.querySelector('.no');
cont = document.querySelector('.container');
let nodeName = cont.childNodes[1].nodeName;
//console.log(nodeName)
//console.log(cont.children);

//node types
// 1 element
// 2 attribute
// 3 text node
// 8 comment
// 9 document
// 10 doctype


let container = document.querySelector('div.container');
//console.log(container.children[1].children);
//console.log(container.childElementCount) // count of child elements

 console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling)

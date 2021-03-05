console.log('helloo')
//create a new element
let divElem = document.createElement('div');
let val = localStorage.getItem('text');
let text;
if (val == null) {
    text = document.createTextNode('this is my element. click to edit it');
}
else {
    text = document.createTextNode(val);
}
divElem.appendChild(text);

divElem.setAttribute('id', 'elem');
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px');
divElem.setAttribute('class', 'elem');

let container = document.querySelector('.container');
let first = document.getElementById('myfirst');
// insert the element before with id first
container.insertBefore(divElem, first);

console.log(divElem, container, first);

divElem.addEventListener('click', function name() {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if (noTextAreas == 0) {
        let html = elem.innerHTML
        divElem.innerHTML = `<textarea class="form-control textarea" id="Textarea" rows="3">${html}</textarea>`
    }
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function () {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.val);
    })
});



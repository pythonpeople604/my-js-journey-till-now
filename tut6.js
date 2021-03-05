
const name = 'divya';
const greeting = 'Good Morning ';
//console.log(greeting + name );

let html;
html =  "<h1> this is heading</h1>" + "<p> this is My para<p>";
//console.log(html);


 html = html.concat('this'); 
//console.log(html.toLowerCase());
console.log( html.lastIndexOf('>'));
console.log(html.charAt(0));
console.log(html.includes('g'));
console.log(html.substring(0,10));
console.log(html.slice(0, -4));
console.log(html.split(''));
console.log(html.replace('this, my'));

let fruits1 = 'orange\ ';
let fruits2 = 'apple';
let myHtml = `hello ${name}
              <h1> welcome to my website <h1>
              <p> you like ${fruits1} and ${fruits2}
              `;
             
document.body.innerHTML = myHtml;
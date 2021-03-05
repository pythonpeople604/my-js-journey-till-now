console.log('hey');
let marks = [13 , 15 , 17 , 19];
const fruits = ['orange', 'apple', 'orange'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23,123,21, 'orange' );
console.log(arr);
console.log(mixed);
console.log(fruits[0]);
console.log(Array.isArray('str'));
arr[0] = 'harry';
let arrelement = arr[0];
console.log(arr);




let value = marks.indexOf(13);
console.log(value)

marks.push(34);
console.log(marks);

marks.unshift(1008);
console.log(marks);

marks.pop(1008);
console.log(marks);

marks.splice(2,3);
console.log(marks);


let marks2 = [1, 2, 3, 4];
 marks = marks.concat(marks2);
console.log(marks2);

let myobj = {
    name: 'harry',
    channel: 'devil divgamer',
    isActive: true,
    marks: [1, 2, 3, 4]
}
console.log(myobj);
 console.log(myobj.isActive);
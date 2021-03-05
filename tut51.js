console.log('hello');

// Iterators

function fruitsIterators(values){
    let nextIndex = 0;
    return{
        next: function(){
            if (nextIndex < values.length){
                // we will return this object
                return{
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                return {done: true}
            }
        }
    }
}
const myArray = ['Apple', 'Grapes', 'Oranges', 'Bhindi'];
console.log('my array is ', myArray)

//using the iterators
const fruits = fruitsIterators(myArray);
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
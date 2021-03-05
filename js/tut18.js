//console.log('hello');
//let btn = document.getElementById('btn');
//btn.addEventListener('click', func1);
//btn.addEventListener('mousedown', func3);
//btn.addEventListener('dbclick', func2);
//function func1(e){
  //  console.log('thanks', e)
    //e.preventDefault();
//}
//function func2(e){
  //  console.log('thanks for the double click', e);
    //e.preventDefault();
    
//}

//function func3(e) {
  //  console.log('thanks its a mouse down', e)

//}

 //document.querySelector('.no').addEventListener('mouseenter',function name(){
 //    console.log('you entered no');
     
 //})

 //document.querySelector('.no').addEventListener('mouseleave',function name(){
//    console.log('you exited no');  
//})

document.querySelector('.container').addEventListener('mousemove',function name(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb( ${e.offsetX}, ${e.offsetY}, ${e.offsetX + e.offsetY})`;
    console.log('you triggered mpuse move event');
    
})
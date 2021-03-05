console.log('ajax');

 let fetchBtn = document.getElementById('fetchBtn');
 fetchBtn.addEventListener('click', buttonClickHandler);
function buttonClickHandler() {
    console.log('You have clicked the fetchBtn');

    // instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // open the object
    //xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type','application/json');


    // what to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On progress');
    }

   // xhr.onreadystatechange = function(){
        //console.log('Ready state is', xhr.readyState);
    //}

    //What to do when response in ready
    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText)
        }
        else{
            console.error('something error occured')
        }
    }
    // send the request
    params = `{"name":"test3535","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log('we are done!')
}

let popBtn = document.getElementById('fetchBtn');
 fetchBtn.addEventListener('click', );
console.log('hello')

// Pretend coming from a server as response
let a = 'harry bhai';
a = undefined;
if (a != undefined){
    throw new Error ('This is not undefined');
}
else{
    console.log('This is undefined')
}
try {
    //jsdhfgffhf
    console.log('We are inside try block');
    //functionHarry();
    
} catch (error) {
    console.log('This is a error')
    console.log(error.message);
} finally{
    console.log('Finally we will run this');
}


console.log('This is project 4');

const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('whyFavouritegame')
let validEmail = false;
let validPhone = false;
let validUser = false;

//console.log(name, email, phone);
name.addEventListener('blur', () => {
    console.log('name is blurred');
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){4,20}$/;
    let str = name.value;
    console.log(regex, str)
    if (regex.test(str)) {
        console.log('your name is valid')
        name.classList.remove('is-invalid')
        validUser = true;
    }
    else {
        console.log('your name is not valid')
        name.classList.add('is-invalid')
        validUser = false;
    }

})


email.addEventListener('blur', () => {
    console.log('email is blurred');
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str)
    if (regex.test(str)) {
        console.log('your email is valid')
        email.classList.remove('is-invalid')
        validEmail = true;
    }
    else {
        console.log('your email is not valid')
        email.classList.add('is-invalid')
        validEmail = false;
    }
})


phone.addEventListener('blur', () => {
    console.log('favourite game section  is blurred');
    //Validate favourite game section here
    let regex = /[a-zA-Z]{10,150}/;
    let str = phone.value;
    console.log(regex, str)
    if (regex.test(str)) {
        console.log('you are done')
        phone.classList.remove('is-invalid')
        validPhone = true;
    }
    else {
        console.log('you are not done')
        phone.classList.add('is-invalid')
        validPhone = false;
    }

})
let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault
    
    console.log('you clicked submit button');
    console.log('validEmail, validUser, validPhone')
    //Submit your form here
    if (validEmail && validPhone && validUser) {
        console.log('Phone, email and user are valid. Submitting the form')
        let success = document.getElementById('success')
        $('#failure').hide();
        $('#success').show();
        
    }
    else {
        console.log('One out of Phone, email and user is not valid. Hence not submitting the form. plz correct the errors and try again.')
        //let failure = document.getElementById('failure')
        //failure.classList.add('show');
        //success.classList.remove('show')
        //$('#success').alert('hide')
        $('#success').hide();
        $('#failure').show();
    }


})
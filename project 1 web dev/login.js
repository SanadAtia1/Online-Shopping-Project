const email = document.querySelector('#email')
const password = document.querySelector('#password')
const button = document.querySelector('#btnItem')

button.addEventListener('click',() => { 
    if (email.value == '' || email.value == null){
        event.preventDefault()
        email.style.borderColor = "red";
        password.style.borderColor = "red";

    }

    else if (password.value == '' || password.value == null){
        event.preventDefault()
        password.style.borderColor = "red";
    }
    else {
        email.style.borderColor = ""; // Reset to normal
        password.style.borderColor = ""; 
    }
    
})
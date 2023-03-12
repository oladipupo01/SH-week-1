
function showError(errorElement, errorMessage){
    document.querySelector("."+errorElement).classList.add("display.error");
    document.querySelector("."+errorElement).innerHTML = errorMessage;
}

function clearError(){
    let errors = document.querySelectorAll(".error")
    for(let error of errors){
        error.classList.remove("display.error")
    }
}

let form = document.forms['sign-up-form'];
form.onsubmit = function(event){

    clearError();

    if(form.email.value === ""){
        showError("email-error", "You have to enter an email");
        return false;
    }

    if(form.fullname.value === ""){
        showError("fullname-error", "You have to enter your fullname");
        return false;
    }

    if(form.phonenumber.value === ""){
        showError("phonenumber-error", "You have to enter a phone number");
        return false;
    }

    if(form.password.value === ""){
        showError("password-error", "You have to enter a password");
        return false;
    }

    document.querySelector(".success").classList.add("display.success");
    document.querySelector(".success").innerHTML = "Your registration was successful.";





    event.preventDefault();
}
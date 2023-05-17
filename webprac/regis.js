const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const button = document.querySelector(".formbutton");

button.addEventListener("click", function (e) {
    e.preventDefault();

    handleLogin();
});



localStorage.setItem("isFlagSet", "true");

// const flagValue = localStorage.getItem("isFlagSet");
// console.log(flagValue);

const isSignedIn = checkSignInStatus();

function checkSignInStatus() {
    return localStorage.getItem("isFlagSet") === "true";
}

function handleLogin() {
    if (isSignedIn) {
        window.location.href = "login.html"
    }
}



form.addEventListener("submit", function (e) {
    e.preventDefault();

    checkRequired([username, email, password, confirmPassword]);

    SaveData(username.value, email.value, password.value, confirmPassword.value);

});

function SaveData(usernameText, emailText, passwordText, confirmPasswordText) {
    //console.log(usernameText,emailText,passwordText);

    if (!localStorage.getItem("username")) {
        localStorage.setItem("username", usernameText);
    }

    localStorage.setItem("email", emailText);
    localStorage.setItem("password", passwordText);
    localStorage.setItem("confirmPassword", confirmPasswordText);
}

function getFieldName(input) {
    return input.id.charAt(0) + input.id.slice(1);
}

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim().length == 0) {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });


    if (password.value !== confirmPassword.value) {
        showError(confirmPassword, "password do not match");
    }

}

function showError(input, message) {
    // input.style.borderColor = "red";
    const formControl = input.parentElement;
    formControl.className = "form-feild error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}



function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-feild success";
}



// function calculateSum(num){

//     let sum = 0;

//     for(let i = 1; i <= num; i++ ){
//         if(i % 3 == 0 || i % 5 ==0){
//             sum = sum + i;
//         } 
//     }
//     return sum;
// }
// console.log(calculateSum(10));
// console.log(calculateSum(15));



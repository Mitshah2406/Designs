let emailField = document.getElementById('emailField');
let wrapper = document.querySelector('.wrapper');
let passField = document.getElementById('passField');
let emailError = document.getElementById('emailError');
let passError = document.getElementById('passError');
let email = document.getElementById('email');
let password = document.getElementById('password');
let errorTxtEmail = document.getElementById('errorTxtEmail');
let errorTxtPassword = document.getElementById('errorTxtPass');
let submitButton = document.getElementById('submit');
let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let validemail = false;
let validpass = false;
let validBoth = false;


function eEvent() {
    let value = email.value;
    let test = regex.test(value);
    if (test) {
        emailError.style.display = 'none';
        errorTxtEmail.style.display = 'none';
        email.classList.remove('error')
        validemail = true;
    }
    else {

        emailError.style.display = 'block';
        errorTxtEmail.style.display = 'block';
        email.classList.add('error')
        emailField.classList.add('shake');
        setTimeout(function () {
            passField.classList.remove('shake')
        }, 1000)
        validemail = false;
    }

}


function pEvent() {
    let value = password.value;
    if (value != "" && value != " ") {
        passError.style.display = 'none';
        errorTxtPassword.style.display = 'none';
        password.classList.remove('error')
        validpass = true;
    }
    else {
        passError.style.display = 'block';
        errorTxtPassword.style.display = 'block';
        password.classList.add('error')
        passField.classList.add('shake');
        setTimeout(function () {
            passField.classList.remove('shake');
        }, 1000)
        validpass = false;
    }
}



// function bothFalse(e) {
//     e.preventDefault();
//     let value1 = email.value;
//     let value2 = password.value;
//     let test1 = regex.test(value1);
//     if ((test1) && (value2 != "") && (value2 != " ")) {
//         emailError.style.display = 'none';
//         errorTxtEmail.style.display = 'none';
//         passError.style.display = 'none';
//         errorTxtPassword.style.display = 'none';
//         password.classList.remove('error')
//         email.classList.remove('error')
//         validBoth = true;
//     }
//     else {
//         emailError.style.display = 'block';
//         errorTxtEmail.style.display = 'block';
//         passError.style.display = 'block';
//         errorTxtPassword.style.display = 'block';
//         password.classList.add('error')
//         email.classList.add('error')
//         passField.classList.add('shake');
//         emailField.classList.add('shake');
//         setTimeout(function () {
//             passField.classList.remove('shake')
//             passField.classList.remove('shake');
//         }, 1000)

//         validBoth = false;
//     }
// }

submitButton.onclick = function (e) {
    e.preventDefault();
    if ((validpass == true) && (validemail == true)) {
        wrapper.innerHTML = `<header>Logged In SuccessFully</header>`;
        setTimeout(function () {
            wrapper.innerHTML = ` <header>Login Form</header>
            <form action="#">
                <div class="field email ">
                    <div class="input-field" id="emailField">
                        <input type="text" name="email" id="email" placeholder="Enter Your Email Address">
                        <i class="icon fas fa-envelope" id="emailEnvelope"></i>
                        <i class="error-icon fas fa-exclamation-circle" id="emailError"></i>
                    </div>
                    <div class="errorTxt" id="errorTxtEmail">Email Can't Be Blank And Should Be Valid.</div>
                </div>
                <div class="field password">
                    <div class="input-field" id="passField">
                        <input type="password" name="password" id="password" placeholder="Enter your password">
                        <i class="icon fas fa-lock" id="passwordLock"></i>
                        <i class="error-icon fas fa-exclamation-circle" id="passError"></i>
                    </div>
                    <div class="errorTxt" id="errorTxtPass">
                        Password Can't Be Blank Or HAve WhiteSpaces.
                    </div>
                </div>
                  <div class="pass-link"><a href="#">Forgot Password ?</a></div>  
                  <input type="submit" value="Log In" id="submit" class="submit">
            </form>
            <div class="signup-link">Not Yet A Member? <a href="#">Sign Up</a> </div>`
        }, 3000)
    }
    else{
        eEvent();
        pEvent();
    }
}
email.addEventListener('keyup', eEvent);
password.addEventListener('keyup', pEvent);
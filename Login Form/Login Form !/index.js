let username = document.getElementById('username');
let password = document.getElementById('password');
let regexUsername = /^ (?=[a-z_\d]*[a-z])[a-z_\d]{6,}$/
//uppercase or lowercase letters containing underscore with minimum 6 charcaters
let regexPassword =/^ (?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
// Minimum eight characters, at least one letter, one number and one special character:
let formContainer = document.getElementById('formContainer');
let loginButton = document.getElementById('loginButton');
let view = document.getElementById('view');
let hidden = document.getElementById('hidden');
let errorUser = document.getElementById('errorUser');
let errorPassword = document.getElementById('errorPass');
let validate = false;
username.addEventListener('input', (e)=>{
    let value = e.target.value;
    let test = regexUsername.test(value);
    if(test){
        username.classList.remove('invalid');
        username.classList.remove('invalidPlaceholder');
        errorUser.innerHTML = "";
        validate = true;
    }
    else{
        username.classList.add('invalid');
        username.classList.add('invalidPlaceholder');
        errorUser.innerHTML = "Invalid Username! Should Contain minimum 6 characters with uppercase or lowercase letters and  _";
        validate = false;
    }
})
password.addEventListener('input', (e)=>{
    let value = e.target.value;
    let test = regexPassword.test(value);
    if(test){
        password.classList.remove('invalid');
        password.classList.remove('invalidPlaceholder');
        errorPassword.innerHTML = "";
        validate = true;
    }
    else{
        password.classList.add('invalid');
        password.classList.add('invalidPlaceholder');
        errorPassword.innerHTML = "Invalid password! Should Contain minimum 8 characters with at least 1 number, letter & 1 special character.";
        validate = false;
    }
})

loginButton.addEventListener('click', (e) => {
    console.log('clicked')
    e.preventDefault();
    if(validate){
        formContainer.innerHTML =`<p class="heading"><strong>Success!</strong> ${username.value} You Have Logged In!</p>`
        let back = setTimeout(() => {
            formContainer.innerHTML = ` 
            <div class="heading" id="heading">Sign In</div>
            <form action="" class="form" id="mainform">
                <div class="userContainer" id="userContainer">
                    <input type="text" name="username" id="username"
                        placeholder="Enter Your Username" class="in">
                        <i class="far fa-user icon"></i>
                    </div>
                    <p class="error" id="errorUser"></p>
                    <div class="passwordContainer" id="passwordContainer">
                        <input type="password" name="password" id="password"
                        placeholder='Enter your password' class="in">
                        <i class="fas fa-key icon"></i>
                        <i class="fas fa-eye img" id="view"></i>
                        <i class="fas fa-eye-slash img dNone" id="hidden"></i>
                    </div>
                    <p class="error" id="errorPass"></p>
                <div class="loginContainer">
                    <button id="loginButton">Login</button>
                </div>
            </form>
           `
        }, 3000)
    }
})

hidden.addEventListener('click', () => {
    password.setAttribute('type', 'text');
    hidden.classList.add('dNone')
    view.classList.remove('dNone')
    
    let reset = setTimeout(() => {
        password.setAttribute('type', 'password');
        hidden.classList.remove('dNone');
        view.classList.add('dNone');
    }, 3500)
})
view.addEventListener('click', () => {
    password.setAttribute('type', 'password');
    hidden.classList.remove('dNone');
    view.classList.add('dNone');
})
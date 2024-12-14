let userName = document.querySelector("#Name");
let displayMessage = document.querySelector("#Username");
let submit = document.querySelector("#submit");

// displayMessage.style.visibility = 'hidden';
submit.onclick = ()=>{
    checkUsername();
    checkEmail();
    checkPassward();
    CheckDoB();
    checkGender();
}
//----checking username------
function checkUsername (){ 
    if(userName.value == ""){
        displayMessage.style.visibility = 'visible';
        displayMessage.innerText = "username can't be empty";
    }else if(userName.value.length < 4){
        displayMessage.style.visibility = 'visible';
        displayMessage.innerText = "username is too Short!";
    }else if(userName.value.length > 15){
        displayMessage.style.visibility = 'visible';
        displayMessage.innerText = "username is too Long!";
    }else{
        
        UserNameExp = /^[a-zA-Z]+_*[0-9a-zA-Z@#$%<>._,?]*$/;
        let checked = UserNameExp.test(userName.value);

        if(!checked){
            displayMessage.style.visibility = 'visible';
            displayMessage.innerText = "Username must start with a letter and may contains numbers and special characters (@#$%<>._,?)"
        }else{
            displayMessage.style.visibility = 'hidden';
            displayMessage.innerText = ''
        }
    }
}
//-----checking email address--------

let email = document.querySelector("#email-id");
let emailDisplay = document.querySelector("#Email");
function checkEmail(){
    if(email.value == ""){
        emailDisplay.innerText = "Please Enter an Email address";
        emailDisplay.style.visibility = 'visible';
    }else{
        emailExp = /^[a-zA-Z]+[0-9a-zA-Z@#$%;<>_.,?&/\\]*@(gmail)\.([com|org])+$/;
        let emailChecked = emailExp.test(email.value);
        if(emailChecked){
            emailDisplay.innerText = "";
            emailDisplay.style.visibility = 'hidden';
        }else {
            emailDisplay.innerText = "Invalid Email!";
            emailDisplay.style.visibility = 'visible';
        }
    }
}

//---------checking password-----------

let password = document.querySelector("#passward");
let pass = document.querySelector("#pass");
function checkPassward(){
    if(password.value ===""){
        pass.innerText = "please enter a passward.";
        pass.style.visibility = 'visible';
    }else if(password.value.length < 6){
        pass.innerText = "password must be atleast 6 characters";
        pass.style.visibility = 'visible';
    }else{
        passwordExp = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#_$*%:!;<>.,?&/\\])/
        let passChecked = passwordExp.test(password.value)
        if(!passChecked){
            pass.innerText = "Password must contain a Lowercase,Uppercase,digit & a Special character";
            pass.style.visibility = 'visible';
        }else{
            pass.style.visibility = 'hidden'; 
        }
    }     
}

//-----checking dob
let DoB = document.querySelector('#DoB')
let dobMessage = document.querySelector('#dobMessage')
function CheckDoB(){
    if(DoB.value == ''){
        dobMessage.style.visibility = 'visible';
        dobMessage.innerText = 'please enter Date of Birth';
    }else{
        dobMessage.style.visibility = 'hidden';
        dobMessage.innerText = '';
    }
}
//--------check gender-----
let gender = document.querySelector('#gender');
let genderMessage = document.querySelector('#genDisplay');
function checkGender (){
    if(gender.value == ''){
        genderMessage.innerText= 'please select a gender';
        genderMessage.style.visibility = 'visible';
    }else{
        genderMessage.style.visibility = 'hidden';
        genderMessage.innerText= '';
    }
}
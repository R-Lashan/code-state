var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var register_btn = document.getElementById('register-btn');
var email_p = document.querySelector('.email-p');
var password_p = document.querySelector('.password-p');
var username_p = document.querySelector('.username-p');

register_btn.addEventListener('click', (e) => {
    e.preventDefault();
    var regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    var password_val = password.value;
    var usernameDb = localStorage.getItem('Username');
    var emailDb = localStorage.getItem('Email');
    var passwordDb = localStorage.getItem('Password')

    if(username.value === "" && email.value === "" && password.value === ""){
        username_p.innerHTML = "Username is empty";
        email_p.innerHTML = "Email is empty";
        password_p.innerHTML = "Password is empty";
    } else if(!regex.test(email.value)){
        email_p.innerHTML = "Invalid Email";
    } else if(password_val.length < 8){
        password_p.innerHTML = "Password shoud be at least of 8 characters";
    } else if(username.value === usernameDb && email.value === emailDb && password.value === passwordDb){
        alert("Account already exists")
    } else {
        localStorage.setItem('Username', username.value);
        localStorage.setItem('Email', email.value);
        localStorage.setItem('Password', password.value);
        email.value = '';
        username.value = '';
        password.value = '';
        username_p.innerHTML = "";
        email_p.innerHTML = "";
        password_p.innerHTML = "";
        alert('Your registration was succesful');
    }
}); 
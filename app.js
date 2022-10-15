window.onload = function() {
    var logout_btn = document.querySelector('.logout');
    var dp_acc_name = document.querySelector('.acc-name');

    if(localStorage.getItem('Username')){
        dp_acc_name.innerHTML = `HI ${localStorage.getItem('Username')},`;
        logout_btn.innerHTML = "Logout"
    } else {
        dp_acc_name.innerHTML = "";
    }

    logout_btn.addEventListener('click', () => {
        alert('Refresh your page')
        localStorage.setItem('Username', '');
        localStorage.setItem('Password', '');
        localStorage.setItem('Email', '');
    })
}

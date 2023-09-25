let userName = '';
let userPassword = '';
const userNameInput = document.getElementById('user_name');
userNameInput.addEventListener('input', function() {
    userName = userNameInput.value;
});

const userPasswordInput = document.getElementById('user_password');
userPasswordInput.addEventListener('input', function() {
  userPassword = userPasswordInput.value;
});

const btn = document.getElementById('login_btn');

btn.addEventListener('click', function() {
    // Perform actions when the login button is clicked
    console.log('Username:', userName);

    console.log("user password",userPassword)
    // window.location.href = `${__dirname}`

    // You can add further logic here, such as sending the username to the server for authentication.
});

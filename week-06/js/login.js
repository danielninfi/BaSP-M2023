window.onload = function (){

    // email

    var emailLogin = document.getElementById("emailLogin");
    var emailErrorMsg = document.getElementById("emailErrorMsg");

    var email = "example@email.com";
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailValid = false
    if (email.match(emailExpression)) {
        emailValid = true;
    } else {
        emailValid = false;
    }

    emailLogin.addEventListener('blur', function () {
        var email = emailLogin.value;
        for (var i = 0; i < email.length; i++) {
        }

        if (email.length < 9) {
            emailErrorMsg.classList.remove("correct");
            emailErrorMsg.classList.add("error");
            emailErrorMsg.textContent = "email format is not valid";
        }
    });

    emailLogin.onfocus = function () {
        emailErrorMsg.classList.remove("error");
        emailErrorMsg.classList.add("correct");
    };

    // password

    var passwordLogin = document.getElementById("passwordLogin");
    var passwordErrorMsg = document.getElementById("passwordErrorMsg");

    passwordLogin.addEventListener('blur', function () {
        var password = passwordLogin.value;
        var hasBigLetter = false;
        var hasSmallLetter = false;
        var hasNumber = false;
        for (var i = 0; i < password.length; i++) {
            var char = password.charAt(i);
            if (char >= "0" && char <= "9") {
                hasNumber = true;
            } else if (char === char.toUpperCase()) {
                hasBigLetter = true;
            } else if (char === char.toLowerCase()) {
                hasSmallLetter = true;
            }
        }

        if (!hasBigLetter || !hasSmallLetter || !hasNumber) {
            passwordErrorMsg.classList.remove("correct");
            passwordErrorMsg.classList.add("error");
            passwordErrorMsg.textContent = "this field needs at least one capital letter, one small letter and one number.";
        }

        if (password.length < 5) {
            passwordErrorMsg.classList.remove("correct");
            passwordErrorMsg.classList.add("error");
            passwordErrorMsg.textContent = "this field needs at least 8 letters";
            }
    });

    passwordLogin.onfocus = function () {
        passwordErrorMsg.classList.remove("error");
        passwordErrorMsg.classList.add("correct");
    };

/*
var passwordInput = document.getElementById('passwordLogin');
var showPasswordBtn = document.getElementById('show-password-btn');
var eyeImg = showPasswordBtn.querySelector('img');

showPasswordBtn.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeImg.src = '../../assets/ico/eye-open.png';
    eyeImg.alt = 'hide password';
    } else {
    passwordInput.type = 'password';
    eyeImg.src = '../../assets/ico/eye-closed.png';
    eyeImg.alt = 'show password';
    }
});
*/
}
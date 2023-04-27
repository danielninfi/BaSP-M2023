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

// register

    document.getElementById("login-button").addEventListener("click", function(event) {
        event.preventDefault();
        var email = document.getElementById("emailLogin").value;
        var password = document.getElementById("passwordLogin").value;
        var emailErrorMsg = document.getElementById("emailErrorMsg");
        var passwordErrorMsg = document.getElementById("passwordErrorMsg");

        var isValid = true;

        if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
            emailErrorMsg.textContent = "Please enter a valid email";
            isValid = false;
        } else {
            emailErrorMsg.textContent = "";
        }

        if (password.length < 8) {
            passwordErrorMsg.textContent = "Password must be at least 8 characters";
            isValid = false;
        } else {
            passwordErrorMsg.textContent = "";
        }

        if (isValid) {
            alert("Email: " + email + "\nPassword: " + password);
        } else {
            alert("Please fix the errors in the form");
        }
    });
}
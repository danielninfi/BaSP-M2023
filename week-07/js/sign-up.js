window.onload = function (){
    /*----------------------*/
    /*       Name          */
    /*--------------------*/

    var nameInput = document.getElementById('firstName');
    var nameError = document.getElementById('nameError');

    nameInput.addEventListener('blur', () => {
        var name = nameInput.value;
        var isValidName = true;

        for (var i = 0; i < name.length; i++) {
            var char = name.charAt(i);

            if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))) {
                isValidName = false;
                break;
            }
        }

        if (name.length < 3 || !isValidName) {
            nameError.classList.remove('correct');
            nameError.classList.add('error');
            nameError.textContent = 'The name must be at least 3 letters long and contain only letters';
        } else {
            nameError.textContent = '';
            nameError.classList.toggle('correct', true);
        }
    });

    nameInput.onfocus = function() {
    nameError.classList.remove('error');
    nameError.classList.add('correct');
    };

    /*----------------------*/
    /*      Last Name      */
    /*--------------------*/

    var lastNameInput = document.getElementById('lastName');
    var lastNameError = document.getElementById('lastNameMsg');

    lastNameInput.addEventListener('blur', () => {
        var lastName = lastNameInput.value;
        var isValidLastName = true;

        for (var i = 0; i < lastName.length; i++) {
            var char = lastName.charAt(i);

            if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))) {
                isValidLastName = false;
                break;
            }
        }

        if (lastName.length < 3 || !isValidLastName) {
            lastNameError.classList.remove('correct');
            lastNameError.classList.add('error');
            lastNameError.textContent = 'The last name must have at least 3 characters and only letters';
        } else if (/\d/.test(lastName)) {
            lastNameError.classList.remove('correct');
            lastNameError.classList.add('error');
            lastNameError.textContent = 'The last name cannot contain numbers';
        } else {
            lastNameError.textContent = '';
            lastNameError.classList.toggle('correct', true);
        }
    });

    lastNameInput.onfocus = function() {
        lastNameError.classList.remove('error');
        lastNameError.classList.add('correct');
    };

    /*----------------------*/
    /*         ID          */
    /*--------------------*/

    var idInput = document.getElementById("ident");
    var idMsg = document.getElementById("identMsg");
    var idValid = false;

    idInput.addEventListener('blur', function () {
        var number = idInput.value;

        if (number.length >= 7 && /^[0-9]+$/.test(number)) {
            idValid = true;
            idMsg.classList.add("correct");
            idMsg.classList.remove("error");
            idMsg.textContent = '';
        } else {
            idValid = false;
            idMsg.classList.add("error");
            idMsg.classList.remove("correct");
            idMsg.textContent = 'The ID must contain at least 7 digits and only numbers.';
        }
    });

    idInput.onfocus = function () {
        idMsg.classList.remove("error");
        idMsg.classList.remove("correct");
        idMsg.textContent = '';
    };

    // queda trabada la class correct

    /*----------------------*/
    /*     Birth Date      */
    /*--------------------*/

    var birthDateInput = document.querySelector('#birthDate');
    var birthDateMsg = document.querySelector('#birthDateMsg');

    birthDateInput.addEventListener('blur', function() {
        var birthDate = birthDateInput.value;

        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var currentMonth = currentDate.getMonth() + 1;
        var currentDay = currentDate.getDate();

        var birthMonth = parseInt(birthDate.substring(0,4));
        var birthDay = parseInt(birthDate.substring(5,7));
        var birthYear = parseInt(birthDate.substring(8,10));

        var age = currentYear - birthYear;
        if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
            age--;
        }

        var isValidBirthDate = true;
        if (birthDate === '') {
            isValidBirthDate = false;
        } else if (age < 12) {
            isValidBirthDate = false;
        }

        if (isValidBirthDate) {
            birthDateMsg.classList.add('correct');
            birthDateMsg.classList.remove('error');
            birthDateMsg.textContent = '';
        } else {
            birthDateMsg.classList.add('error');
            birthDateMsg.classList.remove('correct');
            birthDateMsg.textContent = 'You must be at least 12 years old to register';
        }
    });

    function convertMDY(date){
        var inputDate = new Date(date);
        var month = inputDate.getMonth();
        month++;
        if (month < 10) {
            month = '0' + month;
        }
        month = month.toString();
        var day = inputDate.getDate();
        day++;
        if (day < 10) {
            day = '0' + day;
        }
        day = day.toString();
        var year = inputDate.getFullYear().toString();
        date = month + '/' + day + '/' + year;
        return date;
    }

    /*----------------------*/
    /*     Phone Number    */
    /*--------------------*/

    var phoneInput = document.getElementById("phoneNumber");
    var phoneMsg = document.getElementById("phoneNumberMsg");

    phoneInput.addEventListener('blur', function () {
        var number = phoneInput.value;
        var phoneValid = true;
        for (var i = 0; i < number.length; i++) {
            if (isNaN(number.charAt(i))) {
                phoneValid = false;
                break;
            }
        }

        if (number.length < 10 || !phoneValid) {
            phoneMsg.classList.remove("correct");
            phoneMsg.classList.add("error");
            phoneMsg.textContent = "The phone number must contain only numbers and a minimum of 10 digits.";
        } else {
            phoneMsg.classList.remove("error");
            phoneMsg.classList.add("correct");
            phoneMsg.textContent = "";
        }
    });

    phoneInput.onfocus = function () {
        phoneMsg.classList.remove("error");
        phoneMsg.classList.add("correct");
    };

    /*----------------------*/
    /*       Address       */
    /*--------------------*/

    var addressInput = document.querySelector('#address');
    var addressMsg = document.querySelector('#addressMsg');

    addressInput.addEventListener('blur', function() {
        var address = addressInput.value;

        var isValidAddress = true;
        if (address.length < 6) {
            isValidAddress = false;
        } else {
            var hasSpace = false;
            for (var i = 0; i < address.length; i++) {
                var char = address.charAt(i);
                if (!(char >= '0' && char <= '9') &&
                    !(char >= 'A' && char <= 'Z') &&
                    !(char >= 'a' && char <= 'z')) {
                    if (char === ' ') {
                        hasSpace = true;
                    } else {
                        isValidAddress = false;
                        break;
                    }
                }
            }
            if (!hasSpace) {
                isValidAddress = false;
            }
        }

        if (isValidAddress) {
            addressMsg.classList.add('correct');
            addressMsg.classList.remove('error');
            addressMsg.textContent = '';
        } else {
            addressMsg.classList.add('error');
            addressMsg.classList.remove('correct');
            addressMsg.textContent = 'The address must contain at least 6 characters, a space between letters and numbers';
        }
    });

    /*----------------------*/
    /*       City          */
    /*--------------------*/

    var cityInput = document.querySelector('#city');
    var cityMsg = document.querySelector('#cityMsg');

    cityInput.addEventListener('blur', function() {
        var city = cityInput.value;

        var isValidCity = true;
        if (city.length < 3) {
            isValidCity = false;
        } else {
            for (var i = 0; i < city.length; i++) {
                var char = city.charAt(i);
                if (!(char >= '0' && char <= '9') &&
                    !(char >= 'A' && char <= 'Z') &&
                    !(char >= 'a' && char <= 'z') &&
                    !(char >= ' ')) {
                        isValidCity = false;
                        break;
                }
            }
        }

        if (isValidCity) {
            cityMsg.classList.add('correct');
            cityMsg.classList.remove('error');
            cityMsg.textContent = '';
        } else {
            cityMsg.classList.add('error');
            cityMsg.classList.remove('correct');
            cityMsg.textContent = 'The city must contain at least 3 characters';
        }
    });

    /*----------------------*/
    /*       Zip Code      */
    /*--------------------*/

    var zipInput = document.getElementById("zipCode");
    var zipMsg = document.getElementById("zipCodeMsg");
    var zipValid = false;

    zipInput.addEventListener('blur', function () {
        var zip = zipInput.value;
        zipValid = true;

        for (var i = 0; i < zip.length; i++) {
            var char = zip.charAt(i);

            if (isNaN(parseInt(char, 10))) {
                zipValid = false;
                break;
            }
        }

        if (zip.length < 4 || zip.length > 5 || !zipValid) {
            zipMsg.classList.remove("correct");
            zipMsg.classList.add("error");
            zipMsg.textContent = "must contain only numbers and between 4 to 5 characters";
        }
    });

    zipInput.onfocus = function () {
        zipMsg.classList.remove("error");
        zipMsg.classList.add("correct");
    };

    /*----------------------*/
    /*        Email        */
    /*--------------------*/

    var emailRegister = document.getElementById("email");
    var emailErrorMsg = document.getElementById("emailErrorMsg");

    var email = "example@email.com";
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailValid = false
    if (email.match(emailExpression)) {
        emailValid = true;
    } else {
        emailValid = false;
    }

    emailRegister.addEventListener('blur', function () {
        var email = emailRegister.value;
        for (var i = 0; i < email.length; i++) {
        }

        if (email.length < 9) {
            emailMsg.classList.remove("correct");
            emailMsg.classList.add("error");
            emailMsg.textContent = "email format is not valid";
        }
    });

    emailRegister.onfocus = function () {
        emailMsg.classList.remove("error");
        emailMsg.classList.add("correct");
    };

    /*---------------------*/
    /*      Password      */
    /*-------------------*/

    var passwordRegister = document.getElementById("passwordRegister");
    var passwordErrorMsg = document.getElementById("passwordMsg");

    passwordRegister.addEventListener('blur', function () {
        var password = passwordRegister.value;
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
            passwordMsg.classList.remove("correct");
            passwordMsg.classList.add("error");
            passwordMsg.textContent = "this field needs at least one capital letter, one small letter and one number.";
        }

        if (password.length < 8) {
            passwordMsg.classList.remove("correct");
            passwordMsg.classList.add("error");
            passwordMsg.textContent = "this field needs at least 8 letters";
            }
    });

    passwordRegister.onfocus = function () {
        passwordMsg.classList.remove("error");
        passwordMsg.classList.add("correct");
    };

    /*----------------------*/
    /*   Repeat password   */
    /*--------------------*/

    var repeatPasswordInput = document.getElementById('repeatPassword');
    var passwordInput = document.getElementById('passwordRegister');

    repeatPasswordInput.onblur = function () {
        var password = passwordInput.value;
        var repeatPassword = repeatPasswordInput.value;
        if (repeatPassword !== password || repeatPassword.length === 0) {
        repeatPasswordErrorMsg.classList.remove("correct");
        repeatPasswordErrorMsg.classList.add("error");
        repeatPasswordErrorMsg.textContent = "passwords do not match";
        }
    };

    repeatPasswordInput.onfocus = function () {
        repeatPasswordErrorMsg.classList.remove("error");
        repeatPasswordErrorMsg.classList.add("correct");
    };

    /*******************************/
    /*          week - 07         */
    /*****************************/

    var submitRegister = document.getElementById("submitForm");

    submitRegister.onclick = function() {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var ident = document.getElementById("ident").value;
        var birthDate = document.getElementById("birthDate").value;
        var phoneNumber = document.getElementById("phoneNumber").value;
        var address = document.getElementById("address").value;
        var city = document.getElementById("city").value;
        var zipCode = document.getElementById("zipCode").value;
        var password = document.getElementById("passwordRegister").value;
        var passwordRepeat = document.getElementById("repeatPassword").value;
        var isValid = true;

        if (firstName == "") {
            alert("Please enter a first name");
            isValid = false;
        }
        if (lastName == "") {
            alert("Please enter a last name");
            isValid = false;
        }
        if (ident == "") {
            alert("Please enter an ID");
            isValid = false;
        }
        if (birthDate == "") {
            alert("Please enter a birth date");
            isValid = false;
        }
        if (phoneNumber == "") {
            alert("Please enter a phone number");
            isValid = false;
        }
        if (address == "") {
            alert("Please enter an address");
            isValid = false;
        }
        if (city == "") {
            alert("Please enter a city");
            isValid = false;
        }
        if (zipCode == "") {
            alert("Please enter a zip code");
            isValid = false;
        }

        if (isValid) {
            alert("Name: " + firstName + " " + lastName +
                "\nID: " + ident +
                "\nBirth Date: " + birthDate +
                "\nPhone Number: " + phoneNumber +
                "\nAddress: " + address +
                "\nCity: " + city +
                "\nZip Code: " + zipCode);
            document.getElementById("myForm").reset();
        }

        var url = "https://api-rest-server.vercel.app/signup";
        var queryParams = `?name=${firstName}&lastName=${lastName}&dni=${ident}&dob=${convertMDY(birthDate)}&phone=${phoneNumber}&address=${address}&city=${city}&zip=${zipCode}&email=${email}&password=${password}`;

        fetch(url + queryParams, {
            method: 'GET',
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (data.success == true){
                localStorage.setItem("userData", JSON.stringify(data.data));
                alert(`The request was successful. Info obtained:\n${data.msg}`);
            }
        })
        .catch((error) => {
            alert(`there was a mistake: ${error}`);
        })

    }

    var userData = localStorage.getItem("userData");

    function convertYMD(date){
        var inputDate = new Date(date);
        var month = inputDate.getMonth();
        month++;
        if (month < 10) {
            month = '0' + month;
        }
        month = month.toString();
        var day = inputDate.getDate();
        if (day < 10) {
            day = '0' + day;
        }
        day = day.toString();
        var year = inputDate.getFullYear().toString();
        date = year + '-' + month + '-' + day;
        return date;
    }

    if (userData !== null) {
        var data = JSON.parse(userData);

        document.getElementById("firstName").value = data.name;
        document.getElementById("lastName").value = data.lastName;
        document.getElementById("ident").value = data.dni;
        document.getElementById("birthDate").value = convertYMD(data.dob);
        document.getElementById("phoneNumber").value = data.phone;
        document.getElementById("address").value = data.address;
        document.getElementById("city").value = data.city;
        document.getElementById("zipCode").value = data.zip;
        document.getElementById("email").value = data.email;
        document.getElementById("passwordRegister").value = data.password;
        document.getElementById("repeatPassword").value = data.passwordRepeat;
    }

}
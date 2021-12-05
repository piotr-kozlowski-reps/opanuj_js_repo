document.addEventListener('DOMContentLoaded', () => {

    const nameSelector = document.querySelector('.name');
    const nameValidationSelector = document.querySelector('.name-validation');

    const emailSelector = document.querySelector('.email');
    const emailValidationSelector = document.querySelector('.email-validation');

    const passwordSelector = document.querySelector('.password');
    const passwordValidationSelector = document.querySelector('.password-validation');

    const passwordConfirmationSelector = document.querySelector('.password_confirmation');
    const passwordConfirmationValidationSelector = document.querySelector('.password_confirmation-validation');

    const rodoSelector = document.querySelector('.rodo');
    const rodoValidationSelector = document.querySelector('.rodo-validation');
    
    document.forms[0].addEventListener('submit', event => {

        event.preventDefault();

        const nameValue = event.target[0].value;
        const emailValue = event.target[1].value;
        const passwordValue = event.target[2].value;
        const passwordConfirmationValue = event.target[3].value;
        const rodoValue = event.target[4].checked;

        //validations
        const isNameValid = validateName(nameValue, nameSelector, nameValidationSelector);
        const isEmailValid = validateEmail(emailValue, emailSelector, emailValidationSelector);
        const isPasswordValid = validatePassword(passwordValue, passwordSelector, passwordValidationSelector);
        const isPasswordConfirmationValid = validatePasswordConfirmation(passwordConfirmationValue, passwordValue, passwordConfirmationSelector, passwordConfirmationValidationSelector);
        const isRodoValid = validateRodo(rodoValue, rodoValidationSelector);


        if(isNameValid && isEmailValid && isPasswordValid && isPasswordConfirmationValid && isRodoValid){

            const data = {
                name: nameValue,
                email: emailValue,
                password: passwordValue
            };

            submitData(data);
        }



    });



    function validateName(value, selector, validationSelector){
        const isValidated = /^[a-zA-Z]{2,}$/.test(value)
        manageValidationMessages(isValidated, selector, validationSelector);
        return isValidated;
    }
    
    function validateEmail(value, selector, validationSelector){
        const isValidated = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
        manageValidationMessages(isValidated, selector, validationSelector);
        return isValidated;
    }
    
    function validatePassword(value, selector, validationSelector){
        let isValidated = false;

        const hasWhiteSpaces = /\s+/.test(value);
        const isAtLeast8Characters = /.{8,}/.test(value);
        const hasCapitalLetter = /[A-Z]+/.test(value);
        const hasDigit = /\d+/.test(value);
        const hasSpecialCharacter = /[^A-Za-z 0-9]/.test(value);
        if(!hasWhiteSpaces && isAtLeast8Characters && hasCapitalLetter && hasDigit && hasSpecialCharacter) isValidated = true;

        manageValidationMessages(isValidated, selector, validationSelector);
        return isValidated;
    }
    
    function validatePasswordConfirmation(valueToBeConfirmed, password, selector, validationSelector){
        let isValidated = false;
        if(valueToBeConfirmed === password) isValidated = true;
        manageValidationMessages(isValidated, selector, validationSelector);
        return isValidated;
    }
    
    function validateRodo(value, validationSelector){
        
        if(value){
            validationSelector.classList.add('hidden');
        } else {
            validationSelector.classList.remove('hidden');
        }

        return value;
    }

    function manageValidationMessages(isValidated, selector, validationSelector){

        if(isValidated){
            selector.style.borderColor = '';
            validationSelector.classList.add('hidden');
        } else{
            selector.style.borderColor = 'red';
            validationSelector.classList.remove('hidden');
        }

    }


    function submitData(data){

        fetch('https://przeprogramowani.pl/projekt-walidacja', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            if(response.ok){
                return response.text()
            }
            throw 'Nie udało się wysłać formularza!'
        })
        .then(responseText => {
            console.log(responseText);
        })
        .catch(err => {
            alert('Spróbuj ponownie')
        })

    }






})
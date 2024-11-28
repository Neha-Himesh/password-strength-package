var passwordSuggestions = require('./password_suggestions');

function checkStrength(password){
   
    var passwordReview = {
        booleanValue: "",
        strength: "",
        suggestions: [],
    }
    var totalIfCases = 0;
    var passwordStrengthCount = 0;

    //Checking if length is atleast 8 characters
    if ((/^.{8,}$/).test(password)){
        passwordStrengthCount ++;
        totalIfCases ++;
    } else {
        passwordReview.suggestions.push(passwordSuggestions.lengthCheck);
        totalIfCases ++;
    }

    //Checking if there is atleast 1 captial letter
    if ((/(?=.*[A-Z])/).test(password)){
        passwordStrengthCount ++;
        totalIfCases ++;
    } else {
        passwordReview.suggestions.push(passwordSuggestions.capitalLetterCheck);
        totalIfCases ++;
    }

    //Checking if there is atleast 1 small letter
    if ((/(?=.*[a-z])/).test(password)){
        passwordStrengthCount ++;
        totalIfCases ++;
    } else {
        passwordReview.suggestions.push(passwordSuggestions.smallLetterCheck);
        totalIfCases ++;
    }

    //Checking if there is atleast 1 digit
    if ((/(?=.*\d)/).test(password)){
        passwordStrengthCount ++;
        totalIfCases ++;
    } else {
        passwordReview.suggestions.push(passwordSuggestions.digitCheck);
        totalIfCases ++;
    }
    
    //Checking if there is atleast 1 special character
    if ((/(?=.*[\W]|_)/).test(password)){
        passwordStrengthCount ++;
        totalIfCases ++;
    } else {
        passwordReview.suggestions.push(passwordSuggestions.specialCharacterCheck);
        totalIfCases ++;
    }
    if (passwordStrengthCount >= 0 && passwordStrengthCount <= Math.floor(totalIfCases/2)){
        passwordReview.strength = 0;
        passwordReview.booleanValue = false;
    } else if (passwordStrengthCount > Math.floor(totalIfCases/2) && passwordStrengthCount < totalIfCases ){
        passwordReview.strength = 1;
        passwordReview.booleanValue = false;
    } else {
        passwordReview.strength = 2;
        passwordReview.booleanValue = true;
    }
    return passwordReview;
}

module.exports = checkStrength;
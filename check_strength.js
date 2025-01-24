var passwordSuggestionsUsingLengthsVariables = require('./password_suggestions');

function checkStrength(password, caseSensitive, minLength, maxLength){
   
    var passwordReview = {
        booleanValue: "",
        strength: "",
        suggestions: [],
    }
    var totalIfCases = 0;
    var passwordStrengthCount = 0;
    // regular expression to check minimum and maximum characters length
    const regex = new RegExp(`^.{${minLength},${maxLength}}$`, 'u');
    // regular expression to check existence of space/puntuation/special character/emoji
    const regexSplCharacters = /[\s\p{P}\p{S}\p{So}]/gu;

    const passwordSuggestions = passwordSuggestionsUsingLengthsVariables(minLength, maxLength);
    //Checking if length has minimum and maximum characters length based on user's choice
    if ((regex).test(password)){
        passwordStrengthCount ++;
        totalIfCases ++;
    } else {
        passwordReview.suggestions.push(passwordSuggestions.lengthCheck);
        totalIfCases ++;
    }
    if (caseSensitive === true){
        //Checking if there is atleast 1 captial letter
        if ((/\p{Lu}/u).test(password)){
            passwordStrengthCount ++;
            totalIfCases ++;
        } else {
            passwordReview.suggestions.push(passwordSuggestions.capitalLetterCheck);
            totalIfCases ++;
        }

        //Checking if there is atleast 1 small letter
        if ((/\p{Ll}/u).test(password)){
            passwordStrengthCount ++;
            totalIfCases ++;
        } else {
            passwordReview.suggestions.push(passwordSuggestions.smallLetterCheck);
            totalIfCases ++;
        }
    } else {
        if ((/\p{L}/u).test(password)){
            passwordStrengthCount ++;
            totalIfCases ++;
        } else {
            passwordReview.suggestions.push(passwordSuggestions.letterCheck);
            totalIfCases ++;
        }               
    }    

    //Checking if there is atleast 1 digit
    if ((/\p{N}/u).test(password)){
        passwordStrengthCount ++;
        totalIfCases ++;
    } else {
        passwordReview.suggestions.push(passwordSuggestions.digitCheck);
        totalIfCases ++;
    }
    
    //Checking if there is atleast 1 special character
    if (regexSplCharacters.test(password)){
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
function checkStrength(password, language, caseSensitive, minLength, maxLength){
   //https://neha-himesh.github.io/password-strength-package/
    var passwordReview = {
        strength: "",
        suggestions: [],
    }
    var totalIfCases = 0;
    var passwordStrengthCount = 0;
    const regex = new RegExp(`^.{${minLength},${maxLength}}$`);
    const regexSplCharacters = /[\s\p{P}\p{S}\p{So}]/gu;
    if ((regex).test(password)){
        passwordStrengthCount ++;
        totalIfCases ++;
    } else {
        passwordReview.suggestions.push(`Password should contain minimum of ${minLength} characters and maximum of ${maxLength} characters`);
        totalIfCases ++;
    }
    if (caseSensitive === true){
        // Matches uppercase letters
        if ((/\p{Lu}/u).test(password)){
            passwordStrengthCount ++;
            totalIfCases ++;
        } else {
            passwordReview.suggestions.push("Password should contain atleast 1 capital letter");
            totalIfCases ++;
        }
        // Matches lowercase letters
        if ((/\p{Ll}/u).test(password)){
            passwordStrengthCount ++;
            totalIfCases ++;
        } else {
            passwordReview.suggestions.push("Password should contain atleast 1 small letter");
            totalIfCases ++;
        }
    } else {
        if ((/\p{L}/u).test(password)){
            passwordStrengthCount ++;
            totalIfCases ++;
        } else {
            passwordReview.suggestions.push("Password should contain atleast 1 letter");
            totalIfCases ++;
        }               
    }
    
    if ((/\p{N}/u).test(password)){
        passwordStrengthCount ++;
        totalIfCases ++;
    } else {
        passwordReview.suggestions.push("Password should contain atleast 1 digit");
        totalIfCases ++;
    }
    // Matches spaces, punctuation, symbols, or emojis
    if (regexSplCharacters.test(password)){
        passwordStrengthCount ++;
        totalIfCases ++;
    } else {
        passwordReview.suggestions.push("Password should contain atleast 1 special character, space or an emoji");
        totalIfCases ++;
    }
    
    if (passwordStrengthCount >= 0 && passwordStrengthCount <= Math.floor(totalIfCases/2)){
        passwordReview.strength = "Weak";
    } else if (passwordStrengthCount > Math.floor(totalIfCases/2) && passwordStrengthCount < totalIfCases ){
        passwordReview.strength = "Medium";
    } else {
        passwordReview.strength = "Strong";
    }
    return passwordReview;
}

module.exports = checkStrength;
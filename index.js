function checkStrength(password, language, caseSensitive, minLength, maxLength){
   
    var passwordReview = {
        strength: "",
        suggestions: [],
    }
    var totalIfCases = 0;
    var passwordStrengthCount = 0;
    if ((/^.{${minLength}, ${maxLength}}$/).test(password)){
        passwordStrengthCount ++;
        totalIfCases ++;
    } else {
        passwordReview.suggestions.push(`Password should contain minimum of ${minLength} characters and maximum of ${maxLength} characters`);
        totalIfCases ++;
    }
    if (caseSensitive === true){
        if ((/\p{Lu}/u).test(password)){
            passwordStrengthCount ++;
            totalIfCases ++;
        } else {
            passwordReview.suggestions.push("Password should contain atleast 1 capital letter");
            totalIfCases ++;
        }
        //if ((/(?=.*[a-z])/).test(password)){
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
    //if ((/(?=.*[!@#$%^&*(){}\[\]<>,.?/`~\-+=_])/).test(password)){
    if ((/[\p{P}\p{S}\{So}]/u).test(password)){
        passwordStrengthCount ++;
        totalIfCases ++;
    } else {
        passwordReview.suggestions.push("Password should contain atleast 1 special character or an emoji");
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
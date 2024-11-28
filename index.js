function checkStrength(password){
   
    var passwordReview = {
        strength: "",
        suggestions: [],
    }
    var count = 0;
    var totalIfCases = 0;
    var passwordStrengthCount = 0;
    if ((/^.{8,}$/).test(password)){
        passwordStrengthCount ++;
        totalIfCases ++;
    } else {
        passwordReview.suggestions[count] = "Password should contain minimum of 8 characters";
        count ++;
        totalIfCases ++;
    }
    if ((/(?=.*[A-Z])/).test(password)){
        passwordStrengthCount ++;
        totalIfCases ++;
    } else {
        passwordReview.suggestions[count] = "Password should contain atleast 1 capital letter";
        count ++;
        totalIfCases ++;
    }
    //if ((/(?=.*[a-z])/).test(password)){
    if ((/[a-z]/).test(password)){
        passwordStrengthCount ++;
        totalIfCases ++;
    } else {
        passwordReview.suggestions[count] = "Password should contain atleast 1 small letter";
        count ++;
        totalIfCases ++;
    }
    if ((/.*\d/).test(password)){
        passwordStrengthCount ++;
        totalIfCases ++;
    } else {
        passwordReview.suggestions[count] = "Password should contain atleast 1 digit";
        totalIfCases ++;
    }
    //if ((/(?=.*[!@#$%^&*(){}\[\]<>,.?/`~\-+=_])/).test(password)){
    if ((/(?= .*\W)/).test(password)){
        passwordStrengthCount ++;
        totalIfCases ++;
    } else {
        passwordReview.suggestions[count] = "Password should contain atleast 1 special character";
        count ++;
        totalIfCases ++;
    }
    console.log(totalIfCases);
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
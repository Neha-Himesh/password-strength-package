function checkStrength(password){
    /*
    var regularExpForProperPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-\_+={}[\]|<>.`~,?\/]).{8,}$/;
    var regularExpForPasswordHavingLessThan8Chars = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-\_+={}[\]|<>.`~,?\/]).{0,7}$/;
    var regularExpForPasswordNotHavingCapitalLetters = /^(?=.*[a-z])(?=.*[^A-Z\d!@#$%^&*()\-\+={}[\]|<>.`~,?\/]).{8,}$/;
    var regularExpForPasswordNotHavingSmallLetters = /^(?=.*[^a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-\_+={}[\]|<>.`~,?\/]).{8,}$/;
    var regularExpForPasswordNotHavingDigits = /^(?=.*[a-z])(?=.*[A-Z])(?=.*^\d)(?=.*[!@#$%^&*()\-\_+={}\[\]|<>.`~,?\/]).{8,}$/;
    var regularExpForPasswordNotHavingSplCharacters = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^!@#$%\^&*()\-\_+={}\[\]|<>.`~,?\/]).{8,}$/;
    if(regularExpForProperPassword.test(password)){ 
        console.log("Strong password");
    } else if(regularExpForPasswordHavingLessThan8Chars.test(password)){
        console.log("Password should atleast be 8 characters long");
    } else if(regularExpForPasswordNotHavingCapitalLetters.test(password)){
        console.log("Password should contain atleast 1 capital letter");
    } else if (regularExpForPasswordNotHavingSmallLetters.test(password)){
        console.log("Password should have atleast 1 small letter");
    } else if (regularExpForPasswordNotHavingDigits.test(password)){
        console.log("Password should contain atleast 1 digit");
    } else if (regularExpForPasswordNotHavingSplCharacters.test(password)){
        console.log("Password should have atleast 1 special characters");
    } else {
        console.log("Weak password");
    } */
    var passwordReview = {
        strength: "",
        suggestions: [],
    }
    var count = 0;
    var passwordStrengthCount = 0;
    if ((/^.{8,}$/).test(password)){
        passwordStrengthCount ++;
    } else {
        passwordReview.suggestions[count] = "Password should contain minimum of 8 characters";
        count ++;
    }
    if ((/(?=.*[A-Z])/).test(password)){
        passwordStrengthCount ++;
    } else {
        passwordReview.suggestions[count] = "Password should contain atleast 1 capital letter";
        count ++;
    }
    if ((/(?=.*[a-z])/).test(password)){
        passwordStrengthCount ++;
    } else {
        passwordReview.suggestions[count] = "Password should contain atleast 1 small letter";
        count ++;
    }
    if ((/.*\d/).test(password)){
        passwordStrengthCount ++;
    } else {
        passwordReview.suggestions[count] = "Password should contain atleast 1 digit";
    }
    if ((/(?=.*[!@#$%^&*(){}\[\]<>,.?/`~\-+=_])/).test(password)){
        passwordStrengthCount ++;
    } else {
        passwordReview.suggestions[count] = "Password should contain atleast 1 special character";
        count ++;
    }
    if (passwordStrengthCount >= 0 && passwordStrengthCount <= 2){
        passwordReview.strength = "Weak";
    } else if (passwordStrengthCount > 2 && passwordStrengthCount <= 4){
        passwordReview.strength = "Medium";
    } else {
        passwordReview.strength = "Strong";
    }
    return passwordReview;
}

module.exports = checkStrength;
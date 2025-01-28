passwordSuggestions = (minLength, maxLength) => ({
    lengthCheck: `Password should contain minimum of ${minLength}, and maximum of ${maxLength} characters`,
    capitalLetterCheck: "Password should contain atleast 1 capital letter",
    smallLetterCheck: "Password should contain atleast 1 small letter",
    digitCheck: "Password should contain atleast 1 digit",
    specialCharacterCheck: "Password should contain atleast 1 special character, space or an emoji",
    letterCheck: "Password should contain atleast 1 letter",
});

export default passwordSuggestions;
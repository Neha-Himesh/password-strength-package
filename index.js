const getPasswordSuggestions = (minLength, maxLength) => ({
    lengthCheck: `Password should contain minimum of ${minLength}, and maximum of ${maxLength} characters`,
    capitalLetterCheck: "Password should contain atleast 1 capital letter",
    smallLetterCheck: "Password should contain atleast 1 small letter",
    digitCheck: "Password should contain atleast 1 digit",
    specialCharacterCheck: "Password should contain atleast 1 special character, space or an emoji",
    letterCheck: "Password should contain atleast 1 letter",
});

function updateStrength(event) {
    console.log("Password check");
    event.preventDefault(); // Prevent form from reloading the page
    var password = document.getElementById("password").value;
    var languageCaseSensitivity = document.getElementById("case-sensitive-input").value === "true";
    var strengthInfo = checkStrength(password, languageCaseSensitivity, 8, 15);
    var strengthText = `Strength: ${strengthInfo.strength}`;

    if (strengthInfo.suggestions.length > 0) {
        strengthText += `<br><strong>Suggestions:</strong><ul>`;
        strengthInfo.suggestions.forEach(suggestion => {
            strengthText += `<li>${suggestion}</li>`;
        });
        strengthText += `</ul>`;
    }

    document.getElementById("strength").innerHTML = strengthText;
}

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

    const passwordSuggestions = getPasswordSuggestions(minLength, maxLength);
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


document.addEventListener('DOMContentLoaded', () => {
    // Fetching main sub-menu of the dropdown
    const tableOfContentsMainSection = document.getElementById('about');
    const tableOfContentsHighlightedSection = document.getElementById('about-link');

    // Fetching all the elements which are submenus of the product dropdown
    if(tableOfContentsMainSection.classList.contains('d-none')){
        tableOfContentsMainSection.classList.remove('d-none');
    }

    if(!tableOfContentsHighlightedSection.contains('active')){
        tableOfContentsHighlightedSection.classList.add('active');
    }

    const tableOfContentsSections = document.querySelectorAll('.table-of-contents-home-page-links[data-target]');
    // Fetching main menu of the dropdown
    const tableOfContentsDocumentationList = document.getElementById('table-of-contents-documentation-list');
 
    // Assigning previous element which was supposed to be displayed in the sub-menu as main sub-menu
    let elementHavingPreviousTargetId = tableOfContentsMainSection;

    // On mouse enter event, fetching the target data of the sub-menu element and finding the element with the matching target ID
    tableOfContentsSections.forEach(option => {
        option.addEventListener('click', function () {
            const targetIdOfSubSection = this.dataset.target;
            const elementWithRequiredTargetId = document.getElementById(targetIdOfSubSection);
            var tableOfContentsToBeHighlightedSection = document.getElementById(`${targetIdOfSubSection}-link`);
            // Adding 'd-none' class to the previous target element and removing 'd-none' from the required target ID (sub-menu)
            if (elementHavingPreviousTargetId) {
                elementHavingPreviousTargetId.classList.add('d-none');
                console.log(tableOfContentsHighlightedSection);
                tableOfContentsHighlightedSection.classList.remove('active');
            }
            // Assigning the required target ID to the previous target ID to save the data for the next hover
            if (elementWithRequiredTargetId) {
                elementWithRequiredTargetId.classList.remove('d-none');
                tableOfContentsToBeHighlightedSection.classList.add('active');
                elementHavingPreviousTargetId = elementWithRequiredTargetId;
                tableOfContentsHighlightedSection = tableOfContentsToBeHighlightedSection;
            }
        });
    });



//     // When mouse leaves the main menu, remove the 'd-none' class from the main sub-menu
//     tableOfContentsDocumentationList.addEventListener('', function () {
//         tableOfContentsMainSection.classList.remove('d-none');
//         // Adding 'd-none' class to the previous target ID, if it's not the main sub-menu
//         if (elementHavingPreviousTargetId !== tableOfContentsMainSection) {
//             elementHavingPreviousTargetId.classList.add('d-none');
//             elementHavingPreviousTargetId = tableOfContentsMainSection;
//         }
//     });
});

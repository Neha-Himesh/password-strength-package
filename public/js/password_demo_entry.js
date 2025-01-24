
function updateStrength() {
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

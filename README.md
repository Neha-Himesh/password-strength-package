# Password Strength Checker #

This module provides a utility function to evaluate the strength of a given password and offers suggestions for improvement.

## Features ##
- Checks if the password meets the following criteria:
  - Minimum length of 8 characters
  - Contains at least one uppercase letter
  - Contains at least one lowercase letter
  - Contains at least one digit
  - Contains at least one special character
- Returns a strength level and boolean validity.
- Provides suggestions for improvement when the password does not meet specific criteria.

## Installation ##
Ensure Node.js is installed on your system. Clone or download this repository, then install any necessary dependencies using `npm` or `yarn`.

```bash
npm install
```

## Usage ##
Import the checkStrength function into your project:

```
const checkStrength = require('./checkStrength');
```

Call the function with a password string:
```
const result = checkStrength('MySecureP@ss24');
console.log(result);
```

Output Example:
```
json
{
    "booleanValue": true,
    "strength": 2,
    "suggestions": []
}
```

## API Reference ##

### Function: checkStrength(password) ###

#### Parameters: ####

password (string):
The password to evaluate.

#### Returns: ####

An object containing:

booleanValue (boolean):Whether the password meets all criteria.
true - Password meets all criteria
false - Password does not meet one or more criteria

strength (number):Password strength level:
0 - Weak
1 - Moderate
2 - Strong

suggestions (array):Suggestions for improving the password.

#### Dependencies: ####

password_suggestions:
An external module that provides suggestions for password improvements. Ensure the module exports properties like:

lengthCheck
capitalLetterCheck
smallLetterCheck
digitCheck
specialCharacterCheck

## Contributing ##
Feel free to fork the repository, make your changes, and submit a pull request.

## License ##
This project is licensed under the MIT License.

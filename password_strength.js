#!/usr/bin/env node

// Import the password strength logic from index.js
const checkStrength = require('./index');

// Get the password from CLI arguments
const args = process.argv.slice(2);
if (args.length === 0) {
    console.log("Usage: password-strength in different languages <password> <language> <case-sensitive> <min-length> <max-length>");
    process.exit(1);
}

const password = args[0];
const language = args[1];
const caseSensitive = args[2];
const minLength = args[3];
const maxLength = args[4];

// Call the function and print the result
const result = checkStrength(password, language, caseSensitive, minLength, maxLength);
console.log(result);
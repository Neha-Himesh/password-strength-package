#!/usr/bin/env node

// Import the password strength logic from index.js
const checkStrength = require('./index');

// Get the password from CLI arguments
const args = process.argv.slice(2);
if (args.length === 0) {
    console.log("Usage: password-strength <password>");
    process.exit(1);
}

const password = args[0];

// Call the function and print the result
const result = checkStrength(password);
console.log(result);
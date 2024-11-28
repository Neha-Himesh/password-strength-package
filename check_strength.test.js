const checkStrength = require('./index');

describe('checkStrength Function', () => {
    test('should classify a strong password', () => {
        const result = checkStrength('N#h@2312');
        expect(result.strength).toBe('Strong');
        expect(result.suggestions.length).toBe(0);
    });

    test('should classify a medium password when it does not have special character but satisfies other criterias', () => {
        const result = checkStrength('Neha2321');
        expect(result.strength).toBe('Medium');
        expect(result.suggestions).toContain("Password should contain atleast 1 special character");
    });

    test('should classify a weak password', () => {
        const result = checkStrength('neha');
        expect(result.strength).toBe('Weak');
        expect(result.suggestions).toEqual(
            expect.arrayContaining([
                "Password should contain minimum of 8 characters",
                "Password should contain atleast 1 capital letter",
                "Password should contain atleast 1 digit",
                "Password should contain atleast 1 special character"
            ])
        );
    });

    test('should suggest improvements for medium password when it does not have 1 digit but satisfies other criterias', () => {
        const result = checkStrength('N#h@H!m#');
        expect(result.strength).toBe('Medium');
        expect(result.suggestions).toContain("Password should contain atleast 1 digit");
    });

    test('should identify a password not having capital letter', () => {
        const result = checkStrength('n#hah231');
        expect(result.strength).toBe('Medium');
        expect(result.suggestions).toContain("Password should contain atleast 1 capital letter");
    });

    test('should identify a password not having small letter', () => {
        const result = checkStrength('N#HAH231');
        expect(result.strength).toBe('Medium');
        expect(result.suggestions).toContain("Password should contain atleast 1 small letter");
    });

    test('should identify when a password has length less than 8 characters', () => {
        const result = checkStrength('N#hah23');
        expect(result.strength).toBe('Medium');
        expect(result.suggestions).toContain("Password should contain minimum of 8 characters");
    });

    test('should identify a password not having capital letter and small letter', () => {
        const result = checkStrength('78%{#231');
        expect(result.strength).toBe('Medium');
        expect(result.suggestions).toEqual(
            expect.arrayContaining([
            "Password should contain atleast 1 capital letter",
            "Password should contain atleast 1 small letter"
            ])
        );
    }); 

    test('should identify a password not having special character and digit', () => {
        const result = checkStrength('NehaHimesh');
        expect(result.strength).toBe('Medium');
        expect(result.suggestions).toEqual(
            expect.arrayContaining([
            "Password should contain atleast 1 special character",
            "Password should contain atleast 1 digit"
            ])
        );
    });

    test('should identify a password not having special character and 8 characters', () => {
        const result = checkStrength('78Neh31');
        expect(result.strength).toBe('Medium');
        expect(result.suggestions).toEqual(
            expect.arrayContaining([
            "Password should contain atleast 1 special character",
            "Password should contain minimum of 8 characters"
            ])
        );
    });


    test('should identify a password not having capital letter and 8 characters', () => {
        const result = checkStrength('78eh@31');
        expect(result.strength).toBe('Medium');
        expect(result.suggestions).toEqual(
            expect.arrayContaining([
            "Password should contain atleast 1 capital letter",
            "Password should contain minimum of 8 characters"
            ])
        );
    });


    test('should identify a password not having small letter and 1 digit', () => {
        const result = checkStrength('@#NEHA&^');
        expect(result.strength).toBe('Medium');
        expect(result.suggestions).toEqual(
            expect.arrayContaining([
            "Password should contain atleast 1 small letter",
            "Password should contain atleast 1 digit"
            ])
        );
    });




});

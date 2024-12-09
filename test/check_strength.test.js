const checkStrength = require('../index');

describe('checkStrength Function', () => {
    //Tests for case sensitive languages
    test('should classify a strong password when password is typed in case sensitive language', () => {
        const result = checkStrength('N#h@2312', 'English', true, 8, 16);
        expect(result.strength).toBe(2);
        expect(result.booleanValue).toBe(true);
        expect(result.suggestions.length).toBe(0);
    });

    test('should classify a medium password when it does not have special character but satisfies other criterias when typed in case sensitive language', () => {
        const result = checkStrength('Neha2321', 'English', true, 8, 16);
        expect(result.strength).toBe(1);
        expect(result.booleanValue).toBe(false);
        expect(result.suggestions).toContain("Password should contain atleast 1 special character");
    });

    test('should classify a weak password when password is typed in case sensitive language', () => {
        const result = checkStrength('neha', 'English', true, 8, 16);
        var minLength = 8;
        var maxLength = 16;
        expect(result.strength).toBe(0);
        expect(result.booleanValue).toBe(false);
        expect(result.suggestions).toEqual(
            expect.arrayContaining([
                `Password should contain minimum of ${minLength}, and maximum of ${maxLength} characters`,
                "Password should contain atleast 1 capital letter",
                "Password should contain atleast 1 digit",
                "Password should contain atleast 1 special character"
            ])
        );
    });

    test('should suggest improvements for medium password when it does not have 1 digit but satisfies other criterias when typed in case sensitive language', () => {
        const result = checkStrength('N#h@H!m#', 'English', true, 6, 12);
        expect(result.strength).toBe(1);
        expect(result.booleanValue).toBe(false);
        expect(result.suggestions).toContain("Password should contain atleast 1 digit");
    });

    test('should identify a password not having capital letter when typed in case sensitive language', () => {
        const result = checkStrength('n hah231', 'English', true, 6, 12);
        expect(result.strength).toBe(1);
        expect(result.booleanValue).toBe(false);
        expect(result.suggestions).toContain("Password should contain atleast 1 capital letter");
    });

    test('should identify a password not having small letter when typed in case sensitive language', () => {
        const result = checkStrength('N#HAH231', 'English', true, 7, 14);
        expect(result.strength).toBe(1);
        expect(result.booleanValue).toBe(false);
        expect(result.suggestions).toContain("Password should contain atleast 1 small letter");
    });

    test('should identify when a password has length less than minimum length of characters when typed in case sensitive language', () => {
        const result = checkStrength('N😄hah23', 'English', true, 8, 12);
        var minLength = 8;
        var maxLength = 12;
        expect(result.strength).toBe(1);
        expect(result.booleanValue).toBe(false);
        expect(result.suggestions).toContain(`Password should contain minimum of ${minLength}, and maximum of ${maxLength} characters`);
    });

    test('should identify a password not having capital letter and small letter when typed in a case sensitivite language', () => {
        const result = checkStrength('78%{#231', 'English', true, 5, 12);
        expect(result.strength).toBe(1);
        expect(result.booleanValue).toBe(false);
        expect(result.suggestions).toEqual(
            expect.arrayContaining([
            "Password should contain atleast 1 capital letter",
            "Password should contain atleast 1 small letter"
            ])
        );
    }); 

    test('should identify a password not having special character and digit when typed in a case sensitive language', () => {
        const result = checkStrength('NehaHimesh', 'English', true, 6, 12);
        expect(result.strength).toBe(1);
        expect(result.booleanValue).toBe(false);
        expect(result.suggestions).toEqual(
            expect.arrayContaining([
            "Password should contain atleast 1 special character",
            "Password should contain atleast 1 digit"
            ])
        );
    });

    test('should identify a password not having special character and 12 characters when typed in a case sensitive language', () => {
        const result = checkStrength('78Neha313451q', 'English', true, 8, 12 );
        var minLength = 8;
        var maxLength = 12;
        expect(result.strength).toBe(1);
        expect(result.booleanValue).toBe(false);
        expect(result.suggestions).toEqual(
            expect.arrayContaining([
            "Password should contain atleast 1 special character",
            `Password should contain minimum of ${minLength}, and maximum of ${maxLength} characters`,
            ])
        );
    });


    test('should identify a password not having capital letter and 15 characters as maximum length when typed in a case sensitive language', () => {
        const result = checkStrength('78eheersa.3123ud', 'English', true, 8, 15 );
        var minLength = 8;
        var maxLength = 15;
        expect(result.strength).toBe(1);
        expect(result.booleanValue).toBe(false);
        expect(result.suggestions).toEqual(
            expect.arrayContaining([
            "Password should contain atleast 1 capital letter",
             `Password should contain minimum of ${minLength}, and maximum of ${maxLength} characters`,
            ])
        );
    });


    test('should identify a password not having small letter and 1 digit when typed in a case sensitive language', () => {
        const result = checkStrength('@#NEHA&^', 'English', true, 8, 12 );
        expect(result.strength).toBe(1);
        expect(result.booleanValue).toBe(false);
        expect(result.suggestions).toEqual(
            expect.arrayContaining([
            "Password should contain atleast 1 small letter",
            "Password should contain atleast 1 digit"
            ])
        );
    });
    
    //Tests for case insensitive language
    test('should classify a strong password when password is typed in case insensitive language', () => {
        const result = checkStrength('ने#ह@२३१२', 'Hindi', false, 8, 16);
        expect(result.strength).toBe(2);
        expect(result.booleanValue).toBe(true);
        expect(result.suggestions.length).toBe(0);
    });

    test('should classify a medium password when it does not have special character but satisfies other criterias when typed in case insensitive language', () => {
        const result = checkStrength('नेहाहिमेश२३२', 'Hindi', false, 8, 16);
        expect(result.strength).toBe(1);
        expect(result.booleanValue).toBe(false);
        expect(result.suggestions).toContain("Password should contain atleast 1 special character");
    });

    test('should classify a weak password when password is typed in case insensitive language', () => {
        const result = checkStrength('नेहा', 'Hindi', false, 8, 16);
        var minLength = 8;
        var maxLength = 16;
        expect(result.strength).toBe(0);
        expect(result.booleanValue).toBe(false);
        expect(result.suggestions).toEqual(
            expect.arrayContaining([
                `Password should contain minimum of ${minLength}, and maximum of ${maxLength} characters`,
                "Password should contain atleast 1 digit",
                "Password should contain atleast 1 special character"
            ])
        );
    });

    test('should suggest improvements for medium password when it does not have 1 digit but satisfies other criterias when typed in case insensitive language', () => {
        const result = checkStrength('न#ह@ह!म#', 'Hindi', false, 6, 12);
        expect(result.strength).toBe(1);
        expect(result.booleanValue).toBe(false);
        expect(result.suggestions).toContain("Password should contain atleast 1 digit");
    });

    test('should identify when a password has length less than minimum length of characters when typed in case insensitive language', () => {
        const result = checkStrength('न हाह२३', 'Hindi', false, 8, 12);
        var minLength = 8;
        var maxLength = 12;
        expect(result.strength).toBe(1);
        expect(result.booleanValue).toBe(false);
        expect(result.suggestions).toContain(`Password should contain minimum of ${minLength}, and maximum of ${maxLength} characters`);
    });

    test('should identify a password not having letter when typed in a case sensitivite language', () => {
        const result = checkStrength('७८%{#२३१', 'Hindi', false, 5, 12);
        expect(result.strength).toBe(1);
        expect(result.booleanValue).toBe(false);
        expect(result.suggestions).toEqual(
            expect.arrayContaining([
            "Password should contain atleast 1 letter",
            ])
        );
    }); 

    test('should identify a password not having special character and digit when typed in a case insensitive language', () => {
        const result = checkStrength('नेहाहिमेशने', 'Hindi', false, 6, 12);
        expect(result.strength).toBe(0);
        expect(result.booleanValue).toBe(false);
        expect(result.suggestions).toEqual(
            expect.arrayContaining([
            "Password should contain atleast 1 special character",
            "Password should contain atleast 1 digit"
            ])
        );
    });

    test('should identify a password not having special character and 12 characters when typed in a case insensitive language', () => {
        const result = checkStrength('७८नेहा३१३४५१क्यूमे', 'Hindi', false, 8, 12 );
        var minLength = 8;
        var maxLength = 12;
        expect(result.strength).toBe(0);
        expect(result.booleanValue).toBe(false);
        expect(result.suggestions).toEqual(
            expect.arrayContaining([
            "Password should contain atleast 1 special character",
            `Password should contain minimum of ${minLength}, and maximum of ${maxLength} characters`,
            ])
        );
    });


    test('should identify a password not having letter and 15 characters as maximum length when typed in a case insensitive language', () => {
        const result = checkStrength('१२३४५६७८९१०११२१५६', 'Hindi', false, 8, 15 );
        var minLength = 8;
        var maxLength = 15;
        expect(result.strength).toBe(0);
        expect(result.booleanValue).toBe(false);
        expect(result.suggestions).toEqual(
            expect.arrayContaining([
            "Password should contain atleast 1 letter",
             `Password should contain minimum of ${minLength}, and maximum of ${maxLength} characters`,
            ])
        );
    });


    test('should identify a password not having letter and 1 digit when typed in a case insensitive language', () => {
        const result = checkStrength('@#%^&^☺️😍', 'Hindi', false, 8, 12 );
        expect(result.strength).toBe(0);
        expect(result.booleanValue).toBe(false);
        expect(result.suggestions).toEqual(
            expect.arrayContaining([
            "Password should contain atleast 1 letter",
            "Password should contain atleast 1 digit"
            ])
        );
    }); 

});

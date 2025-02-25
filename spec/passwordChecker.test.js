describe("demo", function() {
    it("demo", function(){
        expect(1).toBe(1);
    });
});

import { PasswordChecker } from "../src/passwordChecker.js";

describe("PasswordChecker", function () {

    // a. It must contain at least 8 characters.
    it("should return true if the password has at least 8 characters", () => {
        const password = "password8characters";
    
        const result = new PasswordChecker().minimum8Characters(password);
    
        expect(result).toBe(true);
    });    

    it("should return false if the password has less than 8 characters", () => {
        const password = "pass";
    
        const result = new PasswordChecker().minimum8Characters(password);
    
        expect(result).toBe(false);
    });

    // b. It must contain at least one special character.
    it("should return true if the password has 1 special character", () => {
        const password = "password!";
    
        const result = new PasswordChecker().specialCharaters(password);
    
        expect(result).toBe(true);
    });

    it("should return false if the password has no special character", () => {
        const password = "password";
    
        const result = new PasswordChecker().specialCharaters(password);
    
        expect(result).toBe(false);
    });

    // c. It must contain at least one number.
    it("should return true if the password has 1 number", () => {
        const password = "password1";
    
        const result = new PasswordChecker().number(password);
    
        expect(result).toBe(true);
    });

    it("should return false if the password has no number", () => {
        const password = "password";
    
        const result = new PasswordChecker().number(password);
    
        expect(result).toBe(false);
    });

    // d. It cannot contain the string "IPL" in any case (uppercase or lowercase).
    it("should return true if the password does not contain the string IPL in any case (uppercase or lowercase).", () => {
        const password = "password";

        const result = new PasswordChecker().notContainIPL(password);

        expect(result).toBe(true);
    });

    it("should return false if the password contains the string IPL in any case (uppercase or lowercase).", () => {
        const password = "passwordIPL";

        const result = new PasswordChecker().notContainIPL(password);

        expect(result).toBe(false);
    });
    
});
describe("demo", function() {
    it("demo", function(){
        expect(1).toBe(1);
    });
});

import { PasswordChecker } from "../src/passwordChecker.js";

describe("PasswordChecker", function () {
   
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

    it("should return true if the password does not contain the string IPL in any case (uppercase or lowercase).", () => {
        const password = "password";

        const result = new PasswordChecker().notContainIPL(password);

        expect(result).toBe(true);
    });
    
});
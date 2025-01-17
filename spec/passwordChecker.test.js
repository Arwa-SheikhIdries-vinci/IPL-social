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
    
});
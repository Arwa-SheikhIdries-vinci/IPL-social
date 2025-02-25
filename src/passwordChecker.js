export class PasswordChecker {

    minimum8Characters(password) {
        return password.length >= 8;
    }
    specialCharaters(password){
        return /[!@#$%^&*(),.?":{}|<>]/.test(password);
    }
    number(password){
        return /\d/.test(password);
    }
    notContainIPL(password){
        return !/ipl/i.test(password);
    }

}
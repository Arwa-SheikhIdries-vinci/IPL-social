export class PasswordChecker {

    minimum8Characters(password) {
        return password.length >= 8;
    }
    specialCharaters(password){
        return /[!@#$%^&*(),.?":{}|<>]/.test(password);
    }
    number(password){
        if(password.match(/\d+/g)){
            return true;
        }
    }
}
export class PasswordChecker {

    minimum8Characters(password) {
        return password.length >= 8;
    }
    specialCharaters(password){
        if(password.match(/[!@#$%^&*(),.?":{}|<>]/)){
            return true;
        }
    }


}
function validateSignInData(userObj) {

    return new Promise((resolve, reject) => {
        if(userObj.name.trim() === "") reject("Please enter a valid name.");
        if(userObj.mobNum && userObj.mobNum.length <= 9) reject("Please enter a valid mobile number.");
        if(userObj.password.trim().length < 5) reject("Password must be longer then 5 characters.");
        if(userObj.password !== userObj.confirmPassword) reject("Password and Confirm password do not match.");
        if(userObj.Agency === "unset") reject("Please select an option for Agency.");
        resolve();
    })
}

export default validateSignInData
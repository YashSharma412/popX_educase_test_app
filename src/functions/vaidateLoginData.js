function vaidateLoginData(userObj) {
    console.log("validating login data")
    return new Promise((resolve, reject) => {
        if(userObj.email.trim() === "") reject("Please enter a valid email.");
        if(userObj.password.trim().length < 5) reject("Password must be longer then 5 characters.");
        resolve();
    })
}

export default vaidateLoginData
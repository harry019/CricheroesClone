let form = document.getElementById("form")
let un = document.getElementById("username")
let pass = document.getElementById("password")
let dob = document.getElementById("dob")

let emptyun = document.getElementById("emptyun")
let emptypass = document.getElementById("emptypass")
let emptydob = document.getElementById("emptydob")

let obj = {
    user_name: "",
    pass_word: "",
    dateofbirth: ""
}

function validateUsername() {
    let userInput = un.value.trim()
    if (userInput === "") {
        emptyun.innerHTML = "Username cannot be empty"
        emptyun.style.color = "red";
        return false;
    }
    else if (userInput.length <= 5) {
        emptyun.innerHTML = "Username is too short"
        emptyun.style.color = "red"
        return false;
    }
    else {
        userInput.innerHTML = ""
        return true
    }
}

function validatePassword() {
    let userPassword = pass.value
    if (userPassword === "") {
        emptypass.innerHTML = "Password cannot be empty"
        emptypass.style.color = "red";
        return false;
    }
    else if (userPassword <= 8) {
        emptypass.innerHTML = "Password is too short"
        emptypass.style.color = "red"
        return false;
    }
    else {
        userPassword.innerHTML = ""
        return true
    }
}

function validateDOB() {
    let userInput = dob.value;
    if (userInput === "") {
        emptydob.innerHTML = "Date of Birth cannot be empty.";
        emptydob.style.color = "red";
        return false;
    } else {
        emptydob.innerHTML = "";
        return true;
    }
}


un.addEventListener("input", validateUsername)
pass.addEventListener("input", validatePassword)
dob.addEventListener("change", validateDOB)

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let isusernamevalid = validateUsername();
    let ispasswordvalid = validatePassword();
    let isdobvalid = validateDOB();

    if (isusernamevalid && ispasswordvalid && isdobvalid) {
        obj.user_name = un.value.trim()
        obj.pass_word = pass.value
        obj.dateofbirth = dob.value

        console.log("Form is valid, submitting", obj);

        let jsondata = JSON.stringify(obj)
        localStorage.setItem("credentials", jsondata)

        alert("Signup successful!")

        location.href = "./signupsuccess.html";
    } else {
        console.log("Form validation failed. Please check errors.");
    }
});

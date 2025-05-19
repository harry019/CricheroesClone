let form = document.getElementById("form");
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let json = localStorage.getItem('credentials');
    let storedCredentials;

    if (json) {
        try {
            storedCredentials = JSON.parse(json);
        } catch (error) {
            console.error("Error parsing credentials from localStorage:", error);
            alert("An error occurred. Please try signing up again.");
            return;
        }
    }

    if (!storedCredentials) {
        alert("No signup data found. Please sign up first.");
        location.href = "./signup.html";
        return; // Stop further execution
    }

    let enteredUsername = usernameInput.value;
    let enteredPassword = passwordInput.value;

    if (enteredUsername === "") {
        alert("Please enter your username.");
        return;
    }
    if (enteredPassword === "") {
        alert("Please enter your password.");
        return;
    }


    if (storedCredentials.user_name !== enteredUsername) {
        alert("Invalid username.");
    } else if (storedCredentials.pass_word !== enteredPassword) {
        alert("Wrong password.");
    } else {
        alert("Login successful!");
        location.href = "../index.html";
    }
});
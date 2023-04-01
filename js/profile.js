const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("login-input");
const profileMessage = document.getElementById("profile-message");
const HIDDEN_CLASS_NAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);
function paintProfileMessage(username) {
    profileMessage.innerText = `Hello ${username}!`;
    profileMessage.classList.remove(HIDDEN_CLASS_NAME);
}
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = loginInput.value;
        localStorage.setItem(USERNAME_KEY, username);
        loginForm.classList.add(HIDDEN_CLASS_NAME);
        paintProfileMessage(username);
    });
} else {
    paintProfileMessage(savedUsername);
}

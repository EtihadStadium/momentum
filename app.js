const loginForm = document.querySelector("form");
const loginInput = document.querySelector("input");
const profileMessage = document.querySelector("h1");
const HIDDEN_CLASS_NAME = "hidden";
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    profileMessage.innerText = `Hello ${username}!`;
    profileMessage.classList.remove(HIDDEN_CLASS_NAME);
});

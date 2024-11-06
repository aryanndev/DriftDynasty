function expandBox(id) {
    const box = document.getElementById(id);
    box.classList.toggle("expanded");
}

// login js
const loginToggle = document.getElementById('login-toggle');
const signupToggle = document.getElementById('signup-toggle');
const loginContainer = document.getElementById('login-container');
const signupContainer = document.getElementById('signup-container');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginToggle.addEventListener('click', () => {
    loginContainer.classList.add('active');
    signupContainer.classList.remove('active');
    loginToggle.classList.add('active');
    signupToggle.classList.remove('active');
});

signupToggle.addEventListener('click', () => {
    signupContainer.classList.add('active');
    loginContainer.classList.remove('active');
    signupToggle.classList.add('active');
    loginToggle.classList.remove('active');
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert("Please fill in all fields.");
    } else {
        alert("Logging in...");
    }
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newEmail = document.getElementById('new-email').value;
    const newPassword = document.getElementById('new-password').value;

    if (!newUsername || !newEmail || !newPassword) {
        alert("Please fill in all fields.");
    } else {
        alert("Signing up...");
    }
});

function login() {
    var a = document.getElementById("username").value;
    var b = document.getElementById("password").value;
    var c = document.getElementById("new-email").value;
    if (a === "" || b === "" || c === "") {
        alert("All fields should be filled");
        return false;
    }
    else {
        return true;
    }
}
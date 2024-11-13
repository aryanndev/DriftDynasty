function expandBox(id) {
    const box = document.getElementById(id);
    box.classList.toggle("expanded");
}

// login js

function loginform() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}
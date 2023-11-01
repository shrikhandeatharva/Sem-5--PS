let current = document.getElementById("loginpage");
let username = "ath123";
let password = "12345";

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(function(page) {
        page.style.display = "none";
    });

    current = document.getElementById(pageId);
    current.style.display = "block";
}

function login() {
    let u = document.getElementById("UN").value;
    let p = document.getElementById("PW").value;
    
    if (u === username && p === password) {
        showPage("loginSpage");
        document.getElementById("loggedInUser").textContent = u;
    } else {
        alert("Entered Username or Password is incorrect.");
    }
}

function register() {
    showPage("signUpPage");
    document.getElementById("FN").value = "";
    document.getElementById("LN").value = "";
    document.getElementById("email").value = "";
    document.getElementById("userN").value = "";
    document.getElementById("passW").value = "";
}

function loginpage() {
    showPage("loginpage");
    document.getElementById("UN").value = "";
    document.getElementById("PW").value = "";
}

function forgotPassword() {
    showPage("forgetPpage");
    document.getElementById("newpw").value = "";
    document.getElementById("reEnterpw").value = "";
}

function newpassword() {
    let newPW = document.getElementById("newpw").value;
    let reEPW = document.getElementById("reEnterpw").value;
    
    if(newPW.length < 5) {
        alert("Minimum length of password should be 5.");
    } else if (newPW === reEPW) {
        password = newPW;
        loginpage();
    } else {
        alert("Re-entered password is incorrect.");
    }
}

function submitData() {
    let f = document.getElementById("FN").value;
    let l = document.getElementById("LN").value;
    let e = document.getElementById("email").value;
    let u = document.getElementById("userN").value;
    let p = document.getElementById("passW").value;

    if (f !== "" && l !== "" && e !== "" && u !== "" && p !== "") {
        if(p.length >= 4) {
            username = u;
            password = p;
            loginpage();
        } else {
            alert("Minimum length of password should be 5.");
        }
    } else {
        alert("Fill all the Entries.");
    }
}

function logout() {
    showPage("loginpage");
    document.getElementById("loggedInUser").textContent = "";
    document.getElementById("UN").value = "";
    document.getElementById("PW").value = "";
}

// Initialize by showing the login page
showPage("loginpage");


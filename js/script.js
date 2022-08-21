const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const studentDetails = document.querySelector(".details-box");
const deleteBox = document.querySelector(".delete-box");
const markAsReadBtn = document.querySelectorAll(".read");
const readBtn = document.querySelectorAll(".opened");
const message = document.querySelectorAll(".new-message");
const signBox = document.querySelector(".sign-box")


// show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.left = '0';
})

// hide sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.left = '-100%';
})

// change theme
const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
        toggleSwitch.checked = true;

        themeToggler.querySelector(".fa-sun").classList.remove('active');
        themeToggler.querySelector(".fa-moon").classList.add('active')
    }
    else {
        themeToggler.querySelector(".fa-sun").classList.add('active');
        themeToggler.querySelector(".fa-moon").classList.remove('active')
    }
}

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        themeToggler.querySelector(".fa-sun").classList.remove('active');
        themeToggler.querySelector(".fa-moon").classList.add('active')
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        themeToggler.querySelector(".fa-sun").classList.add('active');
        themeToggler.querySelector(".fa-moon").classList.remove('active')
    }
}

toggleSwitch.addEventListener("change", switchTheme, false);

// show details
function openDetails() {
    studentDetails.style.display = 'block';
}

// close details
const closeDetailsBtn = document.querySelector("#closeDetails")

closeDetailsBtn.addEventListener('click', () => {
    studentDetails.style.display = 'none';
})

// show delete box
function openDeleteBox() {
    deleteBox.style.display = 'block';
}

// hide delete box
function hideDeleteBox() {
    deleteBox.style.display = 'none';
}

// mark as read
function markAsRead(id) {
    markAsReadBtn[id].style.display = 'none';
    readBtn[id].style.display = 'inline-block';
}

// mark as unread
function markAsUnread(id) {
    markAsReadBtn[id].style.display = 'inline-block';
    readBtn[id].style.display = 'none';
}

// delete message
function deleteMessage(id) {
    let x = message[id];
    x.style.display = 'none'
}

// show sign in box
function showSign() {
    signBox.style.display = 'block';
}

// show log in
function showLog() {
    signBox.style.display = 'none';
}

// registeration
function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        document.getElementById("errMsg").innerHTML = "Please fill in email";

    }else if(pw.value.length == 0){
        document.getElementById("errMsg").innerHTML = "Please fill in password";

    }else if(!pw.value.match(numbers)){
        document.getElementById("errMsg").innerHTML = "please add a number";

    }else if(!pw.value.match(upperCaseLetters)){
        document.getElementById("errMsg").innerHTML = "please add uppercase letter";

    }else if(!pw.value.match(lowerCaseLetters)){
        document.getElementById("errMsg").innerHTML = "please add lovercase letter";

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        document.getElementById("errMsg").innerHTML = "Your account has been created";
        alert('Your account has been created');
    }
}

//checking
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        // alert('Error on login');
        document.getElementById("errMsg").innerHTML = "Account doesn't exist!";
    }
}
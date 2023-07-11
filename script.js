//theam work is start 😵‍💫😵‍💫😵‍💫

let theme = document.getElementById("theme");
let changeLogo = document.getElementById("changeLogo");
let footerLogo = document.getElementById("footerLogo");
let changeThemeIcon = document.querySelector(".changeThemeIcon i");
let checkTheme = localStorage.getItem("theme")


const checkThemecolor = () => {
    if (checkTheme == "dark") {
        document.body.classList.add('dark-theme');
        changeLogo.src = "./img/logo2.png"
        footerLogo.src = "./img/logo2.png"
        changeThemeIcon.classList.add('fa-moon')
    }
    else {
        changeLogo.src = "./img/logo.png"
        footerLogo.src = "./img/logo.png"
        document.body.classList.remove('dark-theme');
        changeThemeIcon.classList.remove('fa-moon')
    }
}

checkThemecolor()


theme.onclick = themeChange = () => {
    if (document.body.classList.toggle("dark-theme")) {
        localStorage.setItem("theme", "dark")
    }
    else {
        localStorage.setItem("theme", "light")
    }
    window.location.reload();
}


//theam work is finish 💯💯💯




//menu bar work is start 😃😃😃

let menu = document.getElementById("bar");
let nevbar = document.getElementById("nev");
let closeNevbar = document.getElementById("closeNevbar");

if (bar) {
    menu.addEventListener('click', () => {
        nevbar.classList.add("active")

    })
}

if (closeNevbar) {
    closeNevbar.addEventListener('click', () => {
        nevbar.classList.remove("active")

    })
}

//menu bar work is complete 🤒🤒🤒


//slider in single product 🫡🫡🫡

let mainImg = document.getElementById("mainimg");
let smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = () => {
    mainImg.src = smallimg[0].src
}

smallimg[1].onclick = () => {
    mainImg.src = smallimg[1].src
}

smallimg[2].onclick = () => {
    mainImg.src = smallimg[2].src
}

smallimg[3].onclick = () => {
    mainImg.src = smallimg[3].src
}

//slider finish single product 🫡🫡🫡
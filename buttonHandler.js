var mode = "light";
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
function onClick() {
    let sheets = document.getElementById('theme');
    if(mode == "light") {
        let photo = document.getElementById('photo-of-me');
        if (photo) {
            photo.src = "dark.jpg";
        }
        mode = "dark";    
        sessionStorage.setItem("clicked","dark");
    }
    else {
        let photo = document.getElementById('photo-of-me');
        if (photo) {
            photo.src = "photo.jpg";
        }
        mode = "light";
        sessionStorage.setItem("clicked","light");
    }
    sheets.href = mode + ".css";
}
function addHandler() {
    let photo = document.getElementById('photo-of-me');
    if (prefersDarkScheme.matches) {
        if (photo) {
            document.getElementById('photo-of-me').src = "dark.jpg";
        }
        mode = "dark";
    }
    if (sessionStorage.getItem("clicked")) {
        console.log(sessionStorage.getItem("clicked"));
        mode = sessionStorage.getItem("clicked");
        var sheets = document.getElementById('theme');
        sheets.href = mode + ".css";
        
        if (photo) {
            if(mode == "dark") {
                photo.src = "dark.jpg";
            }
            else {
                photo.src = "photo.jpg";
            }
        }
    }
    else {
        mode = prefersDarkScheme.matches ? 'dark' : 'light';
        var sheets = document.getElementById('theme');
        sheets.href = mode + ".css";
        
        if (photo) {
            if(mode == "dark") {
                photo.src = "dark.jpg";
            }
            else {
                photo.src = "photo.jpg";
            }
        }
    }
    document.getElementById("toggle_dark").addEventListener("click", onClick);
    
}

document.addEventListener('DOMContentLoaded', function (event) {
	addHandler();
});
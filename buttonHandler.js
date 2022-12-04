var mode = "light";
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
function onClick() {
    let sheets = document.getElementById('theme');
    if(mode == "light") {
        let photo = document.getElementById('photo-of-me');
        let embed = document.getElementById('itch-embed');
        if (photo) {
            photo.src = "dark.jpg";
        }
        if (embed) {
            embed.src = "https://itch.io/embed/1807848?dark=true";
        }
        mode = "dark";    
        sessionStorage.setItem("clicked","dark");
    }
    else {
        let photo = document.getElementById('photo-of-me');
        let embed = document.getElementById('itch-embed');
        if (photo) {
            photo.src = "photo.jpg";
        }
        if (embed) {
            embed.src = "https://itch.io/embed/1807848";
        }
        mode = "light";
        sessionStorage.setItem("clicked","light");
    }
    sheets.href = mode + ".css";
}
function addHandler() {
    let photo = document.getElementById('photo-of-me');
    let embed = document.getElementById('itch-embed');
    if (prefersDarkScheme.matches) {
        if (photo) {
            document.getElementById('photo-of-me').src = "dark.jpg";
        }
        if (embed) {
            embed.src = "https://itch.io/embed/1807848?dark=true";
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
                embed.src = "https://itch.io/embed/1807848?dark=true";
                photo.src = "dark.jpg";
            }
            else {
                embed.src = "https://itch.io/embed/1807848";
                photo.src = "photo.jpg";
            }
        }
    }
    document.getElementById("toggle_dark").addEventListener("click", onClick);
    
}

document.addEventListener('DOMContentLoaded', function (event) {
	addHandler();
});
var mode = "light";
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
function onClick() {
    let sheets = document.getElementById('theme');
    if (mode == "light") {
        mode = "dark";
        sessionStorage.setItem("clicked","dark");
    }
    else {
        mode = "light";
        sessionStorage.setItem("clicked","light");
    }
    sheets.href = sheets.dataset.pathrel + "/" + mode + ".css";
}
function addHandler() {
    if (sessionStorage.getItem("clicked")) {
        console.log("stored pref: " + sessionStorage.getItem("clicked"));
        mode = sessionStorage.getItem("clicked");
        var sheets = document.getElementById('theme');
        sheets.href = sheets.dataset.pathrel + "/" + mode + ".css";
    }
    else {
        mode = prefersDarkScheme.matches ? '../dark' : '../light';
        var sheets = document.getElementById('theme');
        sheets.href = sheets.dataset.pathrel + "/" + mode + ".css";
    }
    document.getElementById("toggle_dark").addEventListener("click", onClick);
    
}

document.addEventListener('DOMContentLoaded', function (event) {
	addHandler();
});
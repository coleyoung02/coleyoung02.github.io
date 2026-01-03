var mode = "light";
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
function onClick() {
    if (mode == "light") {
        mode = "dark";
        sessionStorage.setItem("clicked","dark");
    }
    else {
        mode = "light";
        sessionStorage.setItem("clicked","light");
    }
    doSwap();
}
function addHandler() {
    if (sessionStorage.getItem("clicked")) {
        mode = sessionStorage.getItem("clicked");
    }
    else {
        mode = prefersDarkScheme.matches ? 'dark' : 'light';
    }
    doSwap();
    document.getElementById("toggle_dark").addEventListener("click", onClick);
}
function doSwap() {
    let sheets = document.getElementById('theme');
    sheets.href = sheets.dataset.pathrel + "/" + mode + ".css";
    let mapping;
    if (mode==="light") {
        mapping = {
            "[bg-color]": "ffffff",
            "[link-color]": "00660E"
        }
    }
    else { 
        mapping = {
            "[bg-color]": "000000",
            "[link-color]": "00CB22"
        }
    }
    for (const element of document.getElementsByClassName("bandcamp")) {
        let url = "https://bandcamp.com/EmbeddedPlayer/album=1173127828/size=large/bgcol=[bg-color]/linkcol=[link-color]/tracklist=false/artwork=small/track=2954856886/transparent=true/";
        for (const [key, value] of Object.entries(mapping)) {
            url = url.replace(key, value);
        }
        element.setAttribute("src", url)
    }
}

document.addEventListener('DOMContentLoaded', function (event) {
	addHandler();
});
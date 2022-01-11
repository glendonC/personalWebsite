let myName = document.getElementById("name");
let aboutMe = document.getElementById("about-me-nav");
let currentProjects = document.getElementById("current-projects-nav");
let futureGoals = document.getElementById("future-goals-nav");

function mouseHover() {
    myName.innerHTML="Chin Glendon";
}

function mouseOut() {
    myName.innerHTML = "Glendon Chin";
}

aboutMe.addEventListener("mouseover", mouseHover);
aboutMe.addEventListener("mouseout", mouseOut);

var lives = 0;
function updateLives() {
    lives = lives + 1;
    document.getElementById("lives").innerHTML = "Lives : " + lives;
}
function saveLives() {
    localStorage.setItem("lives",lives);      
}

function nextPage() {
    window.location= "final_page.html";
}

function showLives() {
    lives = localStorage.getItem("lives");   
    document.getElementById("lives").innerHTML =  "Lives : " + lives;
}

function logout() {
    localStorage.removeItem("lives");
    window.location="index.html";
}
function loginD(){
    window.location.replace("./auth")
}
function quit(){
    window.location.replace("./auth/logout")
}
function painel(){
    window.location.replace("./panel")
}
function home(){
    window.location.replace("./")
}
function about(){
    window.location.replace("./about")
}
function contact(){
    window.location.replace("./contact")
}
function rules() {
    window.location.replace("./rules")
}
function addBot(){
    window.open("https://discord.com/api/oauth2/authorize?client_id=734382741701001256&permissions=8&scope=bot%20applications.commands")
}
function commandsBot() {
    window.location.replace("./commands")
}

function myFunction(x) {
    const menu = document.getElementById('menu')
    if (x.matches) { // If media query matches
        menu.classList.add("overmenu");
    } else {
        menu.classList.remove("overmenu");
    }
}
  
var x = window.matchMedia("(max-width: 1000px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state

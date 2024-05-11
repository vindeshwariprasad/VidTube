var menu = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".cointainer");

menu.onclick = function() {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")
    
}

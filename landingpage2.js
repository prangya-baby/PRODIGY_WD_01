const menubar = document.getElementById("menu-bar");
const navlist = document.getElementById("navlist");

menubar.addEventListener("click", ()=>{
    navlist.classList.toggle("navlist-active");
})
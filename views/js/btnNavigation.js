//This file manages the click of the button that is used to display the menu on mobile as well as to close the latter
// get class btn
const btnExitNavMobile=document.querySelector(".btnExitNavMobile");
const btnNavMobile=document.querySelector(".btnNavMobile");
const nav=document.querySelector(".nav");
btnNavMobile.addEventListener('click',()=>{
    btnNavMobile.classList.add("notPrint");
    nav.classList.add("activeNav");
})
btnExitNavMobile.addEventListener('click',()=>{
    nav.classList.remove("activeNav");
    btnNavMobile.classList.remove("notPrint");
})
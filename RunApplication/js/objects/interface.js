// document.getElementsByClassName(".closebtn").addEventListener("click", openNav);
// function openNav(){
//     document.getElementById("mySidenav").style.width = "100%";
// }

document.querySelector(".closebtn").addEventListener("click", ()=>{
    document.getElementById("mySidenav").style.width = "0%";
});

document.querySelector(".cursor").addEventListener("click", ()=>{
    document.getElementById("mySidenav").style.width = "100%";
});

//menu
const menuList = window.document.getElementById("menu-list");

//button
const button = window.document.getElementById('menu-icon');

//when user clicks on the button the function 'showMenu' is called
button.addEventListener('click', showMenu);

//console.log(menuList);

//set maximum list height to 0px
menuList.style.maxHeight = "0px";

//function to show and hide menu
function showMenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "120px";
    }else{
        menuList.style.maxHeight = "0px";
    }
}
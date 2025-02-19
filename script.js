let crossmenu = document.querySelector('.crossmenu')
let menu1 = document.querySelector('.menu1')
let menuContainer = document.querySelector('.menu-container');

function clickedCross() {
    menuContainer.style.width = '0'
}
function clickedOpen() {
    menuContainer.style.width = '10rem'
    console.log('clicked open');

}
/* Select the bruger button */

const burger = document.querySelector('.burger');
const links = document.querySelector('.links');
burger.addEventListener('click', function(){
    links.classList.toggle("h-0");
})
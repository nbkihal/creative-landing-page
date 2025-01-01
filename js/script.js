let img = document.querySelector('.img');
let container = document.querySelector('.container');
function phones(phone){
  img.src = phone;
}

function colors(color){
  container.style.background = color;
}

let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY ) {
    
    navbar.style.transform = 'translateY(-100%)';
  } else {
    
    navbar.style.transform = 'translateY(0)';
  }
  lastScrollY = window.scrollY;
});
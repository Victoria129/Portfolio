const openBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.menu-links');

openBtn.addEventListener('click', function (){
  mobileMenu.classList.add('show-menu');
});

closeBtn.addEventListener('click', function (){
  mobileMenu.classList.remove('show-menu');
});

navLinks.forEach(function(link) {
  link.addEventListener('click', function(){
    mobileMenu.classList.remove('show-menu');
  });
}) ;
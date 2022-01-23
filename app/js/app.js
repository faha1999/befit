let menu = document.querySelector('#customs');
let navbar = document.querySelector('.header .navbar-nav');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  //menu.classList.add('fa-times'); fa-xmark
  //document.querySelector('.navbar-toggler').classList.add('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

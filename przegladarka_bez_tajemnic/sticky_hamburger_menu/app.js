document.addEventListener('DOMContentLoaded', () => {

  //selector
  const hamburgerMenuSelector = document.getElementById('hamburger-menu');
  
  const toggleButtonSelector = document.getElementsByClassName('toggle-button')[0];
  
  const navbarMenuSelector = document.querySelector('#ul-id');
  const navbarSelector = document.querySelector('.navbar');


  //vars
  let navbarOffsetTop = navbarSelector.offsetTop;
  let isHamburgerClicked = false;

 


  window.onscroll = () => {manageStickyMenu()};

  toggleButtonSelector.addEventListener('click', () => {
    console.log('clicked');
    navbarMenuSelector.classList.toggle('active');
    navbarSelector.classList.toggle('active');

  })
  
  // hamburgerMenuSelector.addEventListener('click', () => {

  //   console.log('ham clicked');

  //   if(!isHamburgerClicked) {

  //     navbarMenuSelector.classList.add('navbar__menu-on');


  //     // navbarMenuSelector.style.cssText += ' display: block; display: flex; flex-direction: column';
  //     // // navbarIdSelector.cssText = `height: 60px; background: #111; display: flex; justify-content: center; align-items: center; flex-direction: column; background: gray`;
  //     // navbarIdSelector.cssText = `height: 60px; background: #111; display: flex; justify-content: center; align-items: center; flex-direction: column`;



  //   }

  // })








  function manageStickyMenu(){

    if(window.pageYOffset > navbarOffsetTop){
      navbarSelector.classList.add("sticky");
    } else {
      navbarSelector.classList.remove("sticky");
    }

  }

})
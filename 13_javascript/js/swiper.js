const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

window.onload = myFunc;
onresize = myFunc;
function myFunc ()
{
  var hero_height = document.querySelector('.hero-container').offsetHeight
  document.querySelector('.swiper-container').style.height = hero_height + 'px';
};

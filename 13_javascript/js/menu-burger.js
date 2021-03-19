const menu = document.querySelector('.nav__list');
var is_active_menu = false;
var icons = ['.burger-pic-close', '.burger-pic'];

function change_icon(from, to) {
  $(from).fadeOut(300, function() {
    $(from).removeClass('is-active');
    $(to).fadeIn(300, function() {
      $(to).addClass('is-active');
    });
  });
}

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.burger').addEventListener('click', function () {
    menu.classList.toggle('open-menu')
    is_active_menu = !is_active_menu
    change_icon(icons[Number(is_active_menu)], icons[Number(!is_active_menu)]);
  })
})

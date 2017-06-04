$('.header__has-submenu').hover(function() {
  let dropdownMenu = $(this).find('.header__submenu').eq(0);

  dropdownMenu.stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.header__submenu').eq(0).stop(true, true).delay(200).fadeOut(500);
});
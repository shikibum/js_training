(function() {
  'use strict';

  var menuItems = document.getElementsByClassName('menu_item');

  var i;

  for (i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function(e) {
      e.preventDefault();
    });
  }
})();

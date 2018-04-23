(function() {
  'use strict';

  var menuItems = document.getElementsByClassName('menu_item');

  var i;

  for (i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function(e) {
      e.preventDefault();

      var i;

      for (i = 0; i < menuItems.length; i++) {
        menuItems[i].className = 'menu_item';
      }
      this.className = 'menu_item active';

    });
  }
})();

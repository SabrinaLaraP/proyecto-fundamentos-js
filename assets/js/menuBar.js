var propMenu = {

    barsMenu: document.getElementById('bars_Menu'),
    slideMenu: document.getElementById('slide_Menu'),
    menuActivo: false,
    elementsMenu: document.querySelectorAll('#slide_Menu .menuPrincipal li a')

}

var metMenu = {

    inicio: function() {

        propMenu.barsMenu.addEventListener('click', metMenu.toggleMenu);

        for (var i = 0; i < propMenu.elementsMenu.length; i++) {

            propMenu.elementsMenu[i].addEventListener('click', metMenu.ocultarMenu);

        }
        
    },

    toggleMenu: function() {
        if ( propMenu.menuActivo == false ) {

            propMenu.menuActivo = true;
            propMenu.slideMenu.className = propMenu.slideMenu.className + ' activeSlide';
            
        } else {

            propMenu.menuActivo = false;
            propMenu.slideMenu.className = propMenu.slideMenu.className.replace('activeSlide', '');

        }
    },

    ocultarMenu: function () {
        propMenu.menuActivo == false
        propMenu.slideMenu.className = propMenu.slideMenu.className.replace('activeSlide', '');
    }
    
}

metMenu.inicio();
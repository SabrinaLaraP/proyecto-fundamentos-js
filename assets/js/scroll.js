var propScroll = {

    position: window.pageYOffset,
    scrollSuave: document.getElementsByClassName('scrollSuave'),
    volverArriba: document.getElementsByClassName('volverArriba'),
    destino: null,
    seccionDistancia: null,
    intervalo: null

}

var metScroll = {

    inicio: function () {

        for (var i = 0; i <  propScroll.scrollSuave.length; i++) {
            propScroll.scrollSuave[i].addEventListener('click', metScroll.moverse);
            
        }

        for (var i = 0; i <  propScroll.volverArriba.length; i++) {
            propScroll.volverArriba[i].addEventListener('click', metScroll.subir);
            
        }

    },

    moverse: function (e) {
        e.preventDefault();
        clearInterval(propScroll.intervalo);
        propScroll.destino = this.getAttribute('href');
        propScroll.seccionDistancia = document.querySelector(propScroll.destino).offsetTop - 70;

        propScroll.position = window.pageYOffset;
        propScroll.intervalo = setInterval(function (){

            if (propScroll.position < propScroll.seccionDistancia) {

                propScroll.position += 30;

                if (propScroll.position >= propScroll.seccionDistancia) {
                    clearInterval(propScroll.intervalo);

                }
                
            } else {

                propScroll.position -= 30;

                if (propScroll.position <= propScroll.seccionDistancia) {
                    clearInterval(propScroll.intervalo);

                }

            }

            window.scrollTo(0, propScroll.position);

        }, 15);
    
    },

    subir: function (e) {
        e.preventDefault();
        clearInterval(propScroll.intervalo);
        propScroll.position = window.pageYOffset;
        propScroll.intervalo = setInterval(function(){

            if(propScroll.position > 0) {

                propScroll.position -= 30;

                if(propScroll.position <= 0) {
                    clearInterval();
                }

            } else {
                return;
            }

            window.scrollTo(0, propScroll.position);

        }, 15)

    }

}

metScroll.inicio();
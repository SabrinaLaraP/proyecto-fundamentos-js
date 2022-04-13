
var propParallaxScroll = {
    sky: document.getElementById("sky"),
    montain: document.getElementById("montain"),
    text: document.getElementById("text"),
    value: ''  
}

var metParallaxScroll = {

    inicio: function () {

        window.addEventListener('scroll', function () {  

            propParallaxScroll.value = window.scrollY;

            propParallaxScroll.sky.style.top = propParallaxScroll.value * 0.5 + 'px';
            propParallaxScroll.montain.style.top = -propParallaxScroll.value * -0.15 + 'px';
            propParallaxScroll.text.style.top = propParallaxScroll.value * 1 + 'px';
        })
    }
}

metParallaxScroll.inicio();

window.addEventListener('scroll', function() {

    var nav = document.querySelector('nav')
    nav.classList.toggle('sticky', window.scrollY > 0);
    
});




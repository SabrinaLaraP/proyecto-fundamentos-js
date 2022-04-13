var propTabs = {
    
    firstTitle: document.getElementById('arriveTitle').firstElementChild,
    firstText: document.getElementById('arriveText').firstElementChild,
    linkTitle: document.querySelectorAll('#arriveTitle li a'),
    liTitle: document.querySelectorAll('#arriveTitle li'),
    divContent: document.querySelectorAll('#arriveText > div'),
    contentActive: ''

}

var metTabs = {

    inicio: function() {
        propTabs.firstTitle.className = 'active';
        propTabs.firstText.className = 'active';

        for (var i = 0; i < propTabs.linkTitle.length; i++) {
            propTabs.linkTitle[i].addEventListener('click', metTabs.evento);
        }
    },

    evento: function (e) { 
        e.preventDefault();

        for (var i = 0; i < propTabs.liTitle.length; i++) {
            propTabs.liTitle[i].className = '';
            
        }

        for (var i = 0; i < propTabs.divContent.length; i++) {
            propTabs.divContent [i].className = '';
            
        }
        
        this.parentElement.className = 'active';
        propTabs.contentActive = this.getAttribute('href');
        document.querySelector(propTabs.contentActive).className = 'active';
        document.querySelector(propTabs.contentActive).style.opacity = 0;
        setTimeout(function(){
            document.querySelector(propTabs.contentActive).style.opacity = 1;
        }, 200);
        
    }
    
}

metTabs.inicio();
var propForm = {
    form: document.formularioContacto,
    elements: document.formularioContacto.elements,
    error: null,
    textError: null
}

var metForm = {

    inicio: function(){
        for (var i = 0; i < propForm.elements.length; i++) {

            if( propForm.elements[i].type == 'text' || propForm.elements[i].type == 'email' || propForm.elements[i].nodeName.toLowerCase() == 'textarea' ){
                propForm.elements[i].addEventListener('focus', metForm.focusInput );
                propForm.elements[i].addEventListener('blur', metForm.blurInput );

            }
              
        }

        propForm.form.addEventListener('submit', metForm.validateInputs);
    },

    focusInput: function () {  
        this.parentElement.children[1].className = 'label activeForm';
    },

    blurInput: function () {
        if (this.value == '') {
            this.parentElement.children[1].className = 'label';
        }
        
    },

    validateInputs: function(e) {
        for (var i = 0; i < propForm.elements.length; i++) {
            
            if( propForm.elements[i].value == '' ){
                e.preventDefault();

                 
                if(propForm.elements[i].parentElement.children.length < 3){

                    propForm.error = document.createElement('p');
                    propForm.textError = document.createTextNode('Por favor llena el campo con tu ' + propForm.elements[i].name);
                    propForm.error.appendChild(propForm.textError);
                    propForm.error.className = 'error';

                    propForm.elements[i].parentElement.appendChild(propForm.error);

                }
            }  else {

                if(propForm.elements[i].parentElement.children.length >= 3) {
                    propForm.error = propForm.elements[i].parentElement.getElementsByTagName('p')[0];
                    propForm.elements[i].parentElement.removeChild(propForm.error);
                }
                    
            }
        }
    }
}

metForm.inicio();

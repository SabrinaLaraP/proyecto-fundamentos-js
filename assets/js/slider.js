var slides = document.querySelector('.sliderItems').children;
var nextSlide =  document.querySelector('.rightSlide');
var prevSlide =  document.querySelector('.leftSlide');
var totalSlides = slides.length;
var index = 0;

nextSlide.onclick = function () {  
    next('next');
    resetTimer();
}

prevSlide.onclick = function () {  
    next('prev');
    resetTimer();
}

function next(direction){

    if(direction == 'next'){
        index++;
        if(index == totalSlides){
            index = 0;
        }
    }
    else{   
        if(index==0){
            index=totalSlides-1;
        }
        else{
            index--;
        }
    }

    for(var i = 0; i < slides.length; i++){
        slides[i].classList.remove('active');

    }
    slides[index].classList.add('active');

}

// función slider automático 

function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoplay, 4000);
}

function autoplay(){
    next('next');
}

var timer = setInterval(autoplay, 4000);



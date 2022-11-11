const button = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

//---------------------preloader--------------------

//DOM contentLoaded fires when the initial HTML document has been completely loaded and parsed, 
//without waiting for stylesheet, images, and subframes to finish loading

//load event is fired when the whole page has loaded, including all dependent resources such as stylesheets ans imgs
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function() {
    preloader.classList.add('hide-preloader');
})


//------------------video controls---------------------

//did not use toggle because slider needed video play/pause
//functionality, not just class toggle
button.addEventListener('click', function(){
    if(!button.classList.contains('slide')){
        button.classList.add('slide');
        video.pause();
    }else {
        button.classList.remove('slide');
        video.play();
    }
});
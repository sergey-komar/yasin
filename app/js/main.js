$(function () {
    $('.prize-slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
       
    });

    $('.reviews-slider__inner').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        arrows: false,
        dots: true
       
    });

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
      });

})

window.addEventListener('DOMContentLoaded', () => {

//HEADER
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
       if(window.scrollY > 10){
        header.classList.add('header-bg')
       }else{
        header.classList.remove('header-bg')
       }
    })


 // получаем все элементы
    const headingBlock = document.querySelector('.heading-block');
    var videoEl = document.getElementsByTagName('video')[0],
    playBtn = document.getElementById('playBtn'),
    vidControls = document.getElementById('controls');
   

    playBtn.addEventListener('click', () => {
        headingBlock.classList.toggle('block-hidden');
    })

        // если браузер может воспроизводить видео удаляем класс
        videoEl.addEventListener('canplaythrough', function () {
        vidControls.classList.remove('hidden');
        }, false);
        // запускам или останавливаем воспроизведение
        playBtn.addEventListener('click', function () {
            if (videoEl.paused) {
                videoEl.play();
            } else {
                videoEl.pause();
            }
            const path = videoEl.getAttribute('controls');
            videoEl.setAttribute('controls', path);

            }, false)


        videoEl.addEventListener('play', function () {

        playBtn.innerText = "";
        }, false);

        videoEl.addEventListener('pause', function () {

        playBtn.innerText = "Play";
        }, false);

        
        videoEl.addEventListener('ended', function () {
        videoEl.currentTime = 0;
        }, false);





    // получаем все элементы video 2
    var videoEl1 =  document.getElementsByTagName('video')[1],
    playBtn1 = document.getElementById('playBtn-1')
    vidControls = document.getElementById('controls');
   
    
        // если браузер может воспроизводить видео удаляем класс
        videoEl1.addEventListener('canplaythrough', function () {
        vidControls.classList.remove('hidden');
        }, false);
        // запускам или останавливаем воспроизведение
        playBtn1.addEventListener('click', function () {
            if (videoEl1.paused) {
                videoEl1.play();
            } else {
                videoEl1.pause();
            }
            const path = videoEl1.getAttribute('controls');
            videoEl1.setAttribute('controls', path);
            }, false)


        videoEl1.addEventListener('play', function () {

        playBtn1.innerText = "";
        }, false);

        videoEl1.addEventListener('pause', function () {

        playBtn1.innerText = "Play";
        }, false);

        
        videoEl1.addEventListener('ended', function () {
        videoEl1.currentTime = 0;
        }, false);



         // получаем все элементы video 3
    var videoEl2 =  document.getElementsByTagName('video')[2],
    playBtn = document.getElementById('playBtn-2'),
    vidControls = document.getElementById('controls');
   

        // если браузер может воспроизводить видео удаляем класс
        videoEl2.addEventListener('canplaythrough', function () {
        vidControls.classList.remove('hidden');
        }, false);
        // запускам или останавливаем воспроизведение
        playBtn.addEventListener('click', function () {
            if (videoEl2.paused) {
                videoEl2.play();
            } else {
                videoEl2.pause();
            }

            const path = videoEl2.getAttribute('controls');
            videoEl2.setAttribute('controls', path);
            }, false)


        videoEl2.addEventListener('play', function () {

        playBtn.innerText = "";
        }, false);

        videoEl2.addEventListener('pause', function () {

        playBtn.innerText = "Play";
        }, false);

        
        videoEl2.addEventListener('ended', function () {
        videoEl2.currentTime = 0;
        }, false);






});
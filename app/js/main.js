$(function () {
  $(".prize-slider__inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });

  $(".reviews-slider__inner").slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //qty-btn
  $(".qty-btn").on("click", function (e) {
    e.preventDefault();
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.hasClass("inc")) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $button.parent().find("input").val(newVal);
  });

  //Fancybox

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  // $('[data-fancybox="gallery"]').fancybox({
  //     // Options will go here
  // });
});

window.addEventListener("DOMContentLoaded", () => {
  //HEADER
  const header = document.querySelector(".header");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        header.classList.add("header-bg");
      } else {
        header.classList.remove("header-bg");
      }
    });
  }

  
  // получаем все элементы
  const headingBlock = document.querySelector(".heading-block");
  const headingVideo = document.querySelector(".heading__video");
  var videoEl = document.getElementsByTagName("video")[0],
    playBtn = document.getElementById("playBtn"),
    vidControls = document.getElementById("controls");

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      headingBlock.classList.toggle("block-hidden");
    });
  }

  if (videoEl && vidControls && playBtn && headingVideo) {
    // если браузер может воспроизводить видео удаляем класс
    videoEl.addEventListener(
      "canplaythrough",
      function () {
        vidControls.classList.remove("hidden");
      },
      false
    );
    // запускам или останавливаем воспроизведение
    playBtn.addEventListener(
      "click",
      function () {
        if (videoEl.paused) {
          videoEl.play();
        } else {
          videoEl.pause();
        }
        headingVideo.classList.toggle("hidden-video");
        const path = videoEl.getAttribute("controls");
        videoEl.setAttribute("controls", path);
      },
      false
    );
  }

  if (videoEl && playBtn) {
    videoEl.addEventListener(
      "play",
      function () {
        playBtn.innerText = "";
      },
      false
    );

    videoEl.addEventListener(
      "pause",
      function () {
        playBtn.innerText = "";
      },
      false
    );
  }

  if (videoEl) {
    videoEl.addEventListener(
      "ended",
      function () {
        videoEl.currentTime = 0;
      },
      false
    );
  }

  // получаем все элементы video 2
  var videoEl1 = document.getElementsByTagName("video")[1],
    playBtn1 = document.getElementById("playBtn-1");
  vidControls = document.getElementById("controls");

  if (videoEl1 && vidControls && playBtn1) {
    // если браузер может воспроизводить видео удаляем класс
    videoEl1.addEventListener(
      "canplaythrough",
      function () {
        vidControls.classList.remove("hidden");
      },
      false
    );
    // запускам или останавливаем воспроизведение
    playBtn1.addEventListener(
      "click",
      function () {
        if (videoEl1.paused) {
          videoEl1.play();
        } else {
          videoEl1.pause();
        }
        const path = videoEl1.getAttribute("controls");
        videoEl1.setAttribute("controls", path);
      },
      false
    );
  }

  if (videoEl1 && playBtn1) {
    videoEl1.addEventListener(
      "play",
      function () {
        playBtn1.innerText = "";
      },
      false
    );

    videoEl1.addEventListener(
      "pause",
      function () {
        playBtn1.innerText = "";
      },
      false
    );
  }

  if (videoEl1) {
    videoEl1.addEventListener(
      "ended",
      function () {
        videoEl1.currentTime = 0;
      },
      false
    );
  }

  // получаем все элементы video 3
  var videoEl2 = document.getElementsByTagName("video")[2],
    playBtn2 = document.getElementById("playBtn-2"),
    vidControls = document.getElementById("controls");

  if (videoEl2 && vidControls && playBtn) {
    // если браузер может воспроизводить видео удаляем класс
    videoEl2.addEventListener(
      "canplaythrough",
      function () {
        vidControls.classList.remove("hidden");
      },
      false
    );
    // запускам или останавливаем воспроизведение
    playBtn2.addEventListener(
      "click",
      function () {
        if (videoEl2.paused) {
          videoEl2.play();
        } else {
          videoEl2.pause();
        }

        const path = videoEl2.getAttribute("controls");
        videoEl2.setAttribute("controls", path);
      },
      false
    );
  }

  if (videoEl2 && playBtn2) {
    videoEl2.addEventListener(
      "play",
      function () {
        playBtn2.innerText = "";
      },
      false
    );

    videoEl2.addEventListener(
      "pause",
      function () {
        playBtn2.innerText = "";
      },
      false
    );
  }

  if (videoEl2) {
    videoEl2.addEventListener(
      "ended",
      function () {
        videoEl2.currentTime = 0;
      },
      false
    );
  }

  //MENU
  const menu = document.querySelector(".menu");
  const mobile = document.querySelector(".nav-icon");

  mobile.addEventListener("click", function () {
    this.classList.toggle("nav-icon--active");
    menu.classList.toggle("nav--active");
  });
});

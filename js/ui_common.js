$(function () {
  $(window).on('scroll', function () {
    var st = $(this).scrollTop();

    if (st > 0) {
      $('#header').addClass('fixed');
    } else {
      $('#header').removeClass('fixed');
    }
  });

  // 헤더 fixed 클래스
  $('#header').on('mouseenter', function () {
    $(this).addClass('fixed');
  });
  $('#header').on('mouseleave', function () {
    $(this).removeClass('fixed');
  });

  // 헤더 gnb depth02
  $('#header .gnb .depth02').hide();

  $('#header .gnb>li>a').on('mouseenter', function () {
    $('#header').addClass('on');
    $(this).next().slideDown().parent().siblings().find('.depth02').hide();
  });

  $('#header .gnb>li').on('mouseleave', function () {
    $('#header').removeClass('on');
    $(this).find('.depth02').hide();
  });

  // 헤더 제휴문의
  $('#header .inquiry_area').hide();

  $('#header .btn_inquiry').on('click', function () {
    $('body').addClass('on');
    $('#header .dimmed').addClass('on');
    $('#header .inquiry_area').fadeIn();
  });

  $('#header .inquiry_area .btn_close ').on('click', function () {
    $('#header .inquiry_area').fadeOut();
    $('#header .dimmed').removeClass('on');
    $('body').removeClass('on');
  });

  // 헤더 all_menu
  $('#header .all_menu_area').hide();

  $('#header .util .btn_all_menu').on('click', function () {
    $('body').addClass('on');
    $('#header .dimmed').addClass('on');
    $('#header .all_menu_area').fadeIn();
  });

  $('#header .all_menu_area .btn_close ').on('click', function () {
    $('#header .all_menu_area').fadeOut();
    $('#header .dimmed').removeClass('on');
    $('body').removeClass('on');
  });

  // 메인 슬라이더
  function mainVisualSlider() {
    var mainSlider = new Swiper('.main_slider', {
      loop: true,
      autoplay: {
        delay: 6000,
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // 슬라이더 숫자 페이지네이션
      on: {
        slideChange: function () {
          $('.main_slider .paging_wrap .current').text(mainSlider.realIndex + 1);
        },
      },
    });

    var total = $('.main_slider .swiper-slide:not(.swiper-slide-duplicate)').length;

    $('.main_slider .paging_wrap .total').text(total);

    // - 슬라이더 버튼
    var btnFlag = true;

    $('.main_visual .main_slider .btn_pause').on('click', function () {
      if (btnFlag) {
        $(this).addClass('on');
        $(this).html('PLAY');
        $(this).siblings('progressbar').css({ animation: 'forwards' });
        mainSlider.autoplay.stop();
      } else {
        $(this).removeClass('on');
        $(this).html('STOP');
        mainSlider.autoplay.start();
      }
      btnFlag = !btnFlag;
    });
  }
  mainVisualSlider();

  // 베스트 메뉴 슬라이더
  function bestMenuSlider() {
    var bestmenuSlider = new Swiper('.best_menu_slider', {
      loop: true,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 'auto',
      spaceBetween: 60,
      centeredSlides: true,

      breakpoints: {
        767: {
          spaceBetween: 10,
        },
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    // - 슬라이더 버튼
    var btnFlag = true;

    $('.main_best_menu .best_menu_slider .paging_area .btn_puase').on('click', function () {
      if (btnFlag) {
        $(this).addClass('on');
        $(this).html('PLAY');
        bestmenuSlider.autoplay.stop();
      } else {
        $(this).removeClass('on');
        $(this).html('STOP');
        bestmenuSlider.autoplay.start();
      }
      btnFlag = !btnFlag;
    });
  }
  bestMenuSlider();

  // 신메뉴 슬라이더더
  var newmenuSlider = new Swiper('.new_menu_slider', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 50,
    centeredSlides: true,

    breakpoints: {
      767: {
        spaceBetween: 30,
      },
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // 유투브 팝업창
  $('.main_video .video_wrap .btn_play').on('click', function () {
    $('body').addClass('on');
    $('.main_video .youtube_popup').addClass('on');
  });

  $('.main_video .youtube_popup .btn_close').on('click', function () {
    $('body').removeClass('on');
    $('.main_video .youtube_popup').removeClass('on');
  });

  // sns 슬라이더
  var swiper = new Swiper('.sns_slider', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 'auto',
    spaceBetween: 20,

    breakpoints: {
      1200: {
        allowTouchMove: false,
        loop: false,
        autoplay: false,
        spaceBetween: 0,
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.main_sns .sns_slider .swiper-slide .sns').on('mouseenter', function () {
    $(this).find('.img_wrap_hov').fadeIn();
  });
  $('.main_sns .sns_slider .swiper-slide .sns').on('mouseleave', function () {
    $(this).find('.img_wrap_hov').fadeOut();
  });

  // 푸터 family_site 버튼
  $('#footer .family_wrap .btn_family').on('click', function () {
    $(this).next().slideToggle();
  });

  // 푸터 top 버튼
  $('#footer .top_wrap .btn_top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 800);
  });
});

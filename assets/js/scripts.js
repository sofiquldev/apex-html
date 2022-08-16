(function ($) {
    "use strict";

    /*________________________________
/*  set-remove sticky menu
/*_________________________________*/
    $(window).on("scroll load", stickyMenu);

    function stickyMenu() {
        if ($(window).scrollTop() > 100) {
            $(".header").addClass("sticky");
        } else {
            $(".header").removeClass("sticky");
        }
    }

    /*---------------------------------
/* Header Menu
/*---------------------------------*/

    if ($(".toggler-btn").length > 0) {
        $(".toggler-btn").on("click", function () {
            $(".header-menu").slideToggle(300);
        });
    }

    /*---------------------------------
/* Testimonial Sliders
/*---------------------------------*/
    var testimonial = new Swiper(".testi__swiper", {
        loop: false,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        navigation: {
            nextEl: ".testi__nav .next",
            prevEl: ".testi__nav .prev",
        },
        breakpoints: {
            480: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2.5,
            },
            992: {
                slidesPerView: 3.5,
                spaceBetween: 30,
            },
        },
    });
    /*---------------------------------
/* homeowner Sliders
/*---------------------------------*/
    var homeownerSlider = new Swiper(".homeowner__swiper", {
        loop: false,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
            el: ".homeowner__pagination",
            clickable: true,
        },
        breakpoints: {
            575: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1.5,
            },
            1024: {
                slidesPerView: 1.75,
                spaceBetween: 65,
            },
            1440: {
                slidesPerView: 2,
                spaceBetween: 110,
            },
        },
    });
})(jQuery);

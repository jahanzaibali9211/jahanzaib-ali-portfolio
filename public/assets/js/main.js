/**
 *	jahanzaib - Personal Portfolio Templete (HTML)
 *	Author: codeefly
 *	Author URL: http://themeforest.net/user/codeefly
 *	Copyright © jahanzaib by codeefly. All Rights Reserved.
 **/

(function ($) {
  "use strict";
  console.clear();

  let device_width = window.innerWidth;
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  var isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(
      navigator.userAgent
    )
      ? true
      : false;

  var jahanzaib = {
    /* jahanzaib init */
    init() {
      jahanzaib.mobileMenu(),
        jahanzaib.parallaxie(),
        jahanzaib.customMouse();
      jahanzaib.magnificPopup(),
        jahanzaib.serviceHover();
    },
    /** Mobile Menu */
    mobileMenu() {
      if ($(".main_menu").offset() != undefined) {
        var navoff = $(".main_menu").offset().top;
        $(window).scroll(function () {
          var scrolling = $(this).scrollTop();

          if (scrolling > navoff) {
            $(".main_menu").addClass("menu_fix");
          } else {
            $(".main_menu").removeClass("menu_fix");
          }
        });
      }
      /** Mobile Menu Button */
      $(".menu_2_icon").on("click", function () {
        $(".menu_2_icon").toggleClass("show_icon");
      });
      $(".menu_2_icon").on("click", function () {
        $(".main_menu_2").toggleClass("show_menu");
      });
      $(".navbar-toggler").on("click", function () {
        $(".navbar-toggler").toggleClass("show");
      });
    },
    /** parallaxie */
    parallaxie() {
      $(".tf__subscribe").parallaxie({
        speed: 0.8,
        size: "cover",
      });
    },
    /** Mouse */
    customMouse() {
      var mouse = { x: 0, y: 0 }; // Cursor position
      var pos = { x: 0, y: 0 }; // Cursor position
      var ratio = 0.15; // delay follow cursor
      var active = false;
      var ball = $("#ball");

      /** default */
      const defaultValue = {
        duration: 0.3,
        opacity: 0.5,
        width: "30px",
        height: "30px",
        backgroundColor: "transparent",
        border: "2px solid #fff",
      };
      const hoverBall = {
        duration: 0.3,
        css: {
          borderWidth: 0,
          opacity: "1!important",
          width: "95px!important",
          height: "95px!important",
          backgroundColor: "#fff",
        },
      };
      gsap.set(ball, {
        // scale from middle and style ball
        xPercent: -50,
        yPercent: -50,
      });
      document.addEventListener("mousemove", mouseMove);
      function mouseMove(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
      gsap.ticker.add(updatePosition);
      function updatePosition() {
        if (!active) {
          pos.x += (mouse.x - pos.x) * ratio;
          pos.y += (mouse.y - pos.y) * ratio;

          gsap.set(ball, { x: pos.x, y: pos.y });
        }
      }
      // link
      $("a,.c-pointer,button,.progress")
        .not(".project_slider a") // omit from selection.
        .on("mouseenter", function () {
          gsap.to(ball, {
            duration: 0.3,
            borderWidth: 0,
            opacity: 0.5,
            backgroundColor: "#CCC",
            width: "80px",
            height: "80px",
          });
        })
        .on("mouseleave", function () {
          gsap.to(ball, defaultValue);
        });
      // Data cursor
      if ($("[data-cursor]")) {
        $("[data-cursor]").each(function () {
          $(this)
            .on("mouseenter", function () {
              ball.append('<div class="ball-view"></div>');
              $(".ball-view").append($(this).attr("data-cursor"));
              gsap.to(ball, hoverBall);
            })
            .on("mouseleave", function () {
              ball.find(".ball-view").remove();
              gsap.to(ball, defaultValue);
            });
        });
      }
      // Slider
      if ($(".slick-list")) {
        $(".slick-list").each(function () {
          $(this)
            .on("mouseenter", function () {
              ball.append(
                '<div class="ball-drag"><i class="far fa-angle-left"></i><i class="far fa-angle-right"></i></div>'
              );
              // $(".ball-drag").append("read more");
              gsap.to(ball, hoverBall);
            })
            .on("mouseleave", function () {
              ball.find(".ball-drag").remove();
              gsap.to(ball, defaultValue);
            });
        });
      }
      // Gallery
      if ($(".gallery")) {
        $(".gallery").each(function () {
          $(this)
            .on("mouseenter", function () {
              ball.append(
                '<div class="ball-gallery"><i class="fa-sharp fa-solid fa-eye"></i></div>'
              );
              // $(".ball-drag").append("read more");
              gsap.to(ball, hoverBall);
            })
            .on("mouseleave", function () {
              ball.find(".ball-gallery").remove();
              gsap.to(ball, defaultValue);
            });
        });
      }
    },
    magnificPopup() {
      $(".play_btn").each(function () {
        $(this).magnificPopup({
          type: "iframe",
          mainClass: "mfp-fade",
          preloader: false,
          fixedContentPos: true,
        });
      });
      $(".image_popup,.gallery_popup a").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
        mainClass: "mfp-fade",
      });
      $(".details").magnificPopup({
        type: "inline",
        overflowY: "auto",
        closeBtnInside: true,
        mainClass: "mfp-fade jahanzaib-popup",
      });
    },
    serviceHover() {
      const services = document.querySelectorAll(".tf__single_service_2");
      services.forEach((service) => {
        service.addEventListener("mouseenter", () => {
          document
            .querySelector(".tf__single_service_2.active")
            .classList.remove("active");
          service.classList.add("active");
        });
      });
    },
  };
  $(document).ready(function () {
    jahanzaib.init();
  });
})(jQuery);

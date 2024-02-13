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
      jahanzaib.textAnimation(),
        jahanzaib.headingAnimation(),
        jahanzaib.customMouse();
    },
    /** Text animation */
    textAnimation() {
      if (device_width > 767) {
        var hasAnim = $(".text_hover_animaiton");
        if (hasAnim.length !== 0) {
          hasAnim.each(function () {
            var $this = $(this);
            var splitType = "words,chars";
            new SplitText($this, {
              type: splitType,
              wordsClass: "menu-text",
            });
          });
        }
      }
    },
    headingAnimation() {
      var hasAnim = $(".has-animation");
      if (device_width > 767) {
        hasAnim.each(function () {
          var $this = $(this);
          var splitType = "lines, chars";
          var splitto = new SplitText($this, {
            type: splitType,
            linesClass: "anim_line",
            charsClass: "anim_char",
            wordsClass: "anim_word",
          });
          var lines = $this.find(".anim_line"),
            words = $this.find(".anim_word"),
            chars = $this.find(".anim_char");
          gsap.fromTo(
            chars,
            { y: "100%" },
            {
              y: "0%",
              duration: 0.8,
              stagger: 0.01,
              ease: "power2.out",
              scrollTrigger: {
                trigger: $(this).parent("div"),
                start: "top center+=300",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
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
  };
  $(document).ready(function () {
    jahanzaib.init();
  });
})(jQuery);

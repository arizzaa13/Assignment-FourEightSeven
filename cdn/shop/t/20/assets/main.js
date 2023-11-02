/** Shopify CDN: Minification failed

Line 98:2 Transforming const to the configured target environment ("es5") is not supported yet
Line 102:2 Transforming const to the configured target environment ("es5") is not supported yet
Line 109:4 Transforming const to the configured target environment ("es5") is not supported yet
Line 110:4 Transforming const to the configured target environment ("es5") is not supported yet
Line 111:4 Transforming const to the configured target environment ("es5") is not supported yet
Line 122:4 Transforming const to the configured target environment ("es5") is not supported yet
Line 123:4 Transforming const to the configured target environment ("es5") is not supported yet
Line 126:4 Transforming const to the configured target environment ("es5") is not supported yet
Line 127:4 Transforming const to the configured target environment ("es5") is not supported yet
Line 131:9 Transforming let to the configured target environment ("es5") is not supported yet
... and 15 more hidden warnings

**/
$(document).ready(function() {
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ?
                    target :
                    $("[name=" + this.hash.slice(1) + "]");
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $("html, body").animate({
                            scrollTop: target.offset().top,
                        },
                        1000,
                        function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) {
                                // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            }
                        }
                    );
                }
            }
        });

    var helpers = {
        addZeros: function(n) {
            return n < 10 ? "0" + n : "" + n;
        },
    };
    if ($(".hero-slider-trigger").length > 0) {
        $(".hero-slider-trigger").slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            pauseOnHover: false,
            arrows: true,
            nextArrow: ".slider-next-arrow",
            prevArrow: ".slider-prev-arrow",
            responsive: [{
                breakpoint: 640,
                settings: {
                    arrows: false,

                    dots: true,
                },
            }, ],
        });

        $(".hero-slider-trigger").on(
            "afterChange",
            function(event, slick, currentSlide) {
                $(".slide-count").html(helpers.addZeros(currentSlide + 1));
            }
        );
    }

    // Slideshow animation

    const bottles = gsap.utils.toArray(".slideshow");

    // Spinning bottles preload

    const bottlesArray = [
        "http://cdn.shopify.com/s/files/1/0293/4377/6816/t/2/assets/Decem_Bottle_v067_LondonDry_00",
        "https://cdn.shopify.com/s/files/1/0293/4377/6816/t/2/assets/Decem_Bottle_v066_SpicedBlend_00",
        "https://cdn.shopify.com/s/files/1/0293/4377/6816/t/2/assets/Decem_Bottle_v066_Aperitif_00",
    ];

    bottles.forEach((bottleWrap, i) => {
        const slideshow = $(bottleWrap).attr("id");
        const canvas = document.getElementById(slideshow);
        const context = canvas.getContext("2d");

        spinSize = function() {
            $(window).on("resize", function() {
                return $(window).height();
            });
        };

        canvas.width = 250;
        canvas.height = 650;

        const frameCount = 90;
        const currentFrame = (index) =>
            `${bottlesArray[i] + (index < 10 ? "0" + index : index).toString()}.png`;

        const images = [];
        const bottle = {
            frame: 0,
        };

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            images.push(img);
            img;
            img.onload = function() {
                var loaded = i;
                var percentage = 100 - parseInt((i / (frameCount - 1)) * 100) + "%";
                $(".percent").html(percentage);
                $(".progress").css("width", percentage);
                if (loaded == frameCount - 1) {
                    $(".percent-bar").hide();
                    setTimeout(function() {
                        $(".loader").removeClass("visible");
                        $("html").removeClass("lock");
                    }, 1000);
                }
            };
        }

        gsap.to(bottle, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            repeat: -1,
            duration: 3,
            // scrollTrigger: {
            //   scrub: 1,
            //   trigger: canvas,
            //   // start: "top-=400 top",
            //   // end: "bottom center",
            //   start: "top bottom",
            //   end: "bottom top",
            // },
            onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
        });

        //images[0].onload = render;

        function render() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(images[bottle.frame], 0, 0);
        }
    });

    // Parallax

    const boxes = gsap.utils.toArray(".parallax-element");
    var count = 0;
    boxes.forEach((box) => {
        const triggerEl = $(box).parents(".parallax-trigger");
        const $box = $(box);

        // Data from
        var fromX = $box.data("from-x") ? parseInt($box.data("from-x")) : 0;
        var fromY = $box.data("from-y") ? parseInt($box.data("from-y")) : 0;

        // Data to
        var toX = $box.data("x") ? parseInt($box.data("x")) : 0;
        var toY = $box.data("y") ? parseInt($box.data("y")) : 0;

        if ($(window).width() < 640) {
            toX =
                typeof $box.data("mobile-x") !== "undefined" ?
                parseInt($box.data("mobile-x")) :
                toX;
            toY =
                typeof $box.data("mobile-y") !== "undefined" ?
                parseInt($box.data("mobile-y")) :
                toY;
            fromX =
                typeof $box.data("mobile-from-x") !== "undefined" ?
                parseInt($box.data("mobile-from-x")) :
                fromX;
            fromY =
                typeof $box.data("mobile-from-y") !== "undefined" ?
                parseInt($box.data("mobile-from-y")) :
                fromY;
        } else if ($(window).width() < 1024) {
            toX =
                typeof $box.data("tablet-x") !== "undefined" ?
                parseInt($box.data("tablet-x")) :
                toX;
            toY =
                typeof $box.data("tablet-y") !== "undefined" ?
                parseInt($box.data("tablet-y")) :
                toY;
            fromX =
                typeof $box.data("tablet-from-x") !== "undefined" ?
                parseInt($box.data("tablet-from-x")) :
                fromX;
            fromY =
                typeof $box.data("tablet-from-y") !== "undefined" ?
                parseInt($box.data("tablet-from-y")) :
                fromY;
        }

        count += 1;

        var boxLoad = function() {
            let anim = gsap.fromTo(
                box, {
                    x: fromX,
                    y: fromY,
                }, {
                    y: toY,
                    ease: "slow.out",
                    x: toX,
                    delay: count,
                    scrollTrigger: {
                        trigger: triggerEl,
                        scrub: 1,
                    },
                }
            );
        };

        gsap.delayedCall(count / 100, boxLoad);

        if (count == boxes.length) {
            setTimeout(function() {
                window.dispatchEvent(new CustomEvent("resize"));
                ScrollTrigger.refresh();
            }, boxes.length * 50);
        }
    });

    // Sub Navigation

    var navEvent = "mouseover";

    gsap
        .timeline({
            scrollTrigger: {
                trigger: ".hero-block-wrap",
                scrub: 0.75,
                start: "bottom bottom",
                end: "bottom top",
            },
        })
        .to(".full-logo", {
            scale: function() {
                if ($(window).width() < 400) {
                    var final = 90;
                } else {
                    var final = 140;
                }
                var current = parseInt($(".full-logo").width());
                var scale = final / current;

                return scale;
            },
            transformOrigin: "top center",
            y: -45,
        })
        .to(".fade-out", {
            opacity: 0,
        });

    if ($(".hero-block").length != 0) {
        function getEnd() {
            if ($(window).width() > 1024) {
                return "bottom 1000px";
            } else {
                return "200px top";
            }
        }

        function getStart() {
            if ($(window).width() > 1024) {
                return "1000px top";
            } else {
                return "top top";
            }
        }

        gsap.to(".hero-text", {
            opacity: 0,
            scrollTrigger: {
                trigger: ".hero-block-wrap",
                start: getStart(),
                end: getEnd(),
                scrub: 1,
            },
        });
    }

    // if ($(window).width() > 1024) {

    // } else {
    //   if ($('.hero-block').length != 0)  {
    //     gsap.fromTo('.hero-text',
    //       {
    //         opacity:1
    //       },
    //       {
    //         opacity:0,
    //         scrollTrigger: {
    //           trigger:'.hero-block-wrap',
    //           start:'center top',
    //           end:'bottom top',
    //           markers:true
    //           // scrub:0.5
    //         }
    //       },
    //     )
    //   }
    // }

    function getEvent() {
        if ($(window).width() > 1024) {
            return "mouseover";
        } else {
            return "click";
        }
    }

    $(".trigger-sub-nav").on(getEvent(), function(e) {
        e.preventDefault();
        if ($(window).width() > 1024) {
            $(".cart-open").hide();
            $(".sub-nav, .overlay").addClass("visible");
            $("main").addClass("faded");
            $(".site-header").addClass("header-bg");
            $(".logo").hide();

            $(".sub-nav").on("mouseleave", function() {
                $(".sub-nav, .overlay").removeClass("visible");
                $("main").removeClass("faded");
                // $('.site-header').removeClass('blend');
                $(".sub-nav-product-image").removeClass("visible");
                $(".site-header").removeClass("header-bg");
                $(".cart-open").show();
                $(".logo").show();
            });
        } else {
            $(".site-header").toggleClass("header-bg");
            $(".sub-nav, .overlay").toggleClass("visible");
            $("main").toggleClass("faded");
            $(".site-header").toggleClass("blend");
            $(".cart-open").toggle();
            $(".logo").toggle();
        }
    });

    $(".sub-nav-link").on("mouseover", function() {
        if ($(window).width() > 1024) {
            var navProduct = $(this).data("sub-nav-product");
            $(".sub-nav-product-image").removeClass("visible");
            // $('.site-header').toggleClass('blend');
            $(
                '.sub-nav-product-image[data-sub-nav-product-image="' +
                navProduct +
                '"]'
            ).addClass("visible");
        }
    });

    $(window).trigger("resize");

    $(".overlay").on("click", function() {
        $(".site-header").removeClass("header-bg");
        $(".sub-nav, .overlay").removeClass("visible");
        $("main").removeClass("faded");
        $(".site-header").addClass("blend");
        $(".cart-open").show();
        $(".logo").show();
    });

    // Hide and show scrollbar

    // var mywindow = $(window);
    // var mypos = mywindow.scrollTop();
    // mywindow.scroll(function() {
    //   if (mypos > 50) {
    //     if(mywindow.scrollTop() > mypos)
    //     {
    //       $('.site-header').addClass('header-up');
    //     }
    //     else
    //     {
    //       $('.site-header').removeClass('header-up');
    //     }
    //   }
    //   mypos = mywindow.scrollTop();
    // });

    // Footer spinning circle

    gsap.to(".spin", {
        rotation: 100,
        scrollTrigger: {
            trigger: ".site-footer",
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1,
        },
    });

    // Product slider

    const productGallery = new Swiper(".product-gallery-slider", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        speed: 500,
        effect: "fade",
        pagination: {
            el: ".dots",
            type: "bullets",
            clickable: true,
        },
        fadeEffect: {
            crossFade: true,
        },
        on: {
            afterInit: function() {
                if ($(".product-gallery").length) {
                    var el = $(".product-gallery");
                    $(window).on("resize", function() {
                        var elHeight = el.outerHeight();
                        el.find(".swiper-slide").height(elHeight);
                        $(".product-gallery").addClass("visible");
                    });
                }
            },
        },
    });

    // Testimonial slider

    function sliderNumber() {
        var counter = $(".testimonial-slider")
            .find(".swiper-slide-active")
            .attr("aria-label");
        var formatCounter = counter.split("/");
        var formatArray = [];
        $.each(formatCounter, function(k, v) {
            var newNumber = parseInt(v);
            if (newNumber < 10) {
                newNumber = "0" + newNumber;
            }
            formatArray.push(newNumber);
        });
        var finalNumber = formatArray.join("/");
        $(".slider-counter").text(finalNumber);
    }

    const testimonialSlider = new Swiper(".testimonial-slider", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        autoplay: false,
        speed: 500,
        navigation: {
            nextEl: ".testimonial-right",
            prevEl: ".testimonial-left",
        },
        on: {
            afterInit: function() {
                sliderNumber();
            },
            slideChange: function() {
                setTimeout(function() {
                    sliderNumber();
                }, 100);
            },
        },
    });

    // Product accordion

    $(".accordion").on("click", function() {
        $(this).toggleClass("open").siblings().removeClass("open");
        $(this).find(".answer").slideToggle();
        $(this).siblings().find(".answer").removeClass("open").slideUp();
    });

    if ($(".product-accordions").length) {
        $(".accordion:first").click();
    }

    // Show ingredients image and description

    function showFirstIngredient() {
        $(".ingredient-desktop-description:first").show();
        $(".ingredients-image:first").show();
        $(".ingredient-title:first").addClass("active");
    }

    $(".ingredients-item")
        .on($(window).width() > 1024 ? "mouseover" : "click", function() {
            $(".ingredient-title:first").removeClass("active");
            if ($(window).width() > 1024) {
                var index = $(this).data("ingredient");
                $(".ingredients-image, .ingredient-desktop-description").fadeOut(300);
                $(".ingredient-desktop-description, .ingredients-image").hide();
                $('.ingredient-desktop-description[data-ingredient="' + index + '"]')
                    .stop()
                    .fadeIn();
                $('.ingredients-image[data-ingredient="' + index + '"]')
                    .stop()
                    .fadeIn();
            } else {
                $(this).toggleClass("active").siblings().removeClass("active");
                var index = $(this).data("ingredient");
                $(this).siblings().find(".ingredient-mobile-description").slideUp();
                $(this).find(".ingredient-mobile-description").slideToggle();
                $(".ingredients-image").fadeOut();
                $('.ingredients-image[data-ingredient="' + index + '"]')
                    .stop()
                    .fadeToggle();
            }
        })
    // .on("mouseleave", function () {
    //   if ($(window).width() > 1024) {
    //     $(".ingredients-image, .ingredient-desktop-description").fadeOut(300);
    //   }
    // });

    if ($(window).width() > 1024 && $(".ingredients-listing").length) {
        showFirstIngredient();
    }

    // Custom select

    if ($(".custom-select").length) {
        $(".custom-select").each(function(k, v) {
            var select = $(this);
            var selectedOption = select.find(":selected").html();
            select.wrap('<div class="custom-select-wrap"></div>');
            $(".custom-select-wrap")
                .eq(k)
                .prepend('<div class="select-output">' + selectedOption + "</div>");
            $(".custom-select-wrap")
                .eq(k)
                .append('<div class="select-output-options"></div>');

            select.find("option").each(function() {
                var optionValue = $(this).html();
                var optionText = $(this).text();
                if (!$(this).is(":disabled")) {
                    $(".custom-select-wrap")
                        .eq(k)
                        .find(".select-output-options")
                        .append(
                            '<div data-value="' +
                            optionValue +
                            '" class="select-option">' +
                            optionText +
                            "</div>"
                        );
                }
            });
        });
    }

    $(".select-output").on("click", function() {
        $(this).toggleClass("open");
        $(this).siblings(".select-output-options").slideToggle();
    });

    $(".select-option").on("click", function() {
        var selectOptionValue = $(this).data("value");
        var selectedOptionText = $(this).text();
        $(this)
            .parent()
            .parent(".custom-select-wrap")
            .find("select")
            .find('option[value="' + selectOptionValue + '"]')
            .attr("selected", "selected")
            .siblings()
            .attr("selected", false);
        $(this)
            .parent()
            .parent(".custom-select-wrap")
            .find(".select-output")
            .text(selectedOptionText);
        $(".select-output-options").slideUp();
    });

    // var timeout;
    // $('.sub-nav-link').on('mousemove',function(e){
    //   if ($(window).width() > 1024) {
    //     if(timeout) clearTimeout(timeout);
    //     setTimeout(callParallax.bind(null, e), 200);
    //   }
    // });

    // function callParallax(e){
    //   parallaxIt(e, $('.sub-nav-product-image'), - 75);
    // }

    // function parallaxIt(e, target, movement){
    //   var $this = $(e.currentTarget);
    //   var index = $this.index();
    //   var relX = e.pageX - $this.offset().left;
    //   var relY = e.pageY - $this.offset().top + (index * 43);

    //   gsap.to(target, 1, {
    //     x: (relX - $this.width()/2) / $this.width() * movement,
    //     y: (relY - $this.height()/2) / $this.height() * movement,
    //     // ease: Power2.easeOut
    //   })
    // }

    // Drink functionality

    if ($(".drinks").length != 0) {
        $(".drink").on("mouseover", function() {
            var el = $(this);
            if ($(window).width() > 1024) {
                if (!el.hasClass("open")) {
                    $(".drink").removeClass("open");
                    $(".drink-text").hide();
                    $(".servings").removeClass("visible");

                    el.addClass("open");

                    setTimeout(function() {
                        el.find(".drink-text").fadeIn();
                        el.find(".servings").addClass("visible");
                    }, 200);
                }
            } else {
                var desiredHeight = $(this).find(".drink-details").height();
                var drinkTitleHeight = $(this).find(".drink-title").height();
                if ($(window).width() > 640) {
                    $(this)
                        .height(desiredHeight + drinkTitleHeight)
                        .siblings()
                        .height(350);
                } else {
                    $(this)
                        .height(desiredHeight + drinkTitleHeight)
                        .siblings()
                        .height(210);
                }
                $(".servings").fadeOut();
                $(this).find(".servings").fadeIn();
            }
        });

        $(window).on("resize", function() {
            if ($(window).width() > 1024) {
                $(".drink:first").trigger("mouseover");
                $(".drink").css("height", "auto");
            }
        });
    }

    // Ingredients listing navigation - dynamic

    if ($(".ingredients-listing-wrap").length != 0) {
        if ($(".ingredients-listing-wrap").length > 1) {
            $(".ingredients-listing-wrap").hide();
            $(".ingredients-listing-wrap:first").show();
            $(".ingredients-listing-wrap").each(function() {
                var ingredientsListing = $(this).data("title");
                $(".ingredients-nav").append(
                    '<li data-ingredients-listing="' +
                    ingredientsListing +
                    '">' +
                    ingredientsListing +
                    "</li>"
                );
            });
            setTimeout(function() {
                $(".ingredients-nav li:first").trigger("click");
            }, 10);
        } else {
            $(".ingredients-listing-wrap").show();
        }
    }

    $(".ingredients-nav li").on("click", function() {
        var target = $(this).data("ingredients-listing");
        $(".ingredients-listing-wrap").hide();
        $(this).addClass("active").siblings().removeClass("active");
        $('.ingredients-listing-wrap[data-title="' + target + '"]').fadeIn();
    });

    // Sticky add to bag button

    if ($("body").hasClass("template-product")) {
        $(document).on("scroll", function() {
            if (window.scrollY > $(".product-detail").height()) {
                function calculateOffset() {
                    $(window).on("resize", function() {
                        var offset = $(".product-form").offset().left;
                        return offset;
                    });
                }
                $(".product-buy").addClass("sticky");

                if ($(".announcement-bar").hasClass("visible")) {
                    let announcementHeight = $(".announcement-bar").outerHeight();
                    $(".sticky").addClass("sticky-offset");
                    $("main").addClass("site-header-offset");
                }

                if ($(window).width() > 1024) {
                    $(".product-buy").css("left", $(".product-form").offset().left);
                }

                // Unstick 100px before the end of the page

                var unstick = $(".site-footer").offset().top - $(window).height();
                if (window.pageYOffset > unstick) {
                    $(".product-buy").fadeOut();
                } else {
                    $(".product-buy").fadeIn();
                }
            } else {
                $(".product-buy")
                    .removeClass("sticky")
                    .removeClass("sticky-offset")
                    .css("right", 0);
            }
        });
    }

    // Forgot password form show and hide

    $(".forgot-password").on("click", function(e) {
        e.preventDefault();
        $(".login-form").hide();
        $(".reset-password-form").fadeIn();
    });

    $(".recover-cancel").on("click", function(e) {
        e.preventDefault();
        $(".reset-password-form").hide();
        $(".login-form").fadeIn();
    });

    $(".edit-address-trigger").on("click", function() {
        var controls = "#" + $(this).attr("aria-controls");
        $(controls).slideToggle();
        $(".add-address").slideUp();

        setTimeout(function() {
            $("html, body").animate({
                    scrollTop: $(".edit-address").offset().top - 70
                },
                400
            );
        }, 300);
    });

    $(".edit-cancel").on("click", function() {
        $(this).closest(".edit-address").slideUp();
    });

    $(".new-address-trigger").on("click", function() {
        $(".add-address").slideDown();
        $(".edit-address").slideUp();

        setTimeout(function() {
            $("html, body").animate({
                    scrollTop: $(".add-address").offset().top - 70
                },
                400
            );
        }, 300);
    });

    $(".new-address-cancel").on("click", function() {
        $(".add-address").slideUp();
    });

    // Close announcement bar

    $(".announcement-close").on("click", function(e) {
        e.preventDefault();
        $(".site-header").removeClass("site-header-offset");
        $(".sub-nav").removeClass("sub-nav-offset");
        $(".announcement-bar").slideUp();
        $(".sticky").removeClass("sticky-offset");
        $("main").removeClass("site-header-offset");
        $("main").css("padding-top", 0);
    });

    // JS Cookies

    if (!Cookies.get("cookieBar")) {
        $(".cookies-bar").addClass("visible");
        $(".cookies-accept").on("click", function(e) {
            e.preventDefault();
            Cookies.set("cookieBar", true, {
                expires: 14
            });
            $(".cookies-bar").removeClass("visible");
        });
    }

    if (!Cookies.get("AnnouncementHidden")) {
        if ($(".announcement-bar").length) {
            $(".announcement-bar").addClass("visible");
            let announcementHeight = $(".announcement-bar").outerHeight();
            $("main").addClass("site-header-offset");
            $("main").css("padding-top", announcementHeight);
            $(".site-header, .sub-nav, .loader").addClass("offset");
            if ($(".hero-block").length) {
                $(".hero-block").addClass("offset");
            }
        }

        $(".announcement-close").on("click", function(e) {
            Cookies.set("AnnouncementHidden", true);
            setTimeout(function() {
                $(".announcement-bar").removeClass("visible");
                $(".site-header, .sub-nav, .loader").removeClass("offset");
                if ($(".hero-block").length) {
                    $(".hero-block").removeClass("offset");
                }
            }, 300);
        });
    }

    // let proxy = { skew: 0 },
    // skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    // clamp = gsap.utils.clamp(-5, 5); // don't let the skew go beyond 20 degrees.

    // ScrollTrigger.create({
    //   onUpdate: (self) => {
    //     let skew = clamp(self.getVelocity() / - 1000);
    //     if (Math.abs(skew) > Math.abs(proxy.skew)) {
    //       proxy.skew = skew;
    //       gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    //     }
    //   }
    // });
    // gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});

    if ($(".mobile-slider").length) {
        if ($(window).width() < 640) {
            $(".mobile-slider").slick({
                dots: true,
                arrows: false,
                speed: 1000,
                slidesToShow: 1,
                slide: ".mobile-slide",
            });
        }
    }

    if ($(".hero-block-wrap").length) {
        $(document).on("scroll", function() {
            if (
                window.pageYOffset >
                $(".product-presentation").height() + $(window).height()
            ) {
                $(".hero-block-wrap").addClass("hero-blend");
            } else {
                $(".hero-block-wrap").removeClass("hero-blend");
            }
        });
    }

    if (!Cookies.get("ageConsent")) {
        $(".age-check").fadeIn();
        $(".age-check-bg").fadeIn();
        $("body").addClass("blocked");
        $(".age-consent").on("click", function(e) {
            e.preventDefault();
            $(".age-check-bg").fadeOut();
            Cookies.set("ageConsent", true, {
                expires: 28
            });
            $(".age-check").fadeOut();
            $("body").removeClass("blocked");
            setTimeout(function() {
                showNewsletter();
            }, 20000);
        });
    } else {
        setTimeout(function() {
            showNewsletter();
        }, 20000);
    }

    if ($(".cocktails-wrap")) {
        if ($(window).width() > 640) {
            let divs = $(".cocktail");
            let counter = 0;
            for (let i = 0; i < divs.length; i += 3) {
                counter++;
                divs
                    .slice(i, i + 3)
                    .wrapAll(
                        "<div data-parallax='cocktails" +
                        counter +
                        "' class='cell cocktail-cell medium-4'></div>"
                    );
            }

            function cocktailParallax() {
                const cocktails = gsap.utils.toArray(".cocktail-cell");

                let cocktailYto = ["100", "-50", "50"];
                let cocktailYFrom = ["-50", "200", "-150"];

                cocktails.forEach((cocktail, i) => {
                    gsap.fromTo(
                        cocktail, {
                            y: parseInt(cocktailYFrom[i]),
                        }, {
                            y: parseInt(cocktailYto[i]),
                            ease: "slow.out",
                            delay: 1,
                            scrollTrigger: {
                                trigger: ".cocktails-wrap",
                                scrub: 1,

                                start: "top bottom",
                                end: "bottom top",
                            },
                        }
                    );
                });
            }
            gsap.delayedCall(2, cocktailParallax);

            $(".cocktail")
                .on("mouseover", function() {
                    $(this).find(".cocktail-title").stop().addClass("visible");
                })
                .on("mouseout", function() {
                    $(this).find(".cocktail-title").stop().removeClass("visible");
                });
        } else {
            $(".cocktails-wrap").slick({
                centerMode: true,
                centerPadding: "105px",
                slidesToShow: 1,
                waitForAnimate: false,
            });
        }
    }

    function showNewsletter() {
        if (!Cookies.get("newsletter")) {
            $(".newsletter-popup-bg, .newsletter-popup-overlay").addClass("visible");
            $("body").addClass("blocked");
            $(".page").addClass("faded");
            Cookies.set("newsletter", true);
        }
    }

    $(".newsletter-popup-close, .newsletter-popup-overlay").on(
        "click",
        function(e) {
            e.preventDefault();
            $(".newsletter-popup-bg, .newsletter-popup-overlay").removeClass(
                "visible"
            );
            $(".page").removeClass("faded");
            $("body").removeClass("blocked");
        }
    );

    // Footer form

    KlaviyoSubscribe.attachToForms("#footer-newsletter", {
        hide_form_on_success: false,
        success_message: "Thank you for signing up!",
        extra_properties: {
            $source: "Footer Newsletter",
            $method_type: "Klaviyo Form",
            $method_id: "embed",
        },
        success: function($form) {
            setTimeout(function() {
                $("#footer-email")
                    .trigger("blur")
                    .empty()
                    .val("Thank you for signing up!")
                    .addClass("disabled");
            }, 100);
        },
    });

    KlaviyoSubscribe.attachToForms("#popup-newsletter", {
        hide_form_on_success: false,
        success_message: "Thank you for signing up!",
        extra_properties: {
            $source: "Footer Newsletter",
            $method_type: "Klaviyo Form",
            $method_id: "embed",
        },
        success: function($form) {
            setTimeout(function() {
                $("#k_id_email")
                    .trigger("blur")
                    .empty()
                    .val("Thank you for signing up!")
                    .addClass("disabled");
            }, 100);
            setTimeout(function() {
                $(".newsletter-popup-bg, .newsletter-popup-overlay").removeClass(
                    "visible"
                );
                $("main").removeClass("faded");
                $("body").removeClass("blocked");
            }, 3000);
        },
    });

    if ($(".shopify-policy__title").length) {
        var header = $(this).find("h1");
        var policyTitle = header.text().split(" ");
        header.empty();
        $.each(policyTitle, function(k, v) {
            console.log(k, v);
            if (k == policyTitle.length - 1) {
                header.append("<strong>" + v + "</strong>");
            } else {
                header.append(v + " ");
            }
        });
        $(".shopify-policy__title").addClass("visible");
    }

    $(window).trigger("resize");
});

if (window.location.search.indexOf("contact_posted=true") != -1) {
    document.querySelector(".contact-form-inner").style.display = "none";
    if (window.innerWidth > 1024) {
        Object.assign(document.querySelector(".parallax-element").style, {
            marginTop: "-140px",
            paddingBottom: "200px",
        });
    }
}



$(window).scroll(function(e) {
    if ($(window).scrollTop() > 300) {
        $('body').addClass("header-white");
    } else {
        $('body').removeClass("header-white");
    }
});


var window_width = $(window).width();

if (window_width >= 1024) {
    var modal_video = $('.about_video-desktop').attr('data-src');
} else {
    var modal_video = $('.about_video-mobile').attr('data-src');
}


if (window_width >= 1024) {
    $('.the-video').attr('src', desktop_video);
} else {
    $('.the-video').attr('src', mobile_video);
}
var options = {
    controls: false
}
$('.about__image img').click(function() {
    $(this).hide();
    var player = $('.about__image iframe');
    var vimeoPlayer = new Vimeo.Player(player, options);
    vimeoPlayer.play();
    // $(this).addClass('vdeo-played');
    // $('body').addClass('about-modal-show');
    // if(window_width >= 1024){
    //   $('.about_video-desktop').attr('src', modal_video);
    // }else{
    //   $('.about_video-mobile').attr('src', modal_video);
    // }
})





$('.modal-backdrop').click(function() {
    $('body').removeClass('about-modal-show');
    if (window_width >= 1024) {
        $('.about_video-desktop').attr('src', '');
    } else {
        $('.about_video-mobile').attr('src', '');
    }
})
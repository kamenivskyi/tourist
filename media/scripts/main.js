$(function () {
  // Global variables
  const toTopBtn = $("#toTopBtn");
  const mobileWrap = $(".mobile-nav-wrapper");
  const [copyright] = $("#copyright");

  copyright.textContent = new Date().getFullYear();

  // Event Listeners
  $(".close-mobile-nav").on("click", closeMobileNav);
  $(".burger-menu").on("click", openMobileNav);
  $(".dropdown-toggle").on("click", toggleDropdownAccordion);
  $(window).on("scroll", displayBtnByScroll);
  toTopBtn.on("click", scrollToTop);

  // functions
  function toggleDropdownAccordion() {
    $(".dropdown-menu").not($(this).next()).slideUp();
    $(this).next().slideToggle();
  }
  function openMobileNav() {
    $("html, body").css("overflow-y", "hidden");
    mobileWrap.css({
      transform: "translateX(0%)",
    });
  }
  function closeMobileNav() {
    $("html, body").css("overflow-y", "auto");
    mobileWrap.css({
      transform: "translateX(-100%)",
    });
  }

  function displayBtnByScroll() {
    if ($(this).scrollTop() > 400) {
      toTopBtn.css("bottom", "6rem");
    } else {
      toTopBtn.css("bottom", "-10rem");
    }
  }

  function scrollToTop(event) {
    event.preventDefault();
    $("body, html").animate({ scrollTop: 0 }, 500);
  }

  // Plugins init
  const typed = new Typed("#typed", {
    strings: ["We know what you need", "Join us, you will not regret"],
    startDelay: 20,
    backSpeed: 40,
    typeSpeed: 70,
    loop: true,
  });

  // Slick carousel
  $(".slick").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    accessibility: true,
    infinite: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".slick-cards").slick({
    centerMode: true,
    slidesToShow: 4,
    infinite: true,

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
  $(".partners-slick").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

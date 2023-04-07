// header section start here
let changeIcon = function (icon) {
  icon.classList.toggle("bx-x");
};

AOS.init();
// jquery

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $("#navbar").addClass("scrolled");
  } else {
    $("#navbar").removeClass("scrolled");
  }
});

// commitment section
jQuery(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });
});

// work section start here

$(".some-list").simpleLoadMore({
  item: "div",
  count: 9,
  btnHTML: '<a href="#" class="load-more__btn s_btn">See More</a>',
  btnText: "View More",
  btnWrapper: "",
  btnWrapperClass: "",
  cssClass: "load-more",
  itemsToLoad: 6,
  showCounter: false,
  easing: "fade",
  easingDuration: 400,
  onLoad: function ($items, $btn) {},
  onNextLoad: function ($items, $btn) {},
  onComplete: function () {},
});

// client section starts here

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// top button
const toTop = document.querySelector(".top_btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

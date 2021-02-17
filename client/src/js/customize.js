import $ from "jquery";

// $(document).ready(function () {


  // $(".slider").slick({
  //   arrows: false,
  //   dots: true,
  //   appendDots: ".slider_dots",
  //   dotsClass: "dots",
  // });
  const hamberger = document?.querySelector(".hamberger");
  const times = document?.querySelector(".times");
  const mobile_nav = document?.querySelector(".mobile_nav");
  const toTop = document?.getElementById("toTop");
  hamberger?.addEventListener("click", function () {
    mobile_nav?.classList.toggle("open");
  });

  times?.addEventListener("click", function () {
    mobile_nav?.classList.remove("open");
  });
  window.addEventListener("scroll", function () {
    const scroll_nav = document?.getElementById("scroll_nav");
    const hamberger = document?.getElementById("hamberger");
    if (window.scrollY > 97) {
      scroll_nav?.classList.add("visible");
      toTop?.classList.add("visible");
      hamberger?.classList.add("fixed");
    }
    if (window.scrollY < 97) {
      scroll_nav?.classList.remove("visible");
      toTop?.classList.remove("visible");
      hamberger?.classList.remove("fixed");
    }
  });

  toTop?.addEventListener("click", () => {
    console.log("top top");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
// });

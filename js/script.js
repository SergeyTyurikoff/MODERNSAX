$('.slick-cont').slick({
  dots: false,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 500,
        arrows: false,
        // prevArrow: false,
        // nextArrow: false,
        fade: true,
        cssEase: 'linear'
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 500,
        arrows: false,
        // prevArrow: false,
        // nextArrow: false,
        fade: true,
        cssEase: 'linear'
      }
    }
  ]
  // customPaging : function(slider, i) {
  //     let thumb;
  //     thumb = jQuery(slider.$slides[i]).data();
  //     // return '<a>'+(i+1)+'</a>'; // <-- old
  //     return '<a>'+('0'+(i+1)).slice(-2)+'</a>'; // <-- new
  // }
});


$('.FB-slider').slick({
  dots: false,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 500,
        arrows: false,
        fade: true,
        cssEase: 'linear'
      }
    }
  ]
});


$(".phone-mask").mask("+7-999-999-99-99");
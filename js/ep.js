loaded = false;

window.addEventListener('load', () => {
    $('.slider').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
      });       

      $('.slider.slider-full').slick({
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        adaptiveHeight: true,
      });  
});
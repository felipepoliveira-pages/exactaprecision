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
});
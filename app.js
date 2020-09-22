$(function() {

    $('.slider__wrapper').slick({
        centerMode: false,
        centerPadding: '10px',
        slidesToShow: 4,
        slidesToScroll: 1,
        swipe: false,
        infinite: true,
        responsive: [{
                breakpoint: 800,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2,
                    infinite: true,
                    swipe: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    infinite: false,
                    swipe: true,
                    dots: true
                }
            }
        ]
    });
});
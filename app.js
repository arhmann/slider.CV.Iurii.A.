$(function() {

    $('.slider__wrapper').slick({
        centerMode: false,
        centerPadding: '10px',
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 2,
                    infinite: false,
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
                    dots: true
                }
            }
        ]
    });
});
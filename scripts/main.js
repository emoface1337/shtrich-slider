const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    initialSlide: 2,
    loop: true,
    loopFillGroupWithBlank: false,
    centeredSlides: true,
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev'
    },
    breakpoints: {
        // <=
        320: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 0
        }
    }
})

// $('.center').slick({
//     centerMode: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     infinite: true,
//     // centerPadding: '300px',
//     responsive: [
//         {
//             breakpoint: 1650,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 // centerPadding: '200px'
//             }
//         },
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 centerPadding: '150px'
//             }
//         },
//         {
//             breakpoint: 800,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 centerMode: false,
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 centerMode: true,
//                 centerPadding: '100px'
//             }
//         }
//     ]
// })
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
    pagination: {
        clickable: true,
        el: '.swiper-pagination'
    },
    breakpoints: {
        // <=
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50
        }
    }
})

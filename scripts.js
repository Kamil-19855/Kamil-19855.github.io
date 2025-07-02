const gallerySidescroll = document.querySelector('.gallery__sidescroll');
if (gallerySidescroll) {
    const swiper = new Swiper(gallerySidescroll, {
        /* slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }, */
        effect: "cards",
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
    });
}

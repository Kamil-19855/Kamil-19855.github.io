const gallerySidescroll = document.querySelector('.gallery__sidescroll');
if (gallerySidescroll) {
    const swiper = new Swiper(gallerySidescroll, {
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: true,
    });
}
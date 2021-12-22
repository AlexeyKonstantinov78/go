function swiper() {
    const swiper = new Swiper('.swiper',{
        loop: true,
        slidesPerView: 1,
        speed: 300,
        autoplay: {
            delay: 3000,
        },
    });
}

export default swiper;
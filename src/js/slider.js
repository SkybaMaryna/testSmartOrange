const btnNext = document.querySelector('.hero__btn--right')
const btnPrev = document.querySelector('.hero__btn--left')
const customPagination = document.querySelector('.swiper-pagination--custom')

new Swiper(".hero__list", {
    navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
    },
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    speed: 700,
    breakpoints: {
        320: {
            spaceBetween: 8,
        },
        768: {
            spaceBetween: 32,
        }
    },
    pagination: {
        el: customPagination,
        type: 'fraction'
      },
    effect: 'coverflow',
    coverflowEffect: {
    rotate: 0,
    slideShadows: false,
    depth: 50,
    scale: 0.5,
  },
});



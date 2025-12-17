const bWorkSwiper = new Swiper(".b-work-swiper", {
  slidesPerView: 3,
  spaceBetween: 21,
    autoHeight: true,

  pagination: {
    el: ".b-work-pagination",
    clickable: true,
  },
  loop: true,

  breakpoints: {
    320: { slidesPerView: 1 },
    500: { slidesPerView: 1.5 },
    626: { slidesPerView: 2 },
    830: { slidesPerView: 2.3 },
    1000: { slidesPerView: 2.5 },
    1200: { slidesPerView: 3 },
  },
});

let swiper = new Swiper(".b-possibilities-swiper", {
  slidesPerView: 4,
  spaceBetween: 20,

  pagination: {
    el: ".b-possibilities-pagination",

    type: "custom",
    renderCustom: function (swiper) {
      const current = swiper.realIndex + 1;
      const total = swiper.slides.length;
      return `<span>${current}<span/> <b>из ${total}<b/> `;
    },
    //    renderCustom: function (swiper) {
    //   let total = swiper.slides.length;
    //   let current = swiper.activeIndex + swiper.params.slidesPerView;

    //   if (current > total) current = total;

    //   return `<span>${current}</span> <b>из ${total}</b>`;
    // }
  },

    breakpoints: {
    320: { slidesPerView: 1.1 ,spaceBetween: 10,},
    600: { slidesPerView: 2 },
    960: { slidesPerView: 3 },
    1056: { slidesPerView: 3.5 },
    1200: { slidesPerView: 4 },
  },


  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const hWorkSwiper = new Swiper(".h-tolls-swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  autoHeight: true,

  navigation: {
    nextEl: ".h-tolls-next",
    prevEl: ".h-tolls-prev",
  },
  loop: true,

  breakpoints: {
    320: { slidesPerView: 1.2, spaceBetween: 10 },
    500: { slidesPerView: 1.5 , spaceBetween: 10},
    626: { slidesPerView: 2 },
    830: { slidesPerView: 2.3 },
    1000: { slidesPerView: 3.5 },
    1200: { slidesPerView: 4 },
  },
});

const bPossibilitiesSwiper = new Swiper(".h-possibilities-swiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  autoHeight: true,
  loop: true,

  breakpoints: {
    320: { slidesPerView: 1.2,},
    500: { slidesPerView: 1.5 },
    626: { slidesPerView: 1.7 },
    830: { slidesPerView: 2 },
   
  },
});




const hTrustSwiper = new Swiper(".h-trust-swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  autoHeight: true,
  loop: true,

  breakpoints: {
    320: { slidesPerView: 1.2 ,spaceBetween: 10},
    500: { slidesPerView: 1.5 , spaceBetween: 10},
    626: { slidesPerView: 2 },
    830: { slidesPerView: 2.3 },
    1000: { slidesPerView: 3.5 },
    1200: { slidesPerView: 4 },
  },
});


const DheroSwiper = new Swiper('.d-hero-swiper', {
  slidesPerView: 8,
  spaceBetween: 11,
  speed: 400,
  watchOverflow: true,
  resizeObserver: true,
  updateOnWindowResize: true,
  roundLengths: true,
  loop:true,

  pagination: {
    el: '.d-hero-paginatiion',
    clickable: true,
  },

  navigation: {
    nextEl: '.d-hero-swiper-next',
    prevEl: '.d-hero-swiper-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 6,
      grid: {
        rows: 2,  
        fill: "row"
      },
    },
    576: { slidesPerView: 4 },
    800: { slidesPerView: 4 },
    992: { slidesPerView: 6 },
    1200: { slidesPerView: 8 },
  },
});



function initSwiper(selector, slides = 3.2, customBreakpoints = {}) {
  const baseBreakpoints = {
    320: { slidesPerView: 1.1 },
    450: { slidesPerView: 1.3 },
    576: { slidesPerView: 1.5 },
    992: { slidesPerView: 2 },
    1060: { slidesPerView: 2.2 },
    1200: { slidesPerView: 2.6 },
    1380: { slidesPerView: slides },
  };

  return new Swiper(selector, {
    slidesPerView: slides,
    spaceBetween: 12,
    loop: true,
    speed: 600,
    slideToClickedSlide: true,
    observer: true,
    observeParents: true,

    breakpoints: { 
      ...baseBreakpoints, 
      ...customBreakpoints 
    },
  });
}

initSwiper(".f-for-you-swiper", 3.2);
initSwiper(".f-scenarios-swiper", 4.3, {
  320: { slidesPerView: 1.3 }, 
  450: { slidesPerView: 1.5 }, 
  576: { slidesPerView: 1.6 }, 
  992: { slidesPerView: 2 },
  1200: { slidesPerView: 3 },
  1380: { slidesPerView: 4.3 },
});
initSwiper(".f-recommended-swiper", 3.2);
initSwiper(".f-popular-swiper", 3.2);
initSwiper(".f-trends-swiper", 3.2);
initSwiper(".f-vote-swiper", 3.4, {
  320: { slidesPerView: 1.1 }, 
  450: { slidesPerView: 1.5 }, 
  576: { slidesPerView: 1.6 }, 
  992: { slidesPerView: 2 },
  1200: { slidesPerView: 3 },
  1380: { slidesPerView: 3.4 },
});

const heroSwiper = new Swiper(".d-hero-swiper", {
  slidesPerView: 8,
  spaceBetween: 11,
  speed: 400,
  watchOverflow: true,
  resizeObserver: true,
  updateOnWindowResize: true,
  roundLengths: true,
  loop: true,

  pagination: {
    el: ".d-hero-paginatiion",
    clickable: true,
  },

  navigation: {
    nextEl: ".d-hero-swiper-next",
    prevEl: ".d-hero-swiper-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 6,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
    576: { slidesPerView: 4 },
    800: { slidesPerView: 4 },
    992: { slidesPerView: 6 },
    1200: { slidesPerView: 8 },
  },
});

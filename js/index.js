const swiper = new Swiper('.slider-wrapper', {
   loop: true,
   grapCursor: true,
   spaceBetween: 30,


   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,

   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   // Responsive Code
   breakpoints: {
      0: {
         slidesPerView: 1
      },
      768: {
         slidesPerView: 2
      },
      1024: {
         slidesPerView: 3
      }
   }
});
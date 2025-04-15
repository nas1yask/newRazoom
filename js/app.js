$(document).ready(function(){
    // SLIDER SLICK 
    $('.sliderr').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        // fade:true,
        pauseOnHover: false,
        speed: 1000
    });

    // TYPED JS 
    var typed = new Typed('.services_type', {
        strings: ['по изготовлению рекламы,', 'полиграфической продукции', 'и комплексному сопровождению мероприятий'],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true
      });

        //   по изготовлению рекламы, полиграфической продукции и комплексному сопровождению мероприятий.

    //   TABS 
      $(".tab_item").not(":first").hide();
      $(".tab").click(function() {
          $(".tab").removeClass("active").eq($(this).index()).addClass("active");
          $(".tab_item").hide().eq($(this).index()).fadeIn()
      }).eq(0).addClass("active");


    //   SWIPER

      
    //   const swiper = new Swiper(".mySwiper", {
    //     effect: "coverflow",
    //     grabCursor: true,
    //     centeredSlides: true,
    //     slidesPerView: "auto",
    //     coverflowEffect: {
    //         rotate: 30,
    //         stretch: 50,
    //         depth: 300,
    //         modifier: 1,
    //         slideShadows: false,
    //     },
    //     loop: true,
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    //     autoplay: {
    //         delay: 3000,
    //         disableOnInteraction: false,
    //     }
    // });

  
    //   MASK FOR TEL   
  $(".telNum").mask("+7 (999) 999-9999");


    //   INPUT FILE OPEN 
  const inputFile = document.querySelector('.inputFile')
  const inpFile = document.querySelector('input[type=file]')

  inputFile.addEventListener('click', ()=>{
      inpFile.click()
  })


  });







          
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

    $('.swiper-wrapperFB').slick({
      autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
        pauseOnHover: false
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


      // SWIPER
      

      const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  
    //   MASK FOR TEL   
  $(".telNum").mask("+7 (999) 999-9999");


    //   INPUT FILE OPEN 
  const inputFile = document.querySelector('.inputFile')
  const inpFile = document.querySelector('input[type=file]')

  inputFile.addEventListener('click', ()=>{
      inpFile.click()
  })


  });







          
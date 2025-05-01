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

  // ---------------------------------------
    //   MASK FOR TEL   
  $(".telNum").mask("+7 (999) 999-9999");

// --------------------------------------------
    //   INPUT FILE OPEN 
  const inputFile = document.querySelector('.inputFile')
  const inpFile = document.querySelector('input[type=file]')
  const selectFile = document.querySelector('.selectFile h3')

  inputFile.addEventListener('click', ()=>{
      inpFile.click()
  })

  selectFile.addEventListener('click', ()=>{
    inpFile.click()
})

inpFile.addEventListener('change', ()=>{
  selectFile.textContent = inpFile.files[0].name
})



// -----------------------------------------



  let expanded = false

  const showAllThanks = document.querySelector('.show_all button')
  const gramoty = document.querySelector('.gramoty')
  showAllThanks.addEventListener('click', ()=>{
    if(expanded){
      gramoty.style.height = '380' + 'px'
      showAllThanks.textContent = 'Показать больше'
    }
    else{
      gramoty.style.height = '1155' + 'px'
      showAllThanks.textContent = 'Скрыть'
    }
    expanded = !expanded
  })


// -----------------------------------
  
const modal_window = document.querySelector('.modal_window');
const showModalBtn = document.querySelector('.btns button');

showModalBtn.addEventListener('click', () => {
  modal_window.style.display = 'flex';
  requestAnimationFrame(() => {
    modal_window.classList.add('show');
  });

});


  // ------------------------------------


  function applyInputEffects(formSelector) {
    const form = document.querySelector(formSelector)
    const inputs = form.querySelectorAll('.inp')
    const labels = form.querySelectorAll('.inp_placeholder')
  
    inputs.forEach((input, index) => {
      input.addEventListener('focus', () => {
        labels[index].style.transform = 'translateY(-5px)'
        labels[index].style.fontSize = '13px'
      })
  
      input.addEventListener('blur', () => {
        labels[index].style.transform = 'translateY(27px)'
        labels[index].style.fontSize = '16px'
      })
    })
  }
  
  applyInputEffects('.formBlock form')
  applyInputEffects('.resumeForm form')
  applyInputEffects('.modal_window form')

  // --------------------------------------

  
  });







          
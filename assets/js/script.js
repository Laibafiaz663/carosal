// navbar active class
let navItem=document.querySelectorAll(".nav-item");
for(let i=0 ; i<navItem.length ; i++){
  
  navItem[i].addEventListener("click",function(){
    let activeItem=document.querySelectorAll(".nav-active");
    for(let j=0 ; j<activeItem.length ; j++){
      activeItem[j].classList.remove("nav-active");
    }
    this.classList.add("nav-active");
  });
}






// content-swiper


var ContentSwiper = new Swiper('.content-swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//IMAGE-SWIPER
var mySwiper = new Swiper('.mySwiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//section-7-swiper
var sectionSeven = new Swiper('.section-7', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.section-7-next',
    prevEl: '.section-7-prev',
  },
  breakpoints: {
    991 :{
      slidesPerView: 3,
      spaceBetween: 20,
          },
    767: { // For screens <= 767px
      slidesPerView: 2,
      spaceBetween: 20,
    },
    575: { // For screens <= 575px
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});


// .hero-section-txt

var heroSecTxt = new Swiper('.hero-sec-txt', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

 

  // Navigation arrows
  navigation: {
    nextEl: '.hero-sec-next',
    prevEl: '.hero-sec-prev',
  },
});


// hero-section-img
var heroSecImg = new Swiper('.hero-sec-img', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

 

  // Navigation arrows
  navigation: {
    nextEl: '.hero-sec-next',
    prevEl: '.hero-sec-prev',
  },
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 25,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,},
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 1,
      }, 
      720: {
        slidesPerView: 2,
      },
      721: {
        slidesPerView: 3,
      }
  }
});

let header=document.querySelector('header');
let menuicon =document.querySelector('#menu-icon');
let menu = document.querySelector('#nav-menu');
let toppage=document.querySelector(".top-btn");

menuicon.onclick = () =>{
  menuicon.classList.toggle('fa-x');
  menu.classList.toggle('open');
};

window.onscroll = () =>{
  menuicon.classList.remove('fa-x');
  menu.classList.remove('open');
  
  var headtop = header.offsetTop;
  if (window.pageYOffset > 100) {
    header.classList.add("downscroll");
    toppage.classList.add("active");
  } else if (window.pageYOffset == headtop){
    header.classList.remove("downscroll");
    toppage.classList.remove("active");
  }
};

let num=document.querySelectorAll(".count-num");
let interval=1000;

num.forEach((valueNumber) => {
  let startValue=0;
  let endValue= parseInt(valueNumber.getAttribute("data-value"));
  let duration=Math.floor(interval/endValue);
  let counter=setInterval(() => {
   startValue +=1;
   valueNumber.textContent=startValue;
   if (startValue==endValue) {
       clearInterval(counter);
   }
  }, duration); 
 });
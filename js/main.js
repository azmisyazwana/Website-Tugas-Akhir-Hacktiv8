/* ======= SHOW MENU  ======= */

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");


/* ======= MENU SHOW  ======= */

/* Validate if constant exist */
if(navToggle){/* sebenernya ga usah cek if juga bisa */
    navToggle.addEventListener('click', function(){
        navMenu.classList.add('show-menu')
    })
}


/* ======= MENU SHOW  ======= */

/* Validate if constant exist */
if(navClose){
    navClose.addEventListener('click', function(){
        navMenu.classList.remove('show-menu')
    })
}



/* ======= Remove Menu Mobile  ======= */
const navLink = document.querySelectorAll('.nav__link')

// fungsi untuk menghilangkan show-menu di navLink
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

// setiap navlink akan menjalankan linkAction kalau di click
navLink.forEach(function(n){
    n.addEventListener('click', linkAction)
})


/* ======= Ganti Header Background  ======= */
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100){
        header.classList.add('scroll-header')}
    else{
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)

// ================ Js untuk slideshow ================//

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3500); // Change image every 2 seconds
}


// =============== Js untuk effect coverflow =============== //
var swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
  },
  loop: true,
  spaceBetween: 80
});


// =============== Js untuk Play dan Pause Video =============== //

const fileVideo = document.getElementById("video-file"),
      buttonVideo = document.getElementById("video-button"),
      iconVideo = document.getElementById("video-icon");

function playPause(){
  if(fileVideo.paused){
    fileVideo.play()
  
    iconVideo.classList.add("ri-pause-line")
    iconVideo.classList.remove("ri-play-line")
  }else{
    fileVideo.pause()
    
    iconVideo.classList.remove("ri-pause-line")
    iconVideo.classList.add("ri-play-line")
  }
}

buttonVideo.addEventListener("click", playPause)

// =============== JS saat video selesai tombol jadi play lagi =============== //

function finalVideo(){
  iconVideo.classList.add("ri-play-line")
  iconVideo.classList.remove("ri-pause-line")
}

fileVideo.addEventListener("ended", finalVideo)

// =============== JS untuk memumnculkan scrollup saat di scroll =============== //
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 200){
    scrollUp.classList.add('show-scroll')
  }else{
    scrollUp.classList.remove('show-scroll')
  }
}
window.addEventListener('scroll', scrollUp)

// =============== JS Scroll Section Active Link =============== //
const sections = document.querySelectorAll('section[id]')  /* tag section yang ada atribut id */

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(function(current){
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// =============== JS Animasi Scroll Reveal =============== //
const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
  reset: true
})

sr.reveal(`.home__data, .home__social-link, .home__info,
            .discover__container, .blog__container,
            .experience__data, .experience__overlay,
            .place__card,
            .sponsor__content,
            .footer__data, .footer__rights,
            .button__order`,{
  origin: 'top',
  interval: 200 //yang ngatur jarak pandang saat bakal menghilang
})

sr.reveal(`.about__data,blog__container,
            .video__description,
            .subscribe__description`,{
  origin: 'left'
})

sr.reveal(`.about__img-overlay,
            .video__content,
            .subscribe__form`,{
  origin: 'right',
  interval: 100
})


// ================== js untuk custom dialog tabel order ==================== //
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


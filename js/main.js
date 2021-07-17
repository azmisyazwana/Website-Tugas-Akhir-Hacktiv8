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



// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
// odometer 
// this is function  el is name and value is number 
document.addEventListener('DOMContentLoaded', function() {
    // For the date - just use the year
    const dateOdometer = document.querySelector(".date-odometer");
    const dateOdometerObj = new Odometer({
      el: dateOdometer,
      value: 0,
      format: 'd' // Simple format with no commas
    });
    dateOdometerObj.update(2020);

    // For the player count
    const playerOdometer = document.querySelector(".player-odometer");
    const playerCount = 4742016;
    const playerCountInMillions = Math.floor(playerCount / 1000000);
    
    const playerOdometerObj = new Odometer({
      el: playerOdometer,
      value: 0,
      format: 'd' // Simple format with no commas
    });
    playerOdometerObj.update(47); // Showing only "47M+" 
  });



// image slideshow 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
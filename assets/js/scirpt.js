let slideIndex= 1
showSlides(slideIndex); 


function showSlides(n) {
    let i;
    let slides = document.querySelectorAll("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";

  }

function alert() { 
    alert("hello it's working")
}

alert(); 
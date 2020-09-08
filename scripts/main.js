let texts = [
  "<span>Create or Join a league</span> of your favorite sports to start competing against other players.",
  "<span>Make your picks of the week.</span> You can choose between diferent odd types.",
  "<span>Place your picks and Earn Points.</span> Play straight, parley or teaser is your choice.",
  "<span>See how your bets are performing.</span> You can compare and see how the other player are playing and take the edge."
]

let slideIndex = 1;
showSlides(slideIndex);

function selectSlides(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("slideshow-button");
  let text = document.getElementById("slideshow-text")

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  text.innerHTML = texts[slideIndex - 1];
}
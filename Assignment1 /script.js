let imgIndex = 1;
displayPhoto(imgIndex);

function plusSlides(n) {
  // when the next button is pressed and the value of n increases it moves to the next img and vis versa to move to the previous img
  displayPhoto(imgIndex += n);
}

function currentSlide(n) {
  displayPhoto(imgIndex = n);
}

function displayPhoto(n) {
  let i;
  // access the html element that includes the images through class name
  let photos = document.getElementsByClassName("photos-slides");
  if (n > photos.length) { imgIndex = 1 }
  if (n < 1) { imgIndex = photos.length }
  // for loop to display the photos in an ordered manner
  for (i = 0; i < photos.length; i++) {
    photos[i].style.display = "none";
  }

  photos[imgIndex - 1].style.display = "block";
}
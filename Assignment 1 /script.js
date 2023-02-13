let imgIndex = 1;
displayPhoto(imgIndex);

function plusSlides(n) {
    displayPhoto(imgIndex += n);
  }

  function currentSlide(n) {
    displayPhoto(imgIndex = n);
  }

  function displayPhoto(n) {
    let i;
    let photos = document.getElementsByClassName("photos-slides");
    if (n > photos.length) {imgIndex = 1}
    if (n < 1) {imgIndex = photos.length}
    for (i = 0; i < photos.length; i++) {
        photos[i].style.display = "none";
    }

    photos[imgIndex-1].style.display = "block";
  }
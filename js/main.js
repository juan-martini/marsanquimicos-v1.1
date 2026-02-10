
const upButton = document.getElementById('upButton');
const maxScroll = 1000; // Cantidad de pixels para que aparezca el botón

window.addEventListener('scroll', function() {

  if (window.scrollY > maxScroll) {
    upButton.style.visibility = 'visible';
  } else {
    upButton.style.visibility = 'hidden';
  }
});
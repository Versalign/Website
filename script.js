



document.querySelectorAll('.service-box').forEach(box => {
  box.querySelector('.service-header').addEventListener('click', function() {
    box.classList.toggle('active');
  });
});



window.addEventListener('DOMContentLoaded', function() {
  // Get the hash from the URL (e.g., #support)
  var hash = window.location.hash;
  if (hash) {
    var box = document.querySelector(hash + '.service-box');
    if (box) {
      box.classList.add('active');
      box.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }
});
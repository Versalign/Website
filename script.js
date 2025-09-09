document.querySelectorAll('.service-header').forEach(header => {
  header.addEventListener('click', function(e) {
    // If X is clicked, close the box
    if (e.target.classList.contains('close-btn')) {
      header.parentElement.classList.remove('active');
      document.body.style.overflow = '';
      return;
    }
    // Prevent expanding if already active
    const box = header.parentElement;
    if (box.classList.contains('active')) return;
    // Close all boxes
    document.querySelectorAll('.service-box.active').forEach(b => b.classList.remove('active'));
    // Open clicked box
    box.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  });
});

// Open box if navigated via anchor
window.addEventListener('DOMContentLoaded', function() {
  var hash = window.location.hash;
  if (hash) {
    var box = document.querySelector(hash + '.service-box');
    if (box) {
      document.querySelectorAll('.service-box.active').forEach(b => b.classList.remove('active'));
      box.classList.add('active');
      document.body.style.overflow = 'hidden';
      box.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }
});




// Responsive navigation menu toggle
  function toggleMenu() {
    var nav = document.querySelector(".topnav");
    nav.classList.toggle("responsive");
  }

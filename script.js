// Utility to close mobile menu
function closeMobileMenu() {
  var nav = document.querySelector('.topnav');
  if (nav && nav.classList.contains('responsive')) {
    nav.classList.remove('responsive');
  }
}

// Utility to close mobile nav by hiding the header
function hideMobileNav() {
  var nav = document.querySelector('.topnav');
  if (nav) {
    nav.style.display = 'none';
  }
}

// Utility to restore mobile nav display
function showMobileNav() {
  var nav = document.querySelector('.topnav');
  if (nav) {
    nav.style.display = '';
  }
}

//Service Box Expand/Collapse
document.querySelectorAll('.service-header').forEach(header => {
  header.addEventListener('click', function(e) {
    // If close button is clicked
    if (e.target.classList.contains('close-btn')) {
      header.parentElement.classList.remove('active');
      document.body.style.overflow = '';
      // If no service box is active, restore the mobile nav
      if (!document.querySelector('.service-box.active')) {
        showMobileNav();
      }
      return;
    }
    // Prevent expanding if already active
    const box = header.parentElement;
    if (box.classList.contains('active')) return;
    // Close all active service boxes
    document.querySelectorAll('.service-box.active').forEach(b => b.classList.remove('active'));
    // Open clicked box
    box.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Force hide the mobile nav
    hideMobileNav();
  });
});

// When a service box is closed by clicking its close button (in case there are multiple listeners on .close-btn outside service-header)
document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    setTimeout(() => {
      if (!document.querySelector('.service-box.active')) {
        showMobileNav();
      }
    }, 300);
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

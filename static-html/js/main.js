// Ayvant IT & Cybersecurity - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      // Toggle icon
      const icon = mobileMenuBtn.querySelector('svg');
      if (mobileMenu.classList.contains('active')) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
      } else {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
      }
    });
  }

  // Cookie Consent
  const cookieBanner = document.getElementById('cookie-banner');
  const cookieAcceptBtn = document.getElementById('cookie-accept');
  
  if (cookieBanner) {
    const cookieConsent = localStorage.getItem('ayvant-cookie-consent');
    if (!cookieConsent) {
      setTimeout(function() {
        cookieBanner.classList.add('active');
      }, 1000);
    }
  }
  
  if (cookieAcceptBtn) {
    cookieAcceptBtn.addEventListener('click', function() {
      localStorage.setItem('ayvant-cookie-consent', 'accepted');
      localStorage.setItem('ayvant-cookie-consent-date', new Date().toISOString());
      cookieBanner.classList.remove('active');
    });
  }

  // Exit Intent Popup
  const exitPopup = document.getElementById('exit-popup');
  const exitPopupClose = document.getElementById('exit-popup-close');
  const exitPopupOverlay = document.getElementById('exit-popup-overlay');
  let exitPopupShown = false;
  
  if (exitPopup) {
    const popupShown = sessionStorage.getItem('ayvant-exit-popup-shown');
    
    if (!popupShown) {
      document.addEventListener('mouseleave', function(e) {
        if (e.clientY <= 0 && !exitPopupShown) {
          exitPopup.classList.add('active');
          exitPopupShown = true;
          sessionStorage.setItem('ayvant-exit-popup-shown', 'true');
        }
      });
    }
    
    if (exitPopupClose) {
      exitPopupClose.addEventListener('click', function() {
        exitPopup.classList.remove('active');
      });
    }
    
    if (exitPopupOverlay) {
      exitPopupOverlay.addEventListener('click', function(e) {
        if (e.target === exitPopupOverlay) {
          exitPopup.classList.remove('active');
        }
      });
    }
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add active class to current nav link
  const currentPath = window.location.pathname;
  document.querySelectorAll('.navbar-menu a, .mobile-menu a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
});

// ================= Splash Screen =================
window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  const logo = splash.querySelector('img');
  const mainContent = document.getElementById('main-content');
  const navbar = document.getElementById('navbar');

  mainContent.style.display = 'none';
  navbar.style.display = 'none';
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    logo.style.transform = 'scale(2)';
    logo.style.opacity = '0';

    setTimeout(() => {
      splash.style.display = 'none';
      mainContent.style.display = 'block';
      navbar.style.display = 'flex';
      document.body.style.overflow = 'auto';
    }, 1000);
  }, 1000);
});

/* ================= Mobile Navigation ================= */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

/* ================= Mobile Dropdown (Rules) ================= */
const dropdown = document.querySelector('.dropdown');
const dropdownToggle = document.querySelector('.dropdown-toggle');

if (dropdown && dropdownToggle) {
  dropdownToggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 900) {
      // First tap opens menu, second tap navigates
      if (!dropdown.classList.contains('open')) {
        e.preventDefault();
        dropdown.classList.add('open');
      }
    }
  });
}

/* ================= Close Menu After Click (Mobile) ================= */
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      navLinks.classList.remove('active');
      dropdown.classList.remove('open');
    }
  });
});

document.querySelectorAll('.dropdown > a').forEach(link => {
  link.addEventListener('click', e => {
    if (window.innerWidth <= 900) {
      e.preventDefault(); // stop default link click
      link.parentElement.classList.toggle('open'); // toggle dropdown
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Only apply scroll animations on mobile
  if (window.innerWidth <= 900) {
    const cards = document.querySelectorAll('.offer-card, .sponsor-card, .location-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-active');
          observer.unobserve(entry.target); // Animate only once
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
  }
});

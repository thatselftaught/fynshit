document.addEventListener("DOMContentLoaded", function() {
    const fadeUps = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Animate only once
        }
      });
    }, { threshold: 0.15 });
  
    fadeUps.forEach(el => observer.observe(el));
  });
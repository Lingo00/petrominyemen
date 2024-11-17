const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelector('.cta-button').addEventListener('click', function() {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    document.querySelector('.navbar').style.backgroundColor = 'rgba(190, 29, 44, 0.95)';
  } else {
    document.querySelector('.navbar').style.backgroundColor = 'var(--main-red)';
  }
});

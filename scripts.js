// script.js
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('contactModal').classList.remove('active');
    document.getElementById('modalOverlay').classList.remove('active');
});

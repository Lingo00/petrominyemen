document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
});

JavaScript
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

// Toggle menu mobile saat di-klik
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Menutup menu otomatis setelah link di-klik (khusus mobile)
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if(navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});
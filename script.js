document.addEventListener('DOMContentLoaded', () => {
    // FAQ Toggle Feature
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const header = item.querySelector('h3');
        const answer = item.querySelector('.answer');
        const toggleIcon = item.querySelector('.toggle-icon');

        header.addEventListener('click', () => {
            answer.classList.toggle('hidden');
            if (answer.classList.contains('hidden')) {
                toggleIcon.textContent = '+';
            } else {
                toggleIcon.textContent = '-';
            }
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Brochure Download Button with Modal
    const downloadBtn = document.getElementById('downloadBrochure');
    const modal = document.getElementById('brochureModal');
    downloadBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 3000); // Hide modal after 3 seconds
    });

    // Set Current Year in Footer
    const currentYearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    // Back to Top Button Logic
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.remove('opacity-0', 'hidden');
            backToTopButton.classList.add('opacity-100');
        } else {
            backToTopButton.classList.remove('opacity-100');
            backToTopButton.classList.add('opacity-0', 'hidden');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('-translate-x-full');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // FAQ Toggle feature with a more robust class-based approach
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const header = item.querySelector('h3');
        header.addEventListener('click', () => {
            // Toggle the 'open' class on the parent item
            item.classList.toggle('open');
        });
    });

    // Brochure Download button with a simple modal
    const downloadBrochureBtn = document.getElementById('downloadBrochure');
    const brochureModal = document.getElementById('brochureModal');
    const modalMessage = brochureModal.querySelector('.modal-message');

    downloadBrochureBtn.addEventListener('click', () => {
        // Show the modal
        brochureModal.classList.remove('hidden');
        modalMessage.textContent = 'Brochure is downloading...';

        // Simulate a delay for the "download"
        setTimeout(() => {
            modalMessage.textContent = 'Download Complete!';
            
            // Hide the modal after a few seconds
            setTimeout(() => {
                brochureModal.classList.add('hidden');
                modalMessage.textContent = ''; // Reset message
            }, 1500);
        }, 1000);
    });
});

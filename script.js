document.addEventListener('DOMContentLoaded', () => {

    // 1. Highlight Active Nav Link based on Current Page URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-btn');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else if (currentPage === '' && linkPage === 'index.html') {
            link.classList.add('active');
        }
    });

    // 2. Interactive Certificate View Buttons (Alert / Modal Preview)
    const viewButtons = document.querySelectorAll('.btn-view');
    viewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const certCard = button.closest('.cert-card');
            const certTitle = certCard ? certCard.querySelector('h3').innerText : 'Certificate';
            
            // If the button link is '#', display a quick feedback popup
            if (button.getAttribute('href') === '#') {
                e.preventDefault();
                alert(`Viewing credential: ${certTitle}`);
            }
        });
    });

});
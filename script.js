document.addEventListener('DOMContentLoaded', () => {

    const viewButtons = document.querySelectorAll('.btn-view');
    viewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const certName = button.getAttribute('data-cert');
            if (button.getAttribute('href') === '#') {
                e.preventDefault();
                alert(`Opening certificate preview for: ${certName}`);
            }
        });
    });

});
document.addEventListener('DOMContentLoaded', () => {
    const voterForm = document.getElementById('voterForm');

    voterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Successfully Submitted!');
        voterForm.reset();
    });
});

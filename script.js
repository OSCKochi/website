document.getElementById('joinForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.textContent = "Thanks for joining! We'll get back to you soon.";
    confirmationMessage.classList.add('success');
    this.reset();
});

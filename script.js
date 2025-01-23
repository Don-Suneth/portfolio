function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  // Initialize EmailJS
(function() {
  // Replace with your EmailJS public key
  emailjs.init("OpIDt4h76HkzqPG27");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get the submit button
  const submitBtn = this.querySelector('.submit-btn');
  submitBtn.classList.add('loading');

  // Get form data
  const formData = {
      name: this.name.value,
      email: this.email.value,
      subject: this.subject.value,
      message: this.message.value
  };

  // Send email using EmailJS
  emailjs.send(
      'service_007', // Replace with your EmailJS service ID
      'template_qpyx3ub', // Replace with your EmailJS template ID
      formData
  )
  .then(function() {
      // Success
      submitBtn.classList.remove('loading');
      showSuccessMessage();
      document.getElementById('contact-form').reset();
  })
  .catch(function(error) {
      // Error
      submitBtn.classList.remove('loading');
      alert('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
  });
});

function showSuccessMessage() {
  const successMessage = document.createElement('div');
  successMessage.className = 'success-message';
  successMessage.textContent = 'Message sent successfully!';
  
  const form = document.getElementById('contact-form');
  form.insertBefore(successMessage, form.firstChild);
  
  successMessage.style.display = 'block';
  
  setTimeout(() => {
      successMessage.remove();
  }, 5000);
}
/**
 * Contact Page JavaScript
 * Handles form submission and validation
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get the contact form element
    const contactForm = document.getElementById('contactFormElement');

    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Simple validation
        if (!name || !email || !phone || !message) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Validate email format
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Validate phone number format (simple validation for Egypt)
        if (!/^\+20\d{10}$/.test(phone)) {
            alert('Please enter a valid Egyptian phone number starting with +20');
            return;
        }
        
        // In a real application, you would send the data to a server here
        console.log('Form submitted:', { name, email, phone, message });
        
        // Show success message
        alert('Thank you! Your message has been sent successfully. We will contact you soon.');
        
        // Reset the form
        contactForm.reset();
    });
});
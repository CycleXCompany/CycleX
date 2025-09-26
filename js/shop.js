document.addEventListener('DOMContentLoaded', function() {
    // Get the elements needed for toggling sections
    const shopOption = document.getElementById('shopOption');
    const recycleOption = document.getElementById('recycleOption');
    const productsSection = document.getElementById('productsSection');
    const recycleSection = document.getElementById('recycleSection');
    
    // Get the form and its new inputs
    const recycleForm = document.getElementById('recycleForm');
    const materialType = document.getElementById('materialType');
    const materialQuantity = document.getElementById('materialQuantity');
    const recycleName = document.getElementById('recycleName');

    // Show the products section when the "Shop" option is clicked
    shopOption.addEventListener('click', () => {
        productsSection.style.display = 'block';
        recycleSection.style.display = 'none';
        shopOption.classList.add('active-service');
        recycleOption.classList.remove('active-service');
    });

    // Show the recycling form when the "Recycle" option is clicked
    recycleOption.addEventListener('click', () => {
        productsSection.style.display = 'none';
        recycleSection.style.display = 'block';
        recycleOption.classList.add('active-service');
        shopOption.classList.remove('active-service');
    });

    // Handle the submission of the recycling form
    recycleForm.addEventListener('submit', function(e) {
        // Prevent the form from reloading the page
        e.preventDefault(); 
        
        // Get the values from the new form fields
        const name = recycleName.value;
        const type = materialType.value;
        const quantity = materialQuantity.value;
        
        // Create a confirmation message with the new data
        const confirmationMessage = `Thank you, ${name}!\n\nYour request has been submitted for:\nMaterial: ${type}\nQuantity: ${quantity}\n\nWe will contact you shortly.`;
        
        // Show a confirmation message
        alert(confirmationMessage);
        
        // Clear the form fields
        this.reset();
    });
});
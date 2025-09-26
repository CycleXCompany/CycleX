document.addEventListener('DOMContentLoaded', () => {
    const signupTab = document.getElementById('signupTab');
    const loginTab = document.getElementById('loginTab');
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    
    // Get the form elements inside the listener
    const signupFormElement = document.getElementById('signupFormElement');
    const loginFormElement = document.getElementById('loginFormElement');

    // Function to switch to Sign Up view
    const showSignup = () => {
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    };

    // Function to switch to Login view
    const showLogin = () => {
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    };

    // Event listeners for tabs
    signupTab.addEventListener('click', showSignup);
    loginTab.addEventListener('click', showLogin);
    
    // --- Form Submission Logic (Moved Inside) ---
    signupFormElement.addEventListener('submit', ev => {
        // Prevent the default form submission which reloads the page
        ev.preventDefault(); 
        // Redirect to the index page
        window.location.href = './index.html';
    });

    loginFormElement.addEventListener('submit', ev => {
        // Prevent the default form submission
        ev.preventDefault(); 
        // Redirect to the index page
        window.location.href = './index.html';
    });
});


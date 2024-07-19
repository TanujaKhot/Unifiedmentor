document.addEventListener('DOMContentLoaded', () => {
    // Handle registration form submission
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;
        // Implement registration logic here (e.g., save to localStorage for this simple example)
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('User registered successfully!');
        this.reset();
    });

    // Handle login form submission
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        // Implement login logic here (e.g., check against localStorage for this simple example)
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        if (username === storedUsername && password === storedPassword) {
            alert('User logged in successfully!');
        } else {
            alert('Invalid username or password');
        }
        this.reset();
    });
});
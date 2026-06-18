document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // You would replace this with your actual login logic.
    // This example just checks if the username and password are both "admin".
    if (username === 'CaseMentor2197' && password === 'PSG-SIM-5z5YnG1') {
        localStorage.setItem('isLoggedIn', 'true');  // Set isLoggedIn to true in local storage
        window.location.href = 'index.html';
    } else {
        // Failed login
        // Display an error message
        document.getElementById('login-error').textContent = 'Invalid username or password.';
    }
});

function validatePasswords() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorDiv = document.getElementById('passwordError');
    
    if (password !== confirmPassword) {
        errorDiv.textContent = 'Passwords do not match!';
        return false;
    } else {
        errorDiv.textContent = '';
        return true;
    }
}

// Add event listeners
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('password').addEventListener('input', validatePasswords);
    document.getElementById('confirmPassword').addEventListener('input', validatePasswords);
    
    // Prevent form submission if passwords don't match
    document.querySelector('form').addEventListener('submit', function(e) {
        if (!validatePasswords()) {
            e.preventDefault();
            alert('Please fix the password mismatch before submitting.');
        }
    });
});


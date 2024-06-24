document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const user1 = 'Jitin';
    const pass1 = 'hello0';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === user1 && password === pass1) {
        window.location.href = 'https://www.linkedin.com/feed/';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
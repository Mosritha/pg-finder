document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const roomrouteElement = document.querySelector('.roomroute');
    const loginButton = document.getElementById('loginButton');
    const createAccountButton = document.getElementById('createAccountButton');
    const userDropdown = document.getElementById('userDropdown');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const logoutButton = document.getElementById('logoutButton');

    if (user) {
        roomrouteElement.textContent = `RoomRoute`;
        welcomeMessage.textContent = `Welcome, ${user.name}`;
        userDropdown.style.display = 'block';
        loginButton.style.display = 'none';
        createAccountButton.style.display = 'none';
    } else {
        userDropdown.style.display = 'none';
        loginButton.style.display = 'inline-block';
        createAccountButton.style.display = 'inline-block';
    }

    // Logout Functionality
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('user');
        alert('Logged out successfully!');
        window.location.reload();
    });
});

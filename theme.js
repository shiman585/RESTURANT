// theme.js - This should be included in all HTML files

// Theme management functions
function setTheme(theme) {
    if (theme === 'night') {
        document.body.classList.remove('day-theme');
        document.body.style.backgroundColor = 'black';
        localStorage.setItem('theme', 'night');
    } else {
        document.body.classList.add('day-theme');
        document.body.style.backgroundColor = 'white';
        localStorage.setItem('theme', 'day');
    }
    updateThemeButtons();
}

function toggleTheme() {
    if (document.body.classList.contains('day-theme')) {
        setTheme('night');
    } else {
        setTheme('day');
    }
}

function updateThemeButtons() {
    const themeToggles = document.querySelectorAll('.theme-toggle');
    themeToggles.forEach(button => {
        if (document.body.classList.contains('day-theme')) {
            button.innerHTML = '<i class="fas fa-sun"></i>';
            if (button.id === 'mobileThemeToggle') {
                button.innerHTML = '<i class="fas fa-sun me-2"></i> Theme';
            }
        } else {
            button.innerHTML = '<i class="fas fa-moon"></i>';
            if (button.id === 'mobileThemeToggle') {
                button.innerHTML = '<i class="fas fa-moon me-2"></i> Theme';
            }
        }
    });
}

// Initialize theme when page loads
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'night';
    setTheme(savedTheme);
    
    // Add event listeners to all theme toggle buttons
    document.querySelectorAll('.theme-toggle').forEach(button => {
        button.addEventListener('click', toggleTheme);
    });
});
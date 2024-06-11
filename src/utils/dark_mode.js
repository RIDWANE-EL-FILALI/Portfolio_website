export default function setTheme() {
    const themeToggleButtons = document.querySelectorAll('#theme-toggle');
    const themeImages = document.querySelectorAll('.theme-img');
    // Retrieve theme from local storage or default to 'dark'
    let theme = localStorage.getItem('theme') || 'dark';

    // Function to toggle theme
    function toggleTheme() {
        themeImages.forEach(image => {
            if (theme === 'dark') {
                image.src = image.src.replace('Dark', 'Light');
            } else {
                image.src = image.src.replace('Light', 'Dark');
            }
        });
        document.body.classList.toggle('light_mode');
        // Update theme in local storage
        localStorage.setItem('theme', theme);
    }

    // Apply initial theme
    if (theme === 'light') {
        toggleTheme();
    }

    // Event listener for theme toggle buttons
    themeToggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            theme = theme === 'dark' ? 'light' : 'dark';
            toggleTheme();
        });
    });
}

export default function setTheme() {
    const themeToggleButtons = document.querySelectorAll('#theme-toggle');
    const themeImages = document.querySelectorAll('.theme-img');
    //storage api used to store the theme in the local storage
    let theme = localStorage.getItem('theme') || 'dark';

    if (theme === 'light') {
        document.body.classList.add('light_mode');
        themeImages.forEach(image => {
            image.src = image.src.replace('Light', 'Dark');
        });
    }

    themeToggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (theme === 'dark') {
                theme = 'light';
                document.body.classList.add('light_mode');
                themeImages.forEach(image => {
                    image.src = image.src.replace('Light', 'Dark');
                    
                });
            } else {
                theme = 'dark';
                document.body.classList.remove('light_mode');
                themeImages.forEach(image => {
                    image.src = image.src.replace('Dark', 'Light');
                });
            }
            localStorage.setItem('theme', theme);
        });
    });
}


export default function mobileNav() {
    const button = document.querySelector('.header__bars');
    const nav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');

    let isMobileNavOpen = false;

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.style.overflowY = 'auto';
            nav.style.display = 'none';
            isMobileNavOpen = false;
        });
    });

    button.addEventListener('click', () => {
        if (isMobileNavOpen) {
            nav.style.display = 'none';
            isMobileNavOpen = false;
            document.body.style.overflowY = 'auto';
        } else {
            document.body.style.overflowY = 'hidden';
            nav.style.display = 'flex';
            isMobileNavOpen = true;
        }
    });
}

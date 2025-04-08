let wrapperCreated = false;

function moveFooterElements() {
    const footer = document.querySelector('.containerFooter');
    const logo = footer.querySelector('div:nth-child(1)');
    const social = footer.querySelector('.social-links');

    if (!footer || !logo || !social) return;

    let wrapper = document.querySelector('.logo-social-wrapper');

    if (window.innerWidth < 992) {
        if (!wrapper) {
            wrapper = document.createElement('div');
            wrapper.classList.add('logo-social-wrapper');

            wrapper.appendChild(logo);
            wrapper.appendChild(social);

            footer.appendChild(wrapper);
            wrapperCreated = true;
        }
    } else {
        if (wrapperCreated && wrapper) {
            footer.insertBefore(logo, footer.firstChild);
            footer.appendChild(social);
            wrapper.remove();
            wrapperCreated = false;
        }
    }
    const icons = document.querySelectorAll('.social-links i');
        icons.forEach(icon => {
            icon.style.color =window.innerWidth <992 ? 'white' : '#991b1f';
        });

}

window.addEventListener('DOMContentLoaded', moveFooterElements);
window.addEventListener('load', moveFooterElements);
window.addEventListener('resize', moveFooterElements);
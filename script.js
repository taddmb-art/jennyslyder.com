const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}


// Build the booking email only when clicked so the plain address is not displayed on the page.
document.querySelectorAll('.js-email').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const address = `${link.dataset.user}@${link.dataset.domain}`;
    window.location.href = `mailto:${address}`;
  });
});

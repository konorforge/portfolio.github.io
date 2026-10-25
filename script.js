document.addEventListener('DOMContentLoaded', () => {
  const scrollButtons = document.querySelectorAll('.btn-to-precios');

  scrollButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const targetSelector = button.getAttribute('data-target') || '#precios';
      const targetElement = document.querySelector(targetSelector);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
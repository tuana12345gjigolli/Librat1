// Merr të gjitha div-et me klasën category
const categories = document.querySelectorAll('.category');

categories.forEach(category => {
  const images = category.querySelectorAll('.books img');
  const descBox = category.querySelector('.description');

  images.forEach(img => {
    img.addEventListener('click', () => {
      descBox.style.color = '#f9f9f9';
      // Vendos përshkrimin në div-in përkatës
      descBox.textContent = img.getAttribute('data-info');
      descBox.classList.remove('info-hidden');
    });
  });
});

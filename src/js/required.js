const inputContainers = document.querySelectorAll('.input-container');

inputContainers.forEach(container => {
  const input = container.querySelector('.connection__input');
  const requiredText = container.querySelector('.required');
  
  input.addEventListener('input', function () {
    if (input.value.trim() !== '') {
      requiredText.style.opacity = 0;
    } else {
      requiredText.style.opacity = 1;
    }
  });
});
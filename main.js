const toggle = document.getElementById('themeToggle');
const body = document.body;

const sunIcon = document.querySelector('.sun-icond');
const moonIcon = document.querySelector('.moon-icon');

toggle.addEventListener('click', () => {
  body.classList.toggle('light');

  if (body.classList.contains('light')) {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline';
  } else {
    sunIcon.style.display = 'inline';
    moonIcon.style.display = 'none';
  }
});

// при загрузке страницы показываем только солнце (тёмная тема по умолчанию)
sunIcon.style.display = 'inline';
moonIcon.style.display = 'none';

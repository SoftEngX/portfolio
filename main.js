const toggle = document.getElementById('themeToggle');
const body = document.body;
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

// Проверяем сохранённую тему
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light');
  sunIcon.style.display = 'none';
  moonIcon.style.display = 'inline';
} else {
  body.classList.add('dark');
  sunIcon.style.display = 'inline';
  moonIcon.style.display = 'none';
}

// Переключаем тему при клике
toggle.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline';
  } else {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
    sunIcon.style.display = 'inline';
    moonIcon.style.display = 'none';
  }
});

function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display ="none"
}


// const toggleBtn = document.querySelector('.contact');
// const socials = document.querySelector('.socials');
// const contacts = document.querySelector('.contacts');

// toggleBtn.addEventListener('click', () => {
//   socials.classList.toggle('active');
//   contacts.classList.toggle('active');
// });






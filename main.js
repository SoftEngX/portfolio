const toggle = document.getElementById('themeToggle');
const body = document.body;
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');
const avatar = document.querySelector('.avatar');
// const modal = document.querySelector('.modal');

// Проверяем сохранённую тему
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light');
  sunIcon.style.display = 'none';
  moonIcon.style.display = 'inline';
  avatar.src = 'img/avatar-light.png';
} else {
  body.classList.add('dark');
  sunIcon.style.display = 'inline';
  moonIcon.style.display = 'none';
  avatar.src = 'img/avatar-dark.png';
}

// Переключаем тему при клике
toggle.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline';
    avatar.src = 'img/avatar-light.png'; // ⬅️ добавлено сюда
  } else {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
    sunIcon.style.display = 'inline';
    moonIcon.style.display = 'none';
    avatar.src = 'img/avatar-dark.png'; // ⬅️ и сюда
  }
});

function openModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
  setTimeout(() => {
    modal.classList.add("show");
  }, 10); 
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("show"); // запускает исчезновение
  setTimeout(() => {
    modal.style.display = "none"; // скрывает после анимации
  }, 300); 
};


const toggleBtn = document.getElementById("toggle-btn");
const contacts = document.getElementById("contacts");
const socials = document.getElementById("socials");
const divider = document.getElementById("divider");

toggleBtn.addEventListener('click', () => {
  socials.classList.toggle('active');
  contacts.classList.toggle('active');
  divider.classList.toggle('active');
});

  document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");

    document.querySelectorAll("a").forEach((link) => {
      const href = link.getAttribute("href");
      if (href && href.endsWith(".html")) {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          document.body.classList.add("fade-out");
          setTimeout(() => {
            window.location.href = href;
          }, 500); // совпадает с длительностью fadeOut
        });
      }
    });
  });
// toggleBtn.addEventListener("click", () => {
//   contacts.style.display = contacts.style.display === "block" ? "none" : "block";
//   socials.style.display = socials.style.display === "block" ? "none" : "block";
//   divider.style.display = divider.style.display === "block" ? "none" : "block";

// });
// const toggleBtn = document.querySelector('.contact');
// const socials = document.querySelector('.socials');
// const contacts = document.querySelector('.contacts');
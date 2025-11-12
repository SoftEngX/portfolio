// 🌙 Темная/светлая тема
const toggle = document.getElementById("themeToggle");
const body = document.body;
const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");
const avatar = document.querySelector(".avatar");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.add("light");
  sunIcon.style.display = "none";
  moonIcon.style.display = "inline";
  avatar.src = "img/avatar-light.png";
} else {
  body.classList.add("dark");
  sunIcon.style.display = "inline";
  moonIcon.style.display = "none";
  avatar.src = "img/avatar-dark.png";
}

toggle.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline";
    avatar.src = "img/avatar-light.png";
  } else {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
    sunIcon.style.display = "inline";
    moonIcon.style.display = "none";
    avatar.src = "img/avatar-dark.png";
  }
});

// 📩 Модалка
function openModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
  setTimeout(() => {
    modal.classList.add("show");
  }, 10);
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

const toggleBtn = document.getElementById("toggle-btn");
const contacts = document.getElementById("contacts");
const socials = document.getElementById("socials");
const divider = document.getElementById("divider");

toggleBtn.addEventListener("click", () => {
  socials.classList.toggle("active");
  contacts.classList.toggle("active");
  divider.classList.toggle("active");
});


// 🧭 SPA-навигация + активная ссылка
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll(".section");

  function showSection(id) {
    // Скрываем все секции
    sections.forEach((section) => {
      section.classList.remove("active");
    });

    // Убираем активный класс со всех ссылок
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Показываем нужную секцию
    const target = document.querySelector(id);
    if (target) {
      target.classList.add("active");
    }

    // Подсвечиваем соответствующую ссылку
    const activeLink = document.querySelector(`nav a[href="${id}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  // Показываем первую секцию при загрузке
  showSection("#about");

  // Обработка кликов по навигации
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      showSection(targetId);
    });
  });
});

      const btnSubmit = document.getElementById("btn_submit");

btnSubmit.addEventListener("click", () => {
  alert("Форма отправлена!");
});
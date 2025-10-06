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

document.addEventListener('DOMContentLoaded', () => {
  const profilePic = document.getElementById('profilePic');
  const imgModal = document.getElementById('imgModal');
  const fullImg = document.getElementById('fullImg');

  if (!profilePic || !imgModal || !fullImg) {
    console.error('profilePic / imgModal / fullImg not found');
    return;
  }

  // открываем модалку и подставляем src
  profilePic.addEventListener('click', () => {
    fullImg.src = profilePic.src;
    imgModal.classList.add('open');
    imgModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // блокируем скролл страницы
  });

  // закрываем по клику на тёмный фон (если кликнули прямо по контейнеру)
  imgModal.addEventListener('click', (e) => {
    if (e.target === imgModal) {
      imgModal.classList.remove('open');
      imgModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      fullImg.removeAttribute('src');
    }
  });

  // закрыть по Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imgModal.classList.contains('open')) {
      imgModal.classList.remove('open');
      imgModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      fullImg.removeAttribute('src');
    }
  });
});

const toggleBtn = document.querySelector('.contact');
const socials = document.querySelector('.socials');
const contacts = document.querySelector('.contacts');

toggleBtn.addEventListener('click', () => {
  socials.classList.toggle('active');
  contacts.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circle-skill");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const circle = entry.target.querySelector(".circle");
        const percentText = entry.target.querySelector(".circle-percent");
        const targetPercent = entry.target.dataset.percent;
        let currentPercent = 0;

        // Анимация круга
        circle.style.strokeDasharray = `${targetPercent}, 100`;

        // Анимация числа в центре
        const interval = setInterval(() => {
          if (currentPercent < targetPercent) {
            currentPercent++;
            percentText.textContent = currentPercent + "%";
          } else {
            clearInterval(interval);
          }
        }, 15);

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  circles.forEach(circle => observer.observe(circle));
});



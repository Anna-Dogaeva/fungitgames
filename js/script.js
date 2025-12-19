// Мобильное меню
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

// Временно отключено
// mobileMenuBtn.addEventListener('click', () => {
//     mainNav.classList.toggle('active');
//     mobileMenuBtn.innerHTML = mainNav.classList.contains('active')
//         ? '<i class="fas fa-times"></i>'
//         : '<i class="fas fa-bars"></i>';
// });

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        if(this.getAttribute('href') === '#') return;

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if(targetElement) {
            // Закрываем мобильное меню при клике на ссылку
            if(mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }

            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Обработка формы
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const interest = document.getElementById('interest').value;

    // Простая имитация отправки формы
    alert(`Спасибо, ${name}! Справочник по мандаринам будет отправлен на вашу почту. Особое внимание мы уделим ${getInterestText(interest)}.`);

    // Сброс формы
    contactForm.reset();
});

function getInterestText(interestValue) {
    switch(interestValue) {
        case 'clementine': return 'клементинам';
        case 'tangerine': return 'танжеринам';
        case 'satsuma': return 'сацуме';
        case 'other': return 'другим сортам';
        default: return 'всем сортам';
    }
}

// Добавление небольшой анимации при прокрутке
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.variety-card, .benefit-item');
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;

        if(cardPosition < windowHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Инициализация анимации при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.variety-card, .benefit-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Запускаем анимацию после небольшой задержки
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 300);
});

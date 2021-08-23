const toggleBtn = document.querySelector('.header__bars');
const menu = document.querySelector('header__menu');
const sns = document.querySelector('header__sns');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    sns.classList.toggle('active');
})
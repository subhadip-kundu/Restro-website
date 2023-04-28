const ham = document.querySelector('.ham-icon');
const old = document.querySelector('.nav-list');
const icon = document.querySelector('.fa-bars');
ham.addEventListener('click',()=>{
    old.classList.toggle('after-ham');
    icon.classList.toggle('icon');
})

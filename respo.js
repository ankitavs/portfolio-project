burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-respo');
    navList.classList.toggle('v-class-respo');
    navbar.classList.toggle('h-nav-respo');

   
})
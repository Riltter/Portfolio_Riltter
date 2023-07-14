const ativaMenu = document.querySelector('.fa-bars')
const navMenu = document.querySelector('header .navegacao-primaria')

ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-xmark')
    navMenu.classList.toggle('ativado')
})

const openMenuButton = document.getElementById('openMenu')
const closeMenuButton = document.getElementById('closeMenu')
const allLinks = document.querySelectorAll('.menu-opened ul li')

const menuOpened = document.querySelector('.menu-opened')

const sr = ScrollReveal({
  origin: 'bottom',
  duration: 1000,
  distance: '50px',
  reset: true,
})

sr.reveal('.home h1', { delay: 200 })
sr.reveal('.home button', { delay: 200 })
sr.reveal('.how-works h2', { delay: 200 })
sr.reveal('.our-plans article .card-price h2', { delay: 100 })
sr.reveal('.our-plans article .card-price .price-area', { delay: 500 })
sr.reveal('.download .leftside h3', { delay: 200 })

openMenuButton.addEventListener('click', () => {
  menuOpened.style.display = 'flex'
})

closeMenuButton.addEventListener('click', () => {
  menuOpened.style.display = 'none'
})

for (const link of allLinks) {
  link.addEventListener('click', () => {
    menuOpened.style.display = 'none'
  })
}

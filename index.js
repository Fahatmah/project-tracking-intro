const navOpen = document.querySelector('.nav__toggle')
const navClose = document.querySelector('.nav__close')
const btns = document.querySelectorAll('.btn')
const navLinks = document.querySelector('.nav__links')
const links = document.querySelector('.links')

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const target = e.currentTarget.classList

    if (target.contains('nav__toggle')) {
      navLinks.classList.add('show')
      navOpen.style.display = 'none'
    }

    if (target.contains('nav__close')) {
      navLinks.classList.remove('show')
      navOpen.style.display = 'flex'
    }
  })
})


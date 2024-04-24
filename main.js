const navBar = document.querySelector(".nav-bar")
const header = document.querySelector("header")
const container = document.querySelector(".container")
const hamburguer = document.getElementById("hamburguer")
const navLinks = document.querySelectorAll(".nav-bar ul li a")

hamburguer.addEventListener("click", () => {
  navBar.classList.toggle("show")
})

const responsive = () => {
  if (window.innerWidth <= 865) {
    header.appendChild(navBar)
  } else {
    container.appendChild(navBar)
  }
}
responsive()
window.addEventListener("resize", responsive)

function closeMenu() {
  navBar.classList.remove("show")
}

navLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault()
    const targetId = this.getAttribute("href").substring(1)
    const targetSection = document.getElementById(targetId)

    if (targetSection) {
      const headerHeight = header.clientHeight

      const offset = targetSection.offsetTop - headerHeight

      window.scrollTo({
        top: offset,
        behavior: "smooth"
      })
    }
    closeMenu()
  })
})

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Navigation active state
  const navLinks = document.querySelectorAll(".nav-link")
  const sections = document.querySelectorAll(".section")

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: "smooth",
      })

      // Update active link
      navLinks.forEach((link) => link.classList.remove("active"))
      this.classList.add("active")
    })
  })

  // Update active navigation link on scroll
  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  })

  // Simple typing effect for the profile description
  const profileDesc = document.querySelector(".profile p")
  const text = profileDesc.textContent
  profileDesc.textContent = ""

  let i = 0
  function typeWriter() {
    if (i < text.length) {
      profileDesc.textContent += text.charAt(i)
      i++
      setTimeout(typeWriter, 50)
    }
  }

  typeWriter()
})

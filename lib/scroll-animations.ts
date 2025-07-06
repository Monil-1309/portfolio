export function initScrollAnimations() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href") as string)
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Parallax effect for hero section
  const handleScroll = () => {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll(".parallax")

    parallaxElements.forEach((element) => {
      const speed = 0.5
      const yPos = -(scrolled * speed)
      ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
    })
  }

  window.addEventListener("scroll", handleScroll)

  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}

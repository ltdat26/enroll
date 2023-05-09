const parallax = document.getElementById("parallax")
const title1 = document.querySelector(".title-1")

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset
  parallax.style.backgroundPositionY = offset * 0.7 + 'px'

  console.log("window.pageYOffset: " + offset)

  if (offset === 1500) {
    title1.classList.add("slidein")
  }
})

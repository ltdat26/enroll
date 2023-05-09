const colors = ["#f94144", "#f3722c", "#f8961e", "#f9c74f", "#90be6d", "#43aa8b", "#577590"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();

  color.textContent = colors[randomNumber]
  color.style.color = colors[randomNumber]
  document.body.style.backgroundColor = colors[randomNumber]
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length)
};
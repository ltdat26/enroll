const Buttons = document.querySelectorAll(".btn")
const CounterValue = document.getElementById("value")
let count = CounterValue.value

let changeColors = (e) => {
  if (e > 0) { CounterValue.style.color = "green" }
  if (e < 0) { CounterValue.style.color = "red" }
  if (e == 0) { CounterValue.style.color = "#222" }
}

CounterValue.onchange = () => {
  count = CounterValue.value;
  changeColors(CounterValue.value)
}

Buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList
    if (styles.contains("decrease")) {
      count--
    } else if (styles.contains("increase")) {
      count++
    } else if (styles.contains("multi")) {
      count = count * 2
    } else if (styles.contains("divide")) {
      count = count / 2
    } else {
      count = 0
    }
    changeColors(count)
    CounterValue.value = count
  })
})
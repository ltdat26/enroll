const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// FETCH EXCHANGE RATE AND UPDATE THE DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/32f7dca233b323db3167858c/latest/${currency_one}`
  )
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      const rates = data.conversion_rates[currency_two];
      // Får inte denna att fungera med API:n
      console.log(rate);
    });
}

// EVENT LISTENERS
currencyEl_one.addEventListener('change', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
amountEl_two.addEventListener('input', calculate);

calculate();

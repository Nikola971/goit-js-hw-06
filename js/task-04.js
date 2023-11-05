const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const valueSpan = document.querySelector('#value');

let counterValue = 0;

decrementButton.addEventListener('click', function () {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
});

incrementButton.addEventListener('click', function ()  {
  counterValue += 1;
  valueSpan.textContent = counterValue;
});
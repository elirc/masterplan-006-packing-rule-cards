import { recommendPacking } from './core.js';
const result = document.querySelector('#result');
document.querySelector('#packing').addEventListener('submit', event => {
  event.preventDefault();
  try {
    const temperature = numberFromInput(document.querySelector('#temperature'));
    const card = recommendPacking(temperature, document.querySelector('#weather').value);
    result.classList.remove('error');
    result.textContent = `${card.band.toUpperCase()} · ${card.weather}\nPack: ${card.items.join(', ')}.`;
  } catch (error) { showError(error); }
});

function showError(error) {
  result.classList.add('error');
  result.textContent = error.message;
}
function numberFromInput(input) {
  if (input.value.trim() === '') throw new TypeError('Enter a number; blank is not zero.');
  const number = Number(input.value);
  if (!Number.isFinite(number)) throw new TypeError('Enter a finite number.');
  return number;
}

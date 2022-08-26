const textInput = document.querySelector('input');
const output = document.querySelector('span');

textInput.addEventListener('input', event => {
  event.currentTarget.value !== ''
    ? (output.textContent = event.currentTarget.value)
    : (output.textContent = 'Anonymous');
});

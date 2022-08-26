const inputItem = document.querySelector('input');
const inputLength = inputItem.value;
const dataLength = inputItem.getAttribute('data-length');

inputItem.addEventListener('blur', event => {
  const actualLength = `${event.currentTarget.value.length}`;
  if (actualLength === dataLength) {
    inputItem.classList.add('valid'), inputItem.classList.remove('invalid');
  } else {
    inputItem.classList.add('invalid');
  }
});

const inputItem = document.querySelector('input');
const text = document.querySelector('span');
text.style.fontSize = '56px';
inputItem.addEventListener(
  'input',
  event => (text.style.fontSize = `${event.currentTarget.value}px`)
);

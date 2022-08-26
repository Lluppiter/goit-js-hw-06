function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');
const changeCollorButton = document.querySelector('.change-color');
const actualBackgroundColor = document.querySelector('span.color');
changeCollorButton.addEventListener('click', event => {
  event.preventDefault();
  actualBackgroundColor.textContent = body.style.backgroundColor = getRandomHexColor();
});

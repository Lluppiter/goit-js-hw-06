function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector('input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxItems = document.querySelector('#boxes');

const createBoxes = amount => {
  const boxArr = [];
  for (let i = 0; i < amount; i += 1) {
    boxArr.push('<div class="box"></div');
    boxItems.insertAdjacentHTML('beforeend', boxArr);
  }
};

createButton.addEventListener('click', () => {
  createBoxes(input.value);
  const boxItemArr = document.querySelectorAll('.box');
  let index = 30;
  boxItemArr.forEach(function (boxItem) {
    index += 10;
    boxItem.style.backgroundColor = `${getRandomHexColor()}`;
    boxItem.style.width = `${index}px`;
    boxItem.style.height = `${index}px`;
  });
});
destroyButton.addEventListener('click', () => {
  const boxItemArr = document.querySelectorAll('.box');
  input.value = null;
  boxItemArr.forEach(function (box) {
    box.remove();
  });
});

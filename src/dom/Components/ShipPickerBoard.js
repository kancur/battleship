import './styles/ShipPickerBoard.css';

export default function ShipPickerBoard(rotateHandler) {
  const boardWrap = document.createElement('div');
  boardWrap.classList.add('board-wrap');

  const shipPicker = document.createElement('div');
  shipPicker.classList.add('shippicker');

  const arrowLeft = document.createElement('div');
  arrowLeft.classList.add('arrow-left');

  const title = document.createElement('h2');
  title.textContent = 'Place your fleet';

  const button = document.createElement('button');
  button.textContent = 'Rotate ship';
  button.addEventListener('click', () => {
    rotateHandler();
  });

  shipPicker.append(arrowLeft, title, button);
  boardWrap.append(shipPicker);

  return boardWrap;
}

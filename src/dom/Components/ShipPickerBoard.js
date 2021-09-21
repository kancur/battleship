import { SHIP_LENGTHS } from '../../CONSTANTS';
import './styles/ShipPickerBoard.css';

export default function ShipPickerBoard(rotateHandler, getCurrentShipID) {
  let isVertical = false;

  const boardWrap = document.createElement('div');
  boardWrap.id = 'ship-picker';
  boardWrap.classList.add('board-wrap');

  const shipPicker = document.createElement('div');
  shipPicker.classList.add('shippicker');

  const arrowLeft = document.createElement('div');
  arrowLeft.classList.add('arrow-left');

  const title = document.createElement('h2');
  title.textContent = 'Place your fleet';

  const currentShipWrap = document.createElement('div');
  currentShipWrap.classList.add('current-ship-wrap');

  const button = document.createElement('button');
  button.textContent = 'Rotate ship';
  button.addEventListener('click', () => {
    isVertical = !isVertical;
    render();
    rotateHandler();
  });

  const getCurrentShipDOM = () => {
    const currentShipLength = SHIP_LENGTHS[getCurrentShipID()];
    const shipElement = document.createElement('div');
    if (isVertical) {
      shipElement.classList.add('is-vertical');
    }
    shipElement.classList.add('destroyed-ship', 'current-ship');

    for (let i = 0; i < currentShipLength; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      shipElement.appendChild(cell);
    }
    return shipElement;
  };

  const clean = () => {
    currentShipWrap.textContent = '';
    boardWrap.textContent = '';
    shipPicker.textContent = '';
  };
  const render = () => {
    clean();
    const currentShip = getCurrentShipDOM();
    currentShipWrap.appendChild(currentShip);
    shipPicker.append(arrowLeft, title, button, currentShipWrap);
    boardWrap.append(shipPicker);
  };

  const getBoardWrap = () => boardWrap;

  return { getBoardWrap, displayCurrentShip: getCurrentShipDOM, render };
}

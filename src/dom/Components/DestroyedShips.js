export default class DestroyedShips {
  constructor() {
    this.wrapper = document.createElement('div');
    this.title = document.createElement('h2');
    this.initialize();
  }

  initialize() {
    this.title.textContent = 'Destroyed ships';
    this.wrapper.classList.add('destroyed-ships-wrapper');
    this.wrapper.appendChild(this.title);
  }

  appendShip(ship) {
    const shipElement = document.createElement('div');
    shipElement.classList.add('destroyed-ship');

    for (let i = 0; i < ship.getLength(); i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      shipElement.appendChild(cell);
    }
    this.wrapper.appendChild(shipElement);
  }

  getElement() {
    return this.wrapper;
  }
}

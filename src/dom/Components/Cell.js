export default function cell(x, y, cellData, boardData, handleCellClick, handleCellHover) {
  const cellEl = document.createElement('div');
  cellEl.classList.add('cell');
  cellEl.dataset.x = x;
  cellEl.dataset.y = y;

  if (cellData.isShip !== false && boardData.type === 'player') {
    cellEl.classList.add('ship');
  }

  if (cellData.isPreview === true) {
    cellEl.classList.add('preview');
  }

  if (cellData.isShip === false && cellData.isHit === true) {
    cellEl.textContent = '⬤';
  }
  if (cellData.isShip !== false && cellData.isHit === true) {
    cellEl.textContent = '⬤';
    cellEl.classList.add('hit');

    if (cellData.isShip.isSunk()) {
      cellEl.classList.add('sunk');
    }
  }

  if (handleCellClick) {
    //cellEl.addEventListener('click', () => handleCellClick({ x: cellEl.dataset.x, y: cellEl.dataset.y }));
    cellEl.addEventListener('click', () => console.log('clicked'));
  }

  if (handleCellHover) {
    cellEl.addEventListener('mouseenter', () => handleCellHover({ x: cellEl.dataset.x, y: cellEl.dataset.y }));
  }

  return cellEl;
}

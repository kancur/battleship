export default function cell(x, y, cellData, boardData, handleCellClick) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.dataset.x = x;
  cell.dataset.y = y;

  if (cellData.isShip !== false && "boardData.type === 'player'") {
    cell.classList.add('ship');
  }

  if (cellData.isShip === false && cellData.isHit === true) {
    cell.textContent = '⬤';
  }
  if (cellData.isShip !== false && cellData.isHit === true) {
    cell.textContent = '⬤';
    cell.classList.add('hit');

    if (cellData.isShip.isSunk()) {
      cell.classList.add('sunk');
    }
  }

  if (handleCellClick) {
    cell.addEventListener('click', () => handleCellClick({ x: cell.dataset.x, y: cell.dataset.y }));
  }

  return cell;
}

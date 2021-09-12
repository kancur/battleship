function board(data, type, handleCellClick) {
  const boardDiv = document.createElement('div');
  boardDiv.classList.add('board');

  data.forEach((rowData, y) => {
    rowData.forEach((cellData, x) => {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.x = x;
      cell.dataset.y = y;

      if (cellData.isShip !== false && type === 'player') {
        cell.classList.add('ship');
      }

      if (cellData.isShip === false && cellData.isHit === true) {
        cell.textContent = '⬤';
      }
      if (cellData.isShip !== false && cellData.isHit === true) {
        cell.textContent = '⬤';
        cell.classList.add('hit');
      }

      if (handleCellClick) {
        cell.addEventListener('click', () => handleCellClick({ x: cell.dataset.x, y: cell.dataset.y }));
      }

      boardDiv.appendChild(cell);
    });
  });

  return boardDiv;
}

function heading(title) {
  const boardHeading = document.createElement('h2');
  boardHeading.textContent = title;
  return boardHeading;
}

export default function boardCard(array, data, handleCellClick) {
  const wrapper = document.createElement('div');
  const myHeading = heading(data.title);
  const myBoard = board(array, data.type, handleCellClick);

  wrapper.append(myHeading, myBoard);
  return wrapper;
}

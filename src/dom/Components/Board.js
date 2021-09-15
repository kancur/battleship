import Cell from './Cell';

function heading(title) {
  const boardHeading = document.createElement('h2');
  boardHeading.textContent = title;
  return boardHeading;
}

export default function Board(array, boardData, handleCellClick, handleCellHover) {
  const boardWrap = document.createElement('div');
  boardWrap.classList.add('board-wrap');
  const boardDiv = document.createElement('div');
  const boardTitle = heading(boardData?.title);
  boardDiv.classList.add('board');

  array.forEach((rowData, y) => {
    rowData.forEach((cellData, x) => {
      const currentCell = Cell(x, y, cellData, boardData, handleCellClick, handleCellHover);
      boardDiv.appendChild(currentCell);
    });
  });

  boardWrap.append(boardTitle, boardDiv);

  const getBoardDiv = () => boardWrap;

  return { getBoardDiv };
}

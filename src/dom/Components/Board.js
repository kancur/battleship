import Cell from './Cell';

export default function Board(boardData, handleCellClick, handleCellHover) {
  const boardWrapper = document.createElement('div');
  boardWrapper.classList.add('board-wrap');
  const board = document.createElement('div');
  board.classList.add('board');
  const boardHeading = document.createElement('h2');
  boardHeading.textContent = `${boardData.name}'s fleet`;

  const changeHeadingName = (name) => {
    boardHeading.textContent = `${name}'s fleet`;
  };

  const setName = (name) => changeHeadingName(name);

  const clean = () => {
    board.textContent = '';
  };

  const render = (array) => {
    array.forEach((rowData, y) => {
      rowData.forEach((cellData, x) => {
        const currentCell = Cell(x, y, cellData, boardData, handleCellClick, handleCellHover);
        board.appendChild(currentCell);
      });
    });
  };

  boardWrapper.append(boardHeading, board);

  const getBoardDiv = () => boardWrapper;

  return { getBoardDiv, render, clean, setName };
}

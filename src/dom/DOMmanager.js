import Board from './Board';

export default function DOMmanager(playerBoard, enemyBoard, handleCellClick) {
  const gamearea = document.querySelector('.gamearea');

  const cleanBoards = () => {
    gamearea.textContent = '';
  };

  const renderBoards = () => {
    cleanBoards();

    const playerBoardDOM = Board(playerBoard.getArray(), { title: 'Your task force', type: 'player' });
    const enemyBoardDOM = Board(enemyBoard.getArray(), { title: "Enemy's task force", type: 'enemy' }, handleCellClick);

    gamearea.appendChild(playerBoardDOM.getBoardDiv());
    gamearea.appendChild(enemyBoardDOM.getBoardDiv());
  };

  return { renderBoards };
}

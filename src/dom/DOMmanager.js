import Board from './Board';
import DestroyedShips from './DestroyedShips';

export default function DOMmanager(playerBoard, enemyBoard, handleCellClick) {
  const gamearea = document.querySelector('.gamearea');

  const cleanBoards = () => {
    gamearea.textContent = '';
  };

  const renderBoards = () => {
    cleanBoards();

    const playerBoardDOM = Board(playerBoard.getArray(), { title: 'Your task force', type: 'player' });
    const enemyBoardDOM = Board(enemyBoard.getArray(), { title: "Enemy's task force", type: 'enemy' }, handleCellClick);
    const playerDestroyedShips = DestroyedShips(enemyBoard.getSunkShips());

    gamearea.appendChild(playerBoardDOM.getBoardDiv());
    gamearea.appendChild(enemyBoardDOM.getBoardDiv());
  };

  return { renderBoards };
}

import Board from './Board';
import DestroyedShips from './DestroyedShips';

export default function DOMmanager(playerBoard, enemyBoard, handleCellClick) {
  const gamearea = document.querySelector('.gamearea');
  const playerDestroyedShips = new DestroyedShips();
  const enemyDestroyedShips = new DestroyedShips();


  const cleanBoards = () => {
    gamearea.textContent = '';
  };

  const renderBoards = () => {
    cleanBoards();

    const playerBoardDOM = Board(playerBoard.getArray(), { title: 'Your task force', type: 'player' });
    const enemyBoardDOM = Board(enemyBoard.getArray(), { title: "Enemy's task force", type: 'enemy' }, handleCellClick);

    gamearea.appendChild(playerDestroyedShips.getElement());
    gamearea.appendChild(playerBoardDOM.getBoardDiv());
    gamearea.appendChild(enemyBoardDOM.getBoardDiv());
    gamearea.appendChild(enemyDestroyedShips.getElement());
  };

  const appendDestroyedShip = (ship, player) => {
    console.log('appending destroyed ship', ship);
    // eslint-disable-next-line default-case
    switch (player) {
      case 'player':
        playerDestroyedShips.appendShip(ship);
        break;
      case 'enemy':
        enemyDestroyedShips.appendShip(ship);
        break;
    }
  };

  return { renderBoards, appendDestroyedShip };
}

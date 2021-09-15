import Board from './Components/Board';
import DestroyedShips from './Components/DestroyedShips';
import WinnerModal from './Components/WinnerAnouncement';

export default function DOMmanager(
  playerBoard,
  enemyBoard,
  handleEnemyCellClick,
  handlePlayerCellClick,
  handlePlayerCellHover,
) {
  const gamearea = document.querySelector('.gamearea');
  const playerDestroyedShips = new DestroyedShips();
  const enemyDestroyedShips = new DestroyedShips();
  let showingModal = false;

  const handleWin = async (name) => {
    if (!showingModal) {
      showingModal = true;
      await WinnerModal.announceWinner(name);
      showingModal = false;
    }
  };

  const cleanBoards = () => {
    gamearea.textContent = '';
  };

  const renderBoards = () => {
    cleanBoards();

    const playerBoardDOM = Board(playerBoard.getArray(), { title: 'Your task force', type: 'player' }, handlePlayerCellClick, handlePlayerCellHover);
    const enemyBoardDOM = Board(enemyBoard.getArray(), { title: "Enemy's task force", type: 'enemy' }, handleEnemyCellClick);

    gamearea.appendChild(playerDestroyedShips.getElement());
    gamearea.appendChild(playerBoardDOM.getBoardDiv());
    gamearea.appendChild(enemyBoardDOM.getBoardDiv());
    gamearea.appendChild(enemyDestroyedShips.getElement());
  };

  const appendDestroyedShip = (ship, player) => {
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

  return { renderBoards, appendDestroyedShip, handleWin };
}

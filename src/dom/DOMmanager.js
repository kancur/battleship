import Board from './Components/Board';
import DestroyedShips from './Components/DestroyedShips';
import EnterName from './Components/NameInput';
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
  let playerName = 'Player';

  const showWinModal = async (name) => {
    if (!showingModal) {
      showingModal = true;
      await WinnerModal.announceWinner(name);
      showingModal = false;
    }
  };

  const showNameModal = async () => {
    let name;
    if (!showingModal) {
      showingModal = true;
      name = await EnterName.show();
      showingModal = false;
    }
    return name || 'Player';
  };

  const cleanBoards = () => {
    gamearea.textContent = '';
  };

  const renderBoards = () => {
    cleanBoards();

    const playerBoardDOM = Board(playerBoard.getArray(), { title: `${playerName}'s task force`, type: 'player' }, handlePlayerCellClick, handlePlayerCellHover);
    const enemyBoardDOM = Board(enemyBoard.getArray(), { title: "Enemy's task force", type: 'enemy' }, handleEnemyCellClick);

    gamearea.appendChild(playerDestroyedShips.getElement());
    gamearea.appendChild(playerBoardDOM.getBoardDiv());
    gamearea.appendChild(enemyBoardDOM.getBoardDiv());
    gamearea.appendChild(enemyDestroyedShips.getElement());
  };

  const setPlayerName = (name) => {
    playerName = name;
    renderBoards();
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

  return {
    renderBoards,
    appendDestroyedShip,
    handleWin: showWinModal,
    showNameModal,
    setPlayerName,
  };
}

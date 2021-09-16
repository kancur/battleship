import Board from './Components/Board';
import DestroyedShips from './Components/DestroyedShips';
import EnterName from './Components/NameInput';
import ShipPickerBoard from './Components/ShipPickerBoard';
import WinnerModal from './Components/WinnerAnouncement';

export default function DOMmanager(
  playerBoard,
  enemyBoard,
  handleEnemyCellClick,
  handlePlayerCellClick,
  handlePlayerCellHover,
  rotateHandler,
  getCurrentShipID,
) {
  let showingModal = false;
  const gamearea = document.querySelector('.gamearea');
  gamearea.textContent = '';
  const playerDestroyedShipsDOM = new DestroyedShips();
  const enemyDestroyedShipsDOM = new DestroyedShips();
  const shipPickerBoard = ShipPickerBoard(rotateHandler, getCurrentShipID);
  const boardsWrapper = document.createElement('div');
  boardsWrapper.classList.add('boards-wrapper');
  const playerBoardDOM = Board(
    {
      name: 'Player',
      type: 'player',
    },
    handlePlayerCellClick,
    handlePlayerCellHover,
  );
  const enemyBoardDOM = Board(
    {
      name: 'Enemy',
      type: 'enemy',
    },
    handleEnemyCellClick,
  );

  const setPlayerName = (name) => playerBoardDOM.setName(name);

  const initialize = () => {
    const playerDestroyedShips = (playerDestroyedShipsDOM.getElement());
    const enemyDestroyedShips = (enemyDestroyedShipsDOM.getElement());

    boardsWrapper.appendChild(playerBoardDOM.getBoardDiv());
    boardsWrapper.appendChild(shipPickerBoard.getBoardWrap());
    gamearea.append(playerDestroyedShips, boardsWrapper, enemyDestroyedShips);
    shipPickerBoard.displayCurrentShip();
  };
  initialize();

  const switchToEnemyBoard = () => {
    const shipPicker = document.getElementById('ship-picker');
    shipPicker.remove();
    boardsWrapper.appendChild(enemyBoardDOM.getBoardDiv());
  };

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
    playerBoardDOM.clean();
    enemyBoardDOM.clean();
  };

  const renderBoards = () => {
    cleanBoards();
    playerBoardDOM.render(playerBoard.getArray());
    enemyBoardDOM.render(enemyBoard.getArray());

    shipPickerBoard.render();
  };

  const appendDestroyedShip = (ship, player) => {
    // eslint-disable-next-line default-case
    switch (player) {
      case 'player':
        playerDestroyedShipsDOM.appendShip(ship);
        break;
      case 'enemy':
        enemyDestroyedShipsDOM.appendShip(ship);
        break;
    }
  };

  return {
    renderBoards,
    appendDestroyedShip,
    handleWin: showWinModal,
    showNameModal,
    switchToEnemyBoard,
    setPlayerName,
  };
}

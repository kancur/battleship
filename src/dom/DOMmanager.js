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
) {
  const gamearea = document.querySelector('.gamearea');
  const playerDestroyedShips = new DestroyedShips();
  const enemyDestroyedShips = new DestroyedShips();
  const shipPickerBoard = ShipPickerBoard(rotateHandler);

  let showingModal = false;
  let playerName = 'Player';
  let boardsType = 'intro';

  const setBoardsType = (name) => { boardsType = name; };

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

    const playerBoardDOM = Board(
      playerBoard.getArray(),
      {
        title: `${playerName}'s task force`,
        type: 'player',
      },
      handlePlayerCellClick,
      handlePlayerCellHover,
    );

    const enemyBoardDOM = Board(
      enemyBoard.getArray(),
      {
        title: "Enemy's task force",
        type: 'enemy',
      },
      handleEnemyCellClick,
    );

    const boards = document.createElement('div');
    boards.classList.add('boards-wrapper');

    gamearea.appendChild(playerDestroyedShips.getElement());
    boards.appendChild(playerBoardDOM.getBoardDiv());

    if (boardsType === 'game') {
      boards.append(enemyBoardDOM.getBoardDiv());
    }
    if (boardsType === 'intro') {
      shipPickerBoard.setCurrentShipLength(5);
      shipPickerBoard.displayCurrentShip();
      shipPickerBoard.render();
      boards.appendChild(shipPickerBoard.getBoardWrap());
    }
    gamearea.appendChild(boards);
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
    setBoardsType,
  };
}

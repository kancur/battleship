import DOMmanager from './dom/DOMmanager';
import PlayerFactory from './modules/Player/PlayerFactory';

export default function game() {
  //const SHIP_LENGTHS = [5, 4, 3, 3, 2];
  const SHIP_LENGTHS = [5];
  const player = PlayerFactory('Peter');
  const enemy = PlayerFactory('Jerry');
  const playerBoardObj = player.getBoard();
  const enemyBoardObj = enemy.getBoard();
  const displayManager = DOMmanager(playerBoardObj, enemyBoardObj, handleCellClick);
  let listenForClicks = true;

  function checkWinner() {
    if (playerBoardObj.areAllShipsSunk() === true) {
      displayManager.handleWin(player.getName());
    }
    if (enemyBoardObj.areAllShipsSunk() === true) {
      displayManager.handleWin(enemy.getName());
    }
  }

  const oneGameTurn = async (data) => {
    try {
      if (listenForClicks) {
        const attackData = player.attack(data.x, data.y, enemy);
        if (attackData?.isSunk === true) {
          displayManager.appendDestroyedShip(attackData.isShip, 'enemy');
        }
        listenForClicks = false;
        displayManager.renderBoards();

        const enemyAttackData = await enemy.delayedRandomAttack(100, player);
        if (enemyAttackData?.isSunk === true) {
          displayManager.appendDestroyedShip(enemyAttackData.isShip, 'player');
        }
        displayManager.renderBoards();
        checkWinner();
        listenForClicks = true;
      }
    } catch (error) {
      // ignore error
    }
  };

  async function play() {
    await game();
    console.log('game finished');
  }

  function handleCellClick(data) {
    oneGameTurn(data);
  }

  playerBoardObj.autoPlaceShips(SHIP_LENGTHS);
  enemyBoardObj.autoPlaceShips(SHIP_LENGTHS);
  async function play() {
    await game();
    console.log('game finished')
  }
  displayManager.renderBoards();
}

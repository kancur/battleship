import DOMmanager from './dom/DOMmanager';
import PlayerFactory from './modules/Player/PlayerFactory';

export default function game() {
  const SHIP_LENGTHS = [5, 4, 3, 3, 2];
  const player = PlayerFactory('Peter');
  const enemy = PlayerFactory('Jerry');
  const playerBoardObj = player.getBoard();
  const enemyBoardObj = enemy.getBoard();
  let listenForClicks = true;

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
        listenForClicks = true;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCellClick = (data) => {
    oneGameTurn(data);
  };

  const displayManager = DOMmanager(playerBoardObj, enemyBoardObj, handleCellClick);

  playerBoardObj.autoPlaceShips(SHIP_LENGTHS);
  enemyBoardObj.autoPlaceShips(SHIP_LENGTHS);
  displayManager.renderBoards();
}

import DOMmanager from './dom/DOMmanager';
import PlayerFactory from './modules/Player/PlayerFactory';
import { SHIP_LENGTHS } from './assets/CONSTANTS';

export function game() {
  return new Promise((resolve) => {
    const player = PlayerFactory('Peter');
    const enemy = PlayerFactory('Computer');
    const playerBoard = player.getBoard();
    const enemyBoard = enemy.getBoard();
    const displayManager = DOMmanager(
      playerBoard,
      enemyBoard,
      handleEnemyCellClick,
      handlePlayerCellClick,
    );
    let listenForClicksEnemyBoard = false;
    let nextPlayer = 'player';
    let placingShips = true;
    let currentShipID = 0;

    async function checkWinner() {
      if (playerBoard.areAllShipsSunk() === true) {
        await displayManager.handleWin(enemy.getName());
        resolve();
      }
      if (enemyBoard.areAllShipsSunk() === true) {
        await displayManager.handleWin(player.getName());
        resolve();
      }
    }

    const playerTurn = async (data) => {
      const attackData = await player.attack(data.x, data.y, enemy);
      checkWinner();
      displayManager.renderBoards();
      if (attackData?.isSunk === true) {
        displayManager.appendDestroyedShip(attackData.isShip, 'enemy');
      }
      if (attackData?.isShip !== false) {
        return 'player';
      }
      return 'computer';
    };

    const computerTurn = async () => {
      const enemyAttackData = await enemy.delayedRandomAttack(100, player);
      checkWinner();
      displayManager.renderBoards();

      if (enemyAttackData?.isSunk === true) {
        displayManager.appendDestroyedShip(enemyAttackData.isShip, 'player');
      }

      if (enemyAttackData?.isShip !== false) {
        return 'computer';
      }
      return 'player';
    };

    const oneGameTurn = async (data) => {
      try {
        if (listenForClicksEnemyBoard && (nextPlayer === 'player')) {
          nextPlayer = await playerTurn(data);
        }
        if (nextPlayer === 'computer') {
          listenForClicksEnemyBoard = false;
          nextPlayer = await computerTurn();
          if (nextPlayer === 'computer') {
            oneGameTurn('');
          }
          listenForClicksEnemyBoard = true;
        }
      } catch (error) {
        // ignore error
      }
    };

    async function handlePlayerCellClick(data) {
      if (placingShips) {
        if (SHIP_LENGTHS[currentShipID]) {
          try {
            playerBoard.placeShip(Number(data.x), Number(data.y), false, SHIP_LENGTHS[currentShipID]);
            currentShipID += 1;
          } catch (error) {
            if (error.name === 'OutOfBoundsError' || error.name === 'OverlapError') {
              // do nothing, ignore those errors
            }
          }
        } else {
          placingShips = false;
          currentShipID = 0;
          listenForClicksEnemyBoard = true;
        }
        displayManager.renderBoards();
      }
    }

    function handleEnemyCellClick(data) {
      if (listenForClicksEnemyBoard) {
        oneGameTurn(data);
      }
    }

    enemyBoard.autoPlaceShips(SHIP_LENGTHS);
    displayManager.renderBoards();
  });
}

export default async function play() {
  while (true) {
    // endless gameplay
    await game()
  }
}

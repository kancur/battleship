import DOMmanager from './dom/DOMmanager';
import PlayerFactory from './modules/Player/PlayerFactory';

export function game() {
  return new Promise((resolve) => {
    // declare ships to play with (lengths)
    const SHIP_LENGTHS = [5, 4, 3, 3, 2];
    //const SHIP_LENGTHS = [2, 2, 2, 7, 9];
    const player = PlayerFactory('Peter');
    const enemy = PlayerFactory('Computer');
    const playerBoard = player.getBoard();
    const enemyBoard = enemy.getBoard();
    const displayManager = DOMmanager(playerBoard, enemyBoard, handleCellClick);
    let listenForClicks = true;
    let nextPlayer = 'player';

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
      // check winner after computer's move
      checkWinner();
      displayManager.renderBoards();

      // if the enemys hit destroyed a ship, display it
      if (enemyAttackData?.isSunk === true) {
        displayManager.appendDestroyedShip(enemyAttackData.isShip, 'player');
      }

      if (enemyAttackData?.isShip !== false) {
        // call the function again with "computer" as player parameter
        return 'computer';
      }
      return 'player';
    };

    const oneGameTurn = async (data) => {
      try {
        if (listenForClicks && (nextPlayer === 'player')) {
          nextPlayer = await playerTurn(data);
        }
        if (nextPlayer === 'computer') {
          listenForClicks = false;
          nextPlayer = await computerTurn();
          if (nextPlayer === 'computer') {
            oneGameTurn('');
          }
          listenForClicks = true;
        }
      } catch (error) {
        // ignore error
      }
    };

    function handleCellClick(data) {
      oneGameTurn(data);
    }

    playerBoard.autoPlaceShips(SHIP_LENGTHS);
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

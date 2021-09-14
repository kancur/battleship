import DOMmanager from './dom/DOMmanager';
import PlayerFactory from './modules/Player/PlayerFactory';

export function game() {
  return new Promise((resolve) => {
    // declare ships to play with (lengths)
    //const SHIP_LENGTHS = [5, 4, 3, 3, 2];
    const SHIP_LENGTHS = [1];
    const player = PlayerFactory('Peter');
    const enemy = PlayerFactory('Computer');
    const playerBoard = player.getBoard();
    const enemyBoard = enemy.getBoard();
    const displayManager = DOMmanager(playerBoard, enemyBoard, handleCellClick);
    let listenForClicks = true;

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

    const oneGameTurn = async (data, whoseTurnIsIt = 'player') => {
      try {
        if (whoseTurnIsIt === 'player' && listenForClicks) {
          const attackData = await player.attack(data.x, data.y, enemy);

          // check winner after users move;
          checkWinner();

          displayManager.renderBoards();

          // if the last hit destroyed a ship, display it
          if (attackData?.isSunk === true) {
            displayManager.appendDestroyedShip(attackData.isShip, 'enemy');
          }

          // let user do another action if he just hit a ship
          if (attackData?.isShip !== false) {
            // function can return here and wait for another user click on the board
            return;
          }
        }
        // if function haven't ended prematurely
        // stop listening for clicks while computer plays
        listenForClicks = false;
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
          oneGameTurn('', 'computer');
        }

        listenForClicks = true;
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

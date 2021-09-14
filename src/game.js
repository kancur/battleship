import DOMmanager from './dom/DOMmanager';
import PlayerFactory from './modules/Player/PlayerFactory';

export default function game() {
  const SHIP_LENGTHS = [5, 4, 3, 3, 2];
  const player = PlayerFactory('Peter');
  const enemy = PlayerFactory('Jerry');
  const playerBoardObj = player.getBoard();
  const enemyBoardObj = enemy.getBoard();


  const handleCellClick = (data) => {
    try {
      player.attack(data.x, data.y, enemy);
    } catch (error) {
      console.log(error.message);
      // silently discard the cannot hit the same place twice error
      /*
      if (error.message !== 'Cannot hit the same place twice') {
        throw error;
      }
      */
    }

    const timer = ms => new Promise(res => setTimeout(res, ms));

    async function load() { 
      for (let i = 0; i < 20; i++) {
        enemy.attackRandomPosition(player);
        displayManager.renderBoards();
        await timer(50); 
      }
    }

    load();
  };

  const displayManager = DOMmanager(playerBoardObj, enemyBoardObj, handleCellClick);

  playerBoardObj.autoPlaceShips(SHIP_LENGTHS);
  enemyBoardObj.autoPlaceShips(SHIP_LENGTHS);
  displayManager.renderBoards();
}

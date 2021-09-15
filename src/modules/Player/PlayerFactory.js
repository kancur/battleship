import GameBoardFactory from '../Gameboard/GameboardFactory';

export default function PlayerFactory(name) {
  const board = GameBoardFactory();
  const arrayOfHits = [];

  const getName = () => name;
  const getBoard = () => board;

  const attack = (x, y, enemyPlayer) => {
    const enemyBoard = enemyPlayer.getBoard();
    arrayOfHits.push({ x, y });
    return enemyBoard.receiveAttack(x, y);
  };

  /**
  * Returns an object with x and y coords that have not been hit before.
  * @param {object} coords Object with x and y keys (coordinates).
  */
  const wasAlreadyHit = (coords) => {
    const result = arrayOfHits.some((el) => {
      if (el.x === coords.x && el.y === coords.y) {
        return true;
      }
      return false;
    });
    return result;
  };

  /*
  const smartAttack = (enemyPlayer) => {
    if (arrayOfHits.length === 1) {
      const { x, y } = (arrayOfHits[arrayOfHits.length - 1]);

      wasAlreadyHit({ x, y });
      attack(x + 1, y, enemyPlayer);
    }
  };
  */

  const attackRandomPosition = (enemyPlayer) => {
    if (arrayOfHits >= 100) {
      return;
    }
    const randomSingleCoord = () => Math.floor(Math.random() * 10);

    const randomCoords = () => ({
      x: randomSingleCoord(),
      y: randomSingleCoord(),
    });

    /**
   * Returns an object with x and y coords that have not been hit before.
   */
    const getUniqueCoords = () => {
      let coords = randomCoords();
      if ((wasAlreadyHit(coords))) {
        coords = getUniqueCoords();
      }
      return coords;
    };

    const uniqueCoords = getUniqueCoords();

    const attackData = attack(uniqueCoords.x, uniqueCoords.y, enemyPlayer);
    // eslint-disable-next-line consistent-return
    return attackData;
  };

  const delayedRandomAttack = async (delay, player) => {
    const timer = (ms) => new Promise((res) => setTimeout(res, ms));
    await timer(delay);
    return attackRandomPosition(player);
  };
  return ({
    getName, getBoard, attack, attackRandomPosition, delayedRandomAttack,
  });
}

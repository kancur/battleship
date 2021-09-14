import GameBoardFactory from '../Gameboard/GameboardFactory';

export default function PlayerFactory(name) {
  const board = GameBoardFactory();
  const arrayOfHits = [];

  const getName = () => name;
  const getBoard = () => board;

  const attack = (x, y, enemyPlayer) => {
    const enemyBoard = enemyPlayer.getBoard();
    return enemyBoard.receiveAttack(x, y);
  };

  const attackRandomPosition = (enemyPlayer) => {
    if (arrayOfHits >= 100) {
      return;
    }
    const randomSingleCoord = () => Math.floor(Math.random() * 10);

    const randomCoords = () => ({
      x: randomSingleCoord(),
      y: randomSingleCoord(),
    });

    const wasAlreadyHit = (coords) => {
      const result = arrayOfHits.some((el) => {
        if (el.x === coords.x && el.y === coords.y) {
          return true;
        }
        return false;
      });
      return result;
    };

    const getUniqueCoords = () => {
      let coords = randomCoords();
      if ((wasAlreadyHit(coords))) {
        coords = getUniqueCoords();
      }

      return coords;
    };

    const uniqueCoords = getUniqueCoords();
    arrayOfHits.push(uniqueCoords);

    return attack(uniqueCoords.x, uniqueCoords.y, enemyPlayer);
  };

  return ({
    getName, getBoard, attack, attackRandomPosition,
  });
}

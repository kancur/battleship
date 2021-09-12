import GameBoardFactory from '../Gameboard/GameboardFactory';

export default function PlayerFactory(name) {
  const board = GameBoardFactory();
  const arrayOfHitCoords = [];

  const getName = () => name;
  const getBoard = () => board;

  const attack = (x, y, enemyPlayer) => {
    const enemyBoard = enemyPlayer.getBoard();
    return enemyBoard.receiveAttack(x, y);
  };

  const attackAI = (enemyPlayer) => {
    let randomCoords = {};

    while (!(arrayOfHitCoords.includes(randomCoords))) {
      randomCoords = {
        x: Math.floor(Math.random() * 10),
        y: Math.floor(Math.random() * 10),
      };
      arrayOfHitCoords.push(randomCoords);
    }
    return attack(randomCoords.x, randomCoords.y, enemyPlayer);
  };

  return ({
    getName, getBoard, attack, attackAI,
  });
}

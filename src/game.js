const { default: PlayerFactory } = require('./modules/Player/PlayerFactory');

function game() {
  const player1 = PlayerFactory('Peter');
  const player2 = PlayerFactory('Jerry');

  const player1board = player1.getBoard();
  const player2board = player2.getBoard();

  player1board.placeShip(0, 0, false, 4);
  player2board.placeShip(3, 3, true, 3);
}
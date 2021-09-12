import boardCard from './dom/board';
import PlayerFactory from './modules/Player/PlayerFactory';

export default function game() {
  const gamearea = document.querySelector('.gamearea');
  const player = PlayerFactory('Peter');
  const enemy = PlayerFactory('Jerry');

  const player1board = player.getBoard();
  const player2board = enemy.getBoard();

  player1board.placeShip(0, 0, false, 4);
  player1board.placeShip(2, 4, true, 2);
  player2board.placeShip(3, 3, true, 3);
  enemy.attackAI(player);

  const handleCellClick = (data) => {
    player.attack(data.x, data.y, enemy);
  };

  const playerBoardDiv = boardCard(player1board.getArray(), { title: 'Your task force', type: 'player' }, handleCellClick);
  const enemyBoardDiv = boardCard(player2board.getArray(), { title: "Enemy's task force", type: 'enemy' }, handleCellClick);

  gamearea.appendChild(playerBoardDiv);
  gamearea.appendChild(enemyBoardDiv);
}

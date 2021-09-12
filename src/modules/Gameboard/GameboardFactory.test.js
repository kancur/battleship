import GameBoardFactory from './GameboardFactory';

describe('gameboard factory methods', () => {
  let gameBoard;
  beforeEach(() => {
    gameBoard = GameBoardFactory();
  });

  it('Place new ship', () => {
    expect(gameBoard.placeShip(0, 0, false, 4)).toBe(true);
  });
});

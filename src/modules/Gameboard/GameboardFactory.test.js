import GameBoardFactory from './GameboardFactory';

describe('gameboard factory methods', () => {
  let gameBoard;
  beforeEach(() => {
    gameBoard = GameBoardFactory();
  });

  it('Place new ship', () => {
    expect(gameBoard.placeShip(0, 0, false, 4)).toBe(true);
  });

  it("Place new ship so it won't fit on x axis", () => {
    expect(() => gameBoard.placeShip(8, 0, false, 4)).toThrow("Ship doesn't fit the gameboard");
  });

  it("Place new ship so it won't fit on y axis", () => {
    expect(() => gameBoard.placeShip(0, 7, true, 4)).toThrow("Ship doesn't fit the gameboard");
  });

  it('Place new ship so it barely fits', () => {
    expect(gameBoard.placeShip(0, 6, true, 4)).toBe(true);
  });
});

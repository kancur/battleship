import GameBoardFactory from './GameboardFactory';

describe('gameboard factory methods', () => {
  let gameBoard;
  beforeEach(() => {
    gameBoard = GameBoardFactory();
  });

  it('Place new ship', () => {
    expect(gameBoard.placeShip(0, 0, false, 4)).toBeInstanceOf(Object);
  });

  it("Place new ship so it won't fit on x axis", () => {
    expect(() => gameBoard.placeShip(8, 0, false, 4)).toThrow("Ship doesn't fit the gameboard");
  });

  it("Place new ship so it won't fit on y axis", () => {
    expect(() => gameBoard.placeShip(0, 7, true, 4)).toThrow("Ship doesn't fit the gameboard");
  });

  it('Place new ship so it barely fits', () => {
    expect(gameBoard.placeShip(0, 6, true, 4)).toBeInstanceOf(Object);
  });

  it('Receive attack on an empty cell', () => {
    expect(gameBoard.receiveAttack(0, 0)).toMatchObject({ isShip: false, isHit: true });
  });

  it('Receive attack on a ship', () => {
    const myShip = gameBoard.placeShip(3, 3, true, 4);
    expect(gameBoard.receiveAttack(3, 5)).toMatchObject({ isShip: myShip, isHit: true });
  });

  it('Throw error if same cell attacked twice', () => {
    gameBoard.receiveAttack(3, 5);
    expect(() => gameBoard.receiveAttack(3, 5)).toThrow('Cannot hit the same place twice');
  });

  it('Correctly return that not all ships are sunk', () => {
    gameBoard.placeShip(0, 0, false, 2);
    expect(gameBoard.areAllShipsSunk()).toBe(false);
  });

  it('Correctly return that all ships are sunk', () => {
    gameBoard.placeShip(0, 0, false, 2);
    gameBoard.receiveAttack(0, 0);
    gameBoard.receiveAttack(1, 0);
    expect(gameBoard.areAllShipsSunk()).toBe(true);
  });
});

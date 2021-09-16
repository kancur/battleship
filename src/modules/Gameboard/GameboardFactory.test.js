import { EDGE_SIZE } from '../../CONSTANTS';
import { OutOfBoundsError } from './CustomErrors';
import GameBoardFactory from './GameboardFactory';

describe('gameboard factory methods', () => {
  let gameBoard;
  beforeEach(() => {
    gameBoard = GameBoardFactory();
  });

  test('Place new ship', () => {
    expect(gameBoard.placeShip(0, 0, false, 4)).toBeInstanceOf(Object);
  });

  it("Place new ship so it won't fit on x axis", () => {
    expect(() => gameBoard.placeShip(8, 0, false, 4)).toThrow(OutOfBoundsError);
  });

  it("Place new ship so it won't fit on y axis", () => {
    expect(() => gameBoard.placeShip(0, 7, true, 4)).toThrow(OutOfBoundsError);
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
    expect(() => gameBoard.receiveAttack(3, 5)).toThrow();
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

  it('Return a list of sunk ships', () => {
    gameBoard.placeShip(0, 0, false, 2);
    gameBoard.receiveAttack(0, 0);
    gameBoard.receiveAttack(1, 0);
    expect(gameBoard.getSunkShips()).toHaveLength(1);
  });

  it('Returns array of correct length', () => {
    expect(gameBoard.getArray()).toBeInstanceOf(Array);
    expect(gameBoard.getArray()).toHaveLength(EDGE_SIZE);
  });

  it('Automatically places ships on random places', () => {
    expect(gameBoard.autoPlaceShips([5, 5])).toBeTruthy();
    expect(() => gameBoard.autoPlaceShips([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 2])).toThrow("Couldn't autoplace your ships (max retries exceeded)");
  });
});

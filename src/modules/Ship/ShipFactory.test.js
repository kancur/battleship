import ShipFactory from './ShipFactory';

describe('ship methods', () => {
  let shortShip;
  let longShip;
  beforeEach(() => {
    shortShip = ShipFactory(2);
    longShip = ShipFactory(4);
  });
  it('Check if a new ship is healthy', () => {
    expect(shortShip.isSunk()).toBe(false);
  });

  it('Check if a ship can be hit', () => {
    expect(shortShip.hit(0)).toBe(true);
  });

  it('Check if invalid hit returns false', () => {
    expect(shortShip.hit(3)).toBe(false);
  });

  it('Destroyed ship should return true for isSunk method', () => {
    shortShip.hit(0);
    shortShip.hit(1);
    expect(shortShip.isSunk()).toBe(true);
  });

  it('Puts hits in correct places', () => {
    longShip.hit(2);
    expect(longShip.getHits()[2]).toBe(0);
  });
});

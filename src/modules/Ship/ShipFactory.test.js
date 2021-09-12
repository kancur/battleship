import ShipFactory from './ShipFactory';

describe('ship methods', () => {
  let shortShip;
  beforeEach(() => {
    shortShip = ShipFactory(2);
  });
  it('Check if a new ship is healthy', () => {
    expect(shortShip.isSunk()).toBe(false);
  });

  it('Check if a ship can be hit', () => {
    expect(shortShip.hit()).toBe(true);
  });

  it('Destroyed ship should return true for isSunk method', () => {
    shortShip.hit();
    shortShip.hit();
    expect(shortShip.isSunk()).toBe(true);
  });
});

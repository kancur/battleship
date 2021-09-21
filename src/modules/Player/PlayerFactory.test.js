import PlayerFactory from './PlayerFactory';

describe('PlayerFactory', () => {
  let player1;
  let player2;
  beforeEach(() => {
    player1 = PlayerFactory('dave');
    player2 = PlayerFactory('peter');
  });
  it('returns name', () => {
    expect(player1.getName()).toBe('dave');
  });

  it("can attack enemy's cell", () => {
    expect(player1.attack(0, 0, player2)).toEqual({
      isShip: false,
      isHit: true,
    });
  });

  it('can do an AI attack on random enemy cell', () => {
    expect(player1.attackRandomPosition(player2)).toEqual({
      isShip: false,
      isHit: true,
    });
  });
});

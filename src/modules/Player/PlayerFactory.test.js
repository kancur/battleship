import PlayerFactory from './PlayerFactory';

describe('PlayerFactory methods', () => {
  let player1;
  let player2;
  beforeEach(() => {
    player1 = PlayerFactory('dave');
    player2 = PlayerFactory('peter');
  });
  it('Returns name', () => {
    expect(player1.getName()).toBe('dave');
  });

  it("Can attack enemy's cell", () => {
    expect(player1.attack(0, 0, player2)).toEqual({
      isShip: false,
      isHit: true,
    });
  });

  it('Can do an AI attack on random enemy cell', () => {
    expect(player1.attackAI(player2)).toEqual({
      isShip: false,
      isHit: true,
    });
  });
});

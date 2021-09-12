import Array2D from '../Helpers/Array2d';
import ShipFactory from '../Ship/ShipFactory';

export default function GameBoardFactory() {
  const EDGE_SIZE = 10;
  const matrice = Array2D(
    EDGE_SIZE,
    {
      isShip: false,
      isHit: false,
    },
  );

  const placeShip = (x, y, isVertical, length) => {
    const ship = ShipFactory(length);

    for (let i = 0; i < length; i += 1) {
      let yAxis;
      let xAxis;

      // calculate correct x and y values based on if the ship is vertical or horizontal
      if (isVertical) {
        yAxis = y + i;
        xAxis = x;
      } else {
        yAxis = y;
        xAxis = x + i;
      }

      if (yAxis >= EDGE_SIZE || xAxis >= EDGE_SIZE) {
        throw new Error("Ship doesn't fit the gameboard");
      }

      const currentDataOnPosition = matrice.getSingleValue(xAxis, yAxis);
      if (currentDataOnPosition.isShip !== false) {
        throw new Error('Ship overlaps already existing ship');
      }

      matrice.setSingleValue(
        xAxis,
        yAxis,
        {
          isShip: ship,
          isHit: false,
        },
      );
    }
    return true;
  };

  const receiveAttack = (x, y) => {
    const data = matrice.getSingleValue(x, y);

    // throw error if the cell was already hit
    if (data.isHit === true) {
      throw new Error('Cannot hit the same place twice');
    }

    // register a ship hit if there's a ship on the coords and is not hit
    if (data.isShip instanceof ShipFactory && data.isHit === false) {
      data.isShip.hit();
      matrice.setSingleValue(
        x,
        y,
        {
          isShip: data.isShip,
          isHit: true,
        },
      );
    }

    // register a missed hit
    if (data.isShip === false && data.isHit === false) {
      matrice.setSingleValue(
        x,
        y,
        {
          isShip: false,
          isHit: true,
        },
      );
    }
  };

  return { placeShip, receiveAttack };
}

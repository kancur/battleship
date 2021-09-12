import Array2D from "../Helpers/Array2d";
import ShipFactory from "../Ship/ShipFactory";

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

    const checkBounds = () => {
      if 
    }


    const workingAxis = isVertical ? y : x;

    for (let i = workingAxis; i < (workingAxis + length); i += 1) {
      matrice.setSingleValue(isVertical ? x : i, isVertical ? i : y, {
        isShip: ship,
        isHit: false,
      });
    }
    return true;
  };
  return { placeShip };
}

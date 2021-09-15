import Array2D from '../Helpers/Array2d';
import ShipFactory from '../Ship/ShipFactory';
import { OutOfBoundsError, OverlapError } from './CustomErrors';

export default function GameBoardFactory() {
  const EDGE_SIZE = 10;
  const myShips = [];
  const matrice = Array2D(
    EDGE_SIZE,
    {
      isShip: false,
      isHit: false,
      isPreview: false,
    },
  );

  const prepareShipCoords = (x, y, isVertical, length) => {
    const preparedCoords = [];
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
        throw new OutOfBoundsError("Ship doesn't fit the gameboard");
      }

      const currentDataOnPosition = matrice.getSingleValue(xAxis, yAxis);
      if (currentDataOnPosition.isShip !== false) {
        throw new OverlapError('Ship overlaps already existing ship');
      }

      preparedCoords.push({ xAxis, yAxis });
    }
    return preparedCoords;
  };

  let previousPreparedCoords = [];
  const cleanPreviousPreview = async () => {
    await previousPreparedCoords.forEach((coords) => {
      matrice.writeSingleCellObjectValue(
        coords.xAxis,
        coords.yAxis,
        'isPreview',
        false,
      );
    });
  };

  const previewShipPlacement = (x, y, isVertical, length) => {
    cleanPreviousPreview();
    const preparedCoords = prepareShipCoords(x, y, isVertical, length);
    previousPreparedCoords = preparedCoords;

    preparedCoords.forEach((coords) => {
      matrice.writeSingleCellObjectValue(
        coords.xAxis,
        coords.yAxis,
        'isPreview',
        true,
      );
    });
  };

  const placeShip = (x, y, isVertical, length) => {
    const ship = ShipFactory(length);
    const preparedCoords = prepareShipCoords(x, y, isVertical, length);

    preparedCoords.forEach((coords) => {
      matrice.setSingleCellObject(
        coords.xAxis,
        coords.yAxis,
        {
          isShip: ship,
          isHit: false,
        },
      );
    });

    myShips.push(ship);
    return ship;
  };

  const autoPlaceShips = (arrayOfLengths) => {
    arrayOfLengths.forEach((shipLength) => {
      const calculateCoordsAndPlace = () => {
        let x;
        let y;
        const isVertical = Math.random() < 0.5;
        if (isVertical) {
          y = Math.floor(Math.random() * (EDGE_SIZE - shipLength));
          x = Math.floor(Math.random() * EDGE_SIZE);
        } else {
          x = Math.floor(Math.random() * (EDGE_SIZE - shipLength));
          y = Math.floor(Math.random() * EDGE_SIZE);
        }

        try {
          placeShip(x, y, isVertical, shipLength);
        } catch (error) {
          return 'error';
        }
      };

      let status = '';
      do {
        status = calculateCoordsAndPlace();
      } while (status === 'error');
    });
  };

  const receiveAttack = (x, y) => {
    const cell = matrice.getSingleValue(x, y);
    let data = {};

    // throw error if the cell was already hit
    if (cell.isHit === true) {
      throw new Error(`Cannot hit the same place twice (${x}, ${y})`);
    }

    // register a ship hit if there's a ship on the coords and is not hit
    if (cell.isShip !== false && cell.isHit === false) {
      cell.isShip.hit();
      data = {
        isShip: cell.isShip,
        isHit: true,
        isSunk: cell.isShip.isSunk(),
      };
    }

    // register a missed hit
    if (cell.isShip === false && cell.isHit === false) {
      data = {
        isShip: false,
        isHit: true,
      };
    }

    matrice.setSingleCellObject(x, y, data);
    return data;
  };

  const areAllShipsSunk = () => myShips.every((ship) => ship.isSunk());

  const getSunkShips = () => myShips.filter((ship) => ship.isSunk());

  const getArray = () => matrice.getArray();

  return {
    placeShip,
    receiveAttack,
    areAllShipsSunk,
    getArray,
    autoPlaceShips,
    getSunkShips,
    previewShipPlacement,
    cleanPreviousPreview,
  };
}

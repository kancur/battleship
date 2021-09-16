import 'regenerator-runtime/runtime';
import Array2D from '../Helpers/Array2d';
import ShipFactory from '../Ship/ShipFactory';
import { EDGE_SIZE } from '../../CONSTANTS';
import { OutOfBoundsError, OverlapError } from './CustomErrors';

export default function GameBoardFactory() {
  const placedShips = [];
  const matrice = Array2D(
    EDGE_SIZE,
    {
      isShip: false,
      isHit: false,
      isPreview: false,
    },
  );
  let previousPreviewedCoords = [];

  /**
  * Prepares ship coordinates by checking for bounds and intersects
  * Throws error on bound or intersect violation
  * @return {Array} Array of objects containing (x,y) coordinates.
  */
  const prepareShipCoordinates = (x, y, isVertical, length) => {
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

      const currentDataOnCoordinates = matrice.getSingleValue(xAxis, yAxis);

      if (currentDataOnCoordinates.isShip !== false) {
        throw new OverlapError('Ship overlaps already existing ship');
      }

      preparedCoords.push({ xAxis, yAxis });
    }
    return preparedCoords;
  };

  const cleanPreviousShipPreview = async () => {
    await previousPreviewedCoords.forEach((coords) => {
      matrice.writeSingleCellKeyPair(
        coords.xAxis,
        coords.yAxis,
        'isPreview',
        false,
      );
    });
  };

  const previewShipPlacement = (x, y, isVertical, length) => {
    cleanPreviousShipPreview();
    const preparedCoords = prepareShipCoordinates(x, y, isVertical, length);
    previousPreviewedCoords = preparedCoords;

    preparedCoords.forEach((coords) => {
      matrice.writeSingleCellKeyPair(
        coords.xAxis,
        coords.yAxis,
        'isPreview',
        true,
      );
    });
  };

  const placeShip = (x, y, isVertical, length) => {
    const ship = ShipFactory(length);
    const preparedCoords = prepareShipCoordinates(x, y, isVertical, length);

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

    placedShips.push(ship);
    return ship;
  };

  const getRandomCoords = (isVertical, shipLength) => {
    let x;
    let y;
    if (isVertical) {
      y = Math.floor(Math.random() * (EDGE_SIZE - shipLength));
      x = Math.floor(Math.random() * EDGE_SIZE);
    } else {
      x = Math.floor(Math.random() * (EDGE_SIZE - shipLength));
      y = Math.floor(Math.random() * EDGE_SIZE);
    }
    return { x, y };
  };

  const autoPlaceShips = (shipLengths) => {
    shipLengths.forEach((shipLength) => {
      const prepareCoordsAndPlace = () => {
        const isVertical = Math.random() < 0.5;
        const { x, y } = getRandomCoords(isVertical, shipLength);
        try {
          placeShip(x, y, isVertical, shipLength);
        } catch (error) {
          return 'error';
        }
      };

      let status;
      let maxRetries = 100;
      do {
        status = prepareCoordsAndPlace();
        maxRetries -= 1;
        if (maxRetries <= 0) {
          throw new Error("Couldn't autoplace your ships (max retries exceeded)");
        }
      } while (status === 'error');
    });
    return true;
  };

  const receiveAttack = (x, y) => {
    const cell = matrice.getSingleValue(x, y);
    let data = {};

    // throw error if the cell was already hit
    if (cell.isHit === true) {
      throw new Error('Cannot hit the same place twice');
    }

    // register a ship hit if there's a ship on the coords and is not hit
    if (cell.isShip !== false && cell.isHit === false) {
      cell.isShip.hit();
      data = {
        isShip: cell.isShip,
        isHit: true,
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

  const areAllShipsSunk = () => placedShips.every((ship) => ship.isSunk());

  const getSunkShips = () => placedShips.filter((ship) => ship.isSunk());

  const getArray = () => matrice.getArray();

  return {
    placeShip,
    receiveAttack,
    areAllShipsSunk,
    getArray,
    autoPlaceShips,
    getSunkShips,
    previewShipPlacement,
    cleanPreviousShipPreview,
  };
}

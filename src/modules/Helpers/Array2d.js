export default function Array2D(size, defaultValue) {
  const matrice = [];

  const initialize = () => {
    for (let i = 0; i < size; i += 1) {
      matrice.push(new Array(size).fill(defaultValue));
    }
  };

  initialize();

  const setSingleCellObject = (x, y, state) => {
    if (x < size && y < size) {
      matrice[y][x] = state;
      return true;
    }
    throw new Error('Coordinates out of bounds');
  };

  const getArray = () => matrice;

  const writeSingleCellObjectValue = (x, y, key, value) => {
    if (x < size && y < size) {
      const obj = matrice[y][x];
      const newObj = { ...obj };
      newObj[key] = value;
      matrice[y][x] = newObj;
    }
  };

  const getSingleValue = (x, y) => {
    if (x < size && y < size) {
      return matrice[y][x];
    }
    throw new Error('Coordinates out of bounds');
  };

  return {
    setSingleCellObject,
    getArray,
    getSingleValue,
    writeSingleCellKeyPair: writeSingleCellObjectValue,
  };
}

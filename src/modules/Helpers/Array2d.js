export default function Array2D(size, defaultValue) {
  const matrice = [];

  for (let i = 0; i < size; i += 1) {
    matrice.push(new Array(size).fill(defaultValue));
  }

  const setSingleValue = (x, y, state) => {
    if (x < size && y < size) {
      matrice[y][x] = state;
      return true;
    }
    throw new Error('Coordinates out of bounds');
  };

  const getArray = () => matrice;

  const getSingleValue = (x, y) => {
    if (x < size && y < size) {
      return matrice[y][x];
    }
    throw new Error('Coordinates out of bounds');
  };

  return { setSingleValue, getArray, getSingleValue };
}

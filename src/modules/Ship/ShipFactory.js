export default function ShipFactory(length) {
  let numberOfHits = 0;

  const hit = () => {
    numberOfHits += 1;
    return true;
  };

  const isSunk = () => (numberOfHits === length);

  return { hit, isSunk };
}

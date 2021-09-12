export default function ShipFactory(length) {
  // 1 --> healthy ship part
  // 0 --> hit ship part
  let numberOfHits = 0

  const hit = (id) => {
    if (id >= 0 && id < length) {
      ship[id] = 0;
      return true;
    }
    return false;
  };

  const getHits = () => ship;

  const isSunk = () => (ship.every((part) => part === 0));

  return { hit, isSunk, getHits };
}

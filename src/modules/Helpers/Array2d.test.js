import array2D from './Array2d';

describe('ship methods', () => {
  let matrice;
  beforeEach(() => {
    matrice = array2D(10, null);
  });
  it('Check if array has null at 0, 0', () => {
    expect(matrice.getSingleValue(0, 0)).toBe(null);
  });
  it('Sets value and returns true', () => {
    expect(matrice.setSingleCellValue(3, 6, 'heyThere')).toBe(true);
  });
  it('The setted value is set at correct coords', () => {
    matrice.setSingleCellValue(3, 6, 'heyThere');
    expect(matrice.getSingleValue(3, 6)).toBe('heyThere');
  });
});

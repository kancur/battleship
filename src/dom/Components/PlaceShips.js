/* eslint-disable class-methods-use-this */
import { SHIP_LENGTHS } from '../../assets/CONSTANTS';
import GameBoardFactory from '../../modules/Gameboard/GameboardFactory';
import Array2D from '../../modules/Helpers/Array2d';
import Board from './Board';
import Modal from './Modal';

class PlaceShips {
  constructor() {
    this.matrice = Array2D(10, null);
    this.modal = Modal;
    this.board = GameBoardFactory();
    this.placingShipID = 0;
  }
  
  displayShipFuturePlacement(x, y) {
    this.matrice.setSingleValue(x, y, true);
  }
  
  async placeShip(x, y) {
    this.show();
    
    const currentShipLength = SHIP_LENGTHS[this.placingShipID];
    this.board.placeShip(x, y, false, currentShipLength);
    /*
    SHIP_LENGTHS.forEach(async (shipLength) => {
      await this.handleCellClick();
      console.log('waited');
    });
    */
  }
  
  handleCellHover(coords) {
  }
  
  handleCellClick(coords) {
    console.log('cell clicked', coords);
  }
  
  async show(name) {
    this.boardDOM = Board(this.board.getArray(), { title: 'Place your ships' }, this.handleCellClick, this.handleCellHover);
    const wrapper = document.createElement('div');
    const board = this.boardDOM.getBoardDiv();
    const button = document.createElement('button');
    button.textContent = 'Rotate ship';

    wrapper.append(board, button);
    await this.modal.show(wrapper);
  }
}

export default new PlaceShips();

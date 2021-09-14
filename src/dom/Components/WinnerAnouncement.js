import Modal from './Modal';

class WinnerAnouncement {
  constructor() {
    this.modal = new Modal();
  }

  async announceWinner(name) {
    const announcement = document.createElement('h2');
    announcement.textContent = `${name} has won the game!`;
    await this.modal.show(announcement);
  }
}

const WinnerModal = new WinnerAnouncement();
export default WinnerModal;

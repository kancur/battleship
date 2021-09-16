import closeIcon from './CloseIcon';
import './styles/Modal.css';

class Modal {
  constructor() {
    this.modal = document.querySelector('.modal');
    this.content = document.createElement('div');

    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('modal-box');
    this.wrapper.addEventListener('click', (e) => e.stopPropagation());

    this.wrapper.appendChild(this.content);

    this.modal.appendChild(this.wrapper);
  }

  addCloseIcon() {
    this.closeIcon = document.createElement('div');
    this.closeIcon.classList.add('modal-close');
    this.closeIcon.innerHTML += closeIcon;
    this.wrapper.appendChild(this.closeIcon);
  }

  showOwnPromise(element) {
    this.content.appendChild(element);
    this.modal.classList.add('visible');
  }

  show(element) {
    return new Promise((resolve) => {
      this.addCloseIcon();
      this.content.appendChild(element);
      this.modal.classList.add('visible');
      this.closeIcon.addEventListener('click', () => {
        resolve();
        this.cleanModal();
      });
    });
  }

  cleanModal() {
    this.modal.classList.remove('visible');
    this.content.innerText = '';
  }
}

export default new Modal();

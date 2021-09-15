import Modal from './Modal';

class EnterName {
  constructor() {
    this.modal = Modal;
  }

  async show() {
    return new Promise((resolve) => {
      let name;
      const wrapper = document.createElement('div');
      const title = document.createElement('h2');
      title.textContent = 'Enter your name';

      const handleSubmit = (event) => {
        event.preventDefault();
        this.modal.cleanModal();
        resolve(name);
      };

      const input = document.createElement('input');
      input.placeholder = 'Your name';
      input.addEventListener('input', (event) => {
        name = event.target.value;
      });
      input.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
          handleSubmit(event);
        }
      });

      const button = document.createElement('button');
      button.textContent = 'Submit';
      button.addEventListener('click', (event) => {
        handleSubmit(event);
      });

      wrapper.append(title, input, button);
      this.modal.showOwnPromise(wrapper);
    });
  }
}

export default new EnterName();

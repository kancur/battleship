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
      const input = document.createElement('input');
      input.setAttribute('autofocus', '');
      const label = document.createElement('span');
      label.textContent = 'Please use a name between 2 and 15 characters';

      const handleSubmit = (event) => {
        event.preventDefault();
        if (input.checkValidity()) {
          label.style.display = 'none';
          input.classList.remove('invalid-input');
          this.modal.cleanModal();
          resolve(name);
        } else {
          input.classList.add('invalid-input');
          label.style.display = 'block';
        }
      };

      input.placeholder = 'Your name';
      input.type = 'text';
      input.maxLength = 15;
      input.minLength = 2;
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

      const inputButtonWrapper = document.createElement('div');
      inputButtonWrapper.append(input, button);
      wrapper.append(title, inputButtonWrapper, label);
      this.modal.showOwnPromise(wrapper);
    });
  }
}

export default new EnterName();

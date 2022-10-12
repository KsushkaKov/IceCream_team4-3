(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-buy-open]'),
      openModalBtn2: document.querySelector('[data-modal-buy-open2]'),
      closeModalBtn: document.querySelector('[data-modal-buy-close]'),
      modal: document.querySelector('[data-modal-buy]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.openModalBtn2.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('backdrop-hero--is-hidden');
    }
  })();
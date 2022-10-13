(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-about]"),
    closeModalBtn: document.querySelector("[data-modal-close-about]"),
    modal: document.querySelector("[data-modal-about]"),
  };
 
  const vid = document.getElementById('vid');

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-about");
    iframeSrc = vid.src;
    vid.src = iframeSrc;
  }
})();
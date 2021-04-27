(function() {
  const openBtns = document.querySelectorAll('.js-modal-open');
  const closeBtns = document.querySelectorAll('.js-modal-close');
  const modal = document.querySelector('.js-modal-form');
  const successModal = document.querySelector('.js-modal-success');

  const closeClass = 'modal--closed';

  let curOpenedModal = null;
  let isOpen = false;

  if (!openBtns.length || !modal) {
    return false;
  }

  const openModal = function(curModal) {
    curModal.classList.remove(closeClass);

    isOpen = true;
    curOpenedModal = curModal;
  }

  const closeModal = function(curModal) {
    curModal.classList.add(closeClass);

    isOpen = false;
    curOpenedModal = null;
  }

  openBtns.forEach((btn) => {
    btn.addEventListener('click', function(evt) {
      evt.preventDefault();
      evt.stopPropagation();

      openModal(modal);
    });
  });

  closeBtns.forEach((btn) => {

    btn.addEventListener('click', function(evt) {
      evt.preventDefault();
      evt.stopPropagation();

      closeModal(btn.parentElement);
    });
  });

  document.addEventListener('click', function(evt) {
    if (!isOpen) {
      return false;
    }

    if (curOpenedModal.contains(evt.target)) {
      return false;
    }

    closeModal(curOpenedModal);
  });

  window.addEventListener('keydown', function(evt) {
    if (evt.code !== 'Escape' || !isOpen) {
      return false;
    }

    closeModal(curOpenedModal);
  });

  document.addEventListener('form-submitted', function(evt) {
    if (isOpen) {
      closeModal(curOpenedModal);
    }

    openModal(successModal);
  });
})();

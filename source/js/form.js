(function() {
  const forms = document.querySelectorAll('.js-form');

  if (!forms.length) {
    return false;
  }

  const customEvent = new Event('form-submitted');

  forms.forEach((form) => {
    form.addEventListener('submit', function(evt) {
      evt.preventDefault();

      if (form.checkValidity()) {
        document.dispatchEvent(customEvent);
      }
    });
  });
})();

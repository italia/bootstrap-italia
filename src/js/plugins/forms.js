$(function () {

  const inputSelector = `${['text', 'password', 'email', 'url', 'tel', 'number', 'search']
    .map((selector) => `input[type=${selector}]:enabled:not([readonly])`)
    .join(', ')}, textarea`;

  const inputFileSelector = `input[type="file"]`;


  $(document).on('focus', inputSelector, (e) => {
    const $this = $(e.target);
    $this.siblings('label, i').addClass('active');
  });

  $(document).on('blur', inputSelector, (e) => {
    const $this = $(e.target);
    const noValue = !$this.val();
    const noPlaceholder = $this.attr('placeholder') === undefined;

    if (noValue && noPlaceholder) {
      $this.siblings('label, i').removeClass('active');
    }

  });

  $(document).on('change', inputSelector, (e) => {
    const $this = $(e.target);
    updateTextFields($this);
    validateField($this);
  });

  $(document).on('blur', inputFileSelector, (e) => {

    const $this = $(e.target);
    $this.siblings('label').addClass('active');
  });

  $(document).on('change', inputFileSelector, (e) => {
    const $this = $(e.target);
    var numFiles = e.currentTarget.files.length;
    var nomiFiles = '';
    var multi = '';
    for (i = 0; i < numFiles; i++) {
      fileSize = parseInt(e.currentTarget.files[i].size, 10) / 1024;
      filesize = Math.round(fileSize);
      nomiFiles = nomiFiles + e.currentTarget.files[i].name + ' (' + filesize + 'kb); ';
    }
    if (numFiles > 1) {
      multi = numFiles + ' file da caricare: '
    }
    $this.siblings('.form-file-name').text(multi + nomiFiles);
  });

  const updateTextFields = ($input) => {
    const $labelAndIcon = $input.siblings('label, i');
    const hasValue = $input.val().length;
    const hasPlaceholder = $input.attr('placeholder');
    const addOrRemove = `${hasValue || hasPlaceholder ? 'add' : 'remove'}Class`;
    $labelAndIcon[addOrRemove]('active');
  };

  const validateField = ($input) => {
    if ($input.hasClass('validate')) {
      const value = $input.val();
      const noValue = !value.length;
      const isValid = !$input[0].validity.badInput;
      if (noValue && isValid) {
        $input.removeClass('valid').removeClass('invalid');
      } else {
        const valid = $input.is(':valid');
        const length = Number($input.attr('length')) || 0;
        if (valid && (!length || length > value.length)) {
          $input.removeClass('invalid').addClass('valid');
        } else {
          $input.removeClass('valid').addClass('invalid');
        }
      }
    }
  };

  $('body').find(inputSelector)
    .removeClass('valid')
    .removeClass('invalid')
    .each((index, input) => {
      const $this = $(input);
      const noDefaultValue = !$this.val();
      const noPlaceholder = !$this.attr('placeholder');
      $this.siblings('label, i').toggleClass('active', !(noDefaultValue && noPlaceholder))
    });

  $('.autocomplete').autocomplete();
});

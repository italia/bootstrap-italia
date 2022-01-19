$(function () {
  const inputSelector =
    'input[type="text"],' +
    'input[type="password"],' +
    'input[type="email"],' +
    'input[type="email"],' +
    'input[type="url"],' +
    'input[type="tel"],' +
    'input[type="number"],' +
    'input[type="search"],' +
    'textarea'

  const inputFileSelector = 'input[type="file"]'

  $(document)
    .on('focus', inputSelector, (e) => {
      const $this = $(e.target)
      const labelSelector = "label[for='" + $this.attr('id') + "']"
      $(labelSelector).addClass('active')
    })
    .on('blur', inputSelector, (e) => {
      const $this = $(e.target)
      const noValue = !$this.val()
      const noPlaceholder = !$this.attr('placeholder')
      if (noValue && noPlaceholder) {
        $("label[for='" + $this.attr('id') + "']").removeClass('active')
      }
    })
    .on('change', inputSelector, (e) => {
      const $this = $(e.target)
      updateTextFields($this)
      validateField($this)
    })
    .on('blur', inputFileSelector, (e) => {
      const $this = $(e.target)
      $("label[for='" + $this.attr('id') + "']").addClass('active')
    })
    .on('change', inputFileSelector, (e) => {
      const $this = $(e.target)
      var numFiles = e.currentTarget.files.length
      var nomiFiles = ''
      var multi = ''
      for (var i = 0; i < numFiles; i++) {
        var fileSize = parseInt(e.currentTarget.files[i].size, 10) / 1024
        var filesize = Math.round(fileSize)
        nomiFiles = nomiFiles + e.currentTarget.files[i].name + ' (' + filesize + 'kb); '
      }
      if (numFiles > 1) {
        multi = numFiles + ' file da caricare: '
      }
      $("label[for='" + $this.attr('id') + "']label[class='form-file-name']").text(multi + nomiFiles)
    })

  const updateTextFields = ($input) => {
    const $labelAndIcon = $("label[for='" + $input.attr('id') + "']")
    const hasValue = $input.val().length
    const hasPlaceholder = !!$input.attr('placeholder')
    if (hasValue || hasPlaceholder) {
      $labelAndIcon.addClass('active')
    } else {
      $labelAndIcon.removeClass('active')
    }
  }

  const validateField = ($input) => {
    if ($input.hasClass('validate')) {
      const value = $input.val()
      const noValue = !value.length
      const isValid = !$input[0].validity.badInput
      if (noValue && isValid) {
        $input.removeClass('valid').removeClass('invalid')
      } else {
        const valid = $input.is(':valid')
        const length = Number($input.attr('length')) || 0
        if (valid && (!length || length > value.length)) {
          $input.removeClass('invalid').addClass('valid')
        } else {
          $input.removeClass('valid').addClass('invalid')
        }
      }
    }
  }

  const handleLabelPosition = () => {
    $('body')
      .find(inputSelector)
      .removeClass('valid invalid')
      .each((index, input) => {
        const $this = $(input)
        const hasDefaultValue = !!$this.val()
        const hasPlaceholder = !!$this.attr('placeholder')
        if (hasDefaultValue || hasPlaceholder) {
          $("label[for='" + $this.attr('id') + "']")
            .css('transition', 'none')
            .addClass('active')
        }

        if (!hasDefaultValue && !hasPlaceholder) {
          $("label[for='" + $this.attr('id') + "']").removeClass('active')
        }
      })
  }

  handleLabelPosition()

  $(document).on('changed.bs.form-control', handleLabelPosition)
})

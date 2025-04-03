// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

;(function () {
  'use strict'

  function makeArray(list) {
    return [].slice.call(list)
  }

  makeArray(document.querySelectorAll('.toast')).forEach(function (toastNode) {
    var toast = new bootstrap.Toast(toastNode, {
      autohide: false,
    })

    toast.show()
  })

  // Tooltip and popover demos
  makeArray(document.querySelectorAll('.tooltip-demo')).forEach(function (tooltip) {
    new bootstrap.Tooltip(tooltip, {
      selector: '[data-bs-toggle="tooltip"]',
    })
  })

  makeArray(document.querySelectorAll('[data-bs-toggle="popover"]')).forEach(function (popover) {
    new bootstrap.Popover(popover, { sanitize: false })
  })

  // Demos within modals
  makeArray(document.querySelectorAll('.tooltip-test')).forEach(function (tooltip) {
    new bootstrap.Tooltip(tooltip)
  })

  makeArray(document.querySelectorAll('.popover-test')).forEach(function (popover) {
    new bootstrap.Popover(popover)
  })

  // Indeterminate checkbox example
  makeArray(document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')).forEach(function (checkbox) {
    checkbox.indeterminate = true
  })

  // Disable empty links in docs examples
  makeArray(document.querySelectorAll('.bd-content [href="#"]')).forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault()
    })
  })

  // Modal relatedTarget demo
  var exampleModal = document.getElementById('exampleModal')
  if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', function (event) {
      var button = event.relatedTarget // Button that triggered the modal
      var recipient = button.getAttribute('data-whatever') // Extract info from data-* attributes

      // Update the modal's content.
      var modalTitle = exampleModal.querySelector('.modal-title')
      var modalBodyInput = exampleModal.querySelector('.modal-body input')

      modalTitle.innerHTML = 'New message to ' + recipient
      modalBodyInput.value = recipient
    })
  }

  // Activate animated progress bar
  makeArray(document.querySelectorAll('.bd-toggle-animated-progress > .progress-bar-striped')).forEach(function (progressBar) {
    progressBar.addEventListener('click', function () {
      if (progressBar.classList.contains('progress-bar-animated')) {
        progressBar.classList.remove('progress-bar-animated')
      } else {
        progressBar.classList.add('progress-bar-animated')
      }
    })
  })

  // anchors.options = { // XXX This add complexity for SR (navbar mobile) 
  //   icon: '#',
  // }
  // anchors.add('.bd-content > h2, .bd-content > h3, .bd-content > h4, .bd-content > h5')

  // Wrap inner
  makeArray(document.querySelectorAll('.bd-content > h2, .bd-content > h3, .bd-content > h4, .bd-content > h5')).forEach(function (hEl) {
    hEl.innerHTML = '<span class="bd-content-title">' + hEl.innerHTML + '</span>'
  })
})()

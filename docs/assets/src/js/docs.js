// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

(function () {
  'use strict'

  function makeArray(list) {
    return [].slice.call(list)
  }

  makeArray(document.querySelectorAll('.toast'))
  .forEach(function (toastNode) {
    var toast = new bootstrap.Toast(toastNode, {
      autohide: false
    })

    toast.show()
  })

  // Tooltip and popover demos
  makeArray(document.querySelectorAll('.tooltip-demo'))
    .forEach(function (tooltip) {
      new bootstrap.Tooltip(tooltip, {
        selector: '[data-toggle="tooltip"]'
      })
    })

  makeArray(document.querySelectorAll('[data-toggle="popover"]'))
    .forEach(function (popover) {
      new bootstrap.Popover(popover)
    })

  // Demos within modals
  makeArray(document.querySelectorAll('.tooltip-test'))
    .forEach(function (tooltip) {
      new bootstrap.Tooltip(tooltip)
    })

  makeArray(document.querySelectorAll('.popover-test'))
    .forEach(function (popover) {
      new bootstrap.Popover(popover)
    })

  // Indeterminate checkbox example
  makeArray(document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]'))
    .forEach(function (checkbox) {
      checkbox.indeterminate = true
    })

  // Disable empty links in docs examples
  makeArray(document.querySelectorAll('.bd-content [href="#"]'))
    .forEach(function (link) {
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
  makeArray(document.querySelectorAll('.bd-toggle-animated-progress > .progress-bar-striped'))
    .forEach(function (progressBar) {
      progressBar.addEventListener('click', function () {
        if (progressBar.classList.contains('progress-bar-animated')) {
          progressBar.classList.remove('progress-bar-animated')
        } else {
          progressBar.classList.add('progress-bar-animated')
        }
      })
    })

  anchors.options = {
    icon: '#'
  }
  anchors.add('.bd-content > h2, .bd-content > h3, .bd-content > h4, .bd-content > h5')

  // Wrap inner
  makeArray(document.querySelectorAll('.bd-content > h2, .bd-content > h3, .bd-content > h4, .bd-content > h5'))
    .forEach(function (hEl) {
      hEl.innerHTML = '<span class="bd-content-title">' + hEl.innerHTML + '</span>'
    })

}())


$(function () {

  // Modal with radiobuttons example
  $('.modal-body').find('input[type=radio]').click(function(){
    $(this).closest('.modal-content').find('.modal-footer .btn-primary').removeAttr('disabled');
  })

  // Insert copy to clipboard button before .highlight
  $('.highlight').each(function () {
    var btnHtml = '<div class="bd-clipboard"><button class="btn-clipboard" title="Copy to clipboard">Copy</button></div>'
    $(this).before(btnHtml)
    $('.btn-clipboard')
      .tooltip()
      .on('mouseleave', function () {
        // explicitly hide tooltip, since after clicking it remains
        // focused (as it's a button), so tooltip would otherwise
        // remain visible until focus is moved away
        $(this).tooltip('hide')
      })
  })

  // ClipboardJS - Docs copy code handling
  var clipboard = new ClipboardJS('.btn-clipboard', {
    target: function (trigger) {
      return trigger.parentNode.nextElementSibling
    }
  })
  clipboard.on('success', function (e) {
    $(e.trigger)
      .attr('title', 'Copied!')
      .tooltip('_fixTitle')
      .tooltip('show')
      .attr('title', 'Copy to clipboard')
      .tooltip('_fixTitle')

    e.clearSelection()
  })
  clipboard.on('error', function (e) {
    var modifierKey = /Mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-'
    var fallbackMsg = 'Press ' + modifierKey + 'C to copy'

    $(e.trigger)
      .attr('title', fallbackMsg)
      .tooltip('_fixTitle')
      .tooltip('show')
      .attr('title', 'Copy to clipboard')
      .tooltip('_fixTitle')
  })

  // ParticlesJS - Docs homepage particles
  if ($('#particles-js').length) {
    var particlesJSON = {
      "particles": {
        "number":{"value":160,"density":{"enable":true,"value_area":800}},
        "color":{"value":"#FFF"},
        "shape":{"type":"circle","stroke":{"width":0,"color":"#000000"}},
        "opacity":{"value":0.8,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},
        "size":{"value":2,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},
        "line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.1,"width":1},
        "move":{"enable":true,"speed":0.2,"direction":"top","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}
      },
      "retina_detect":true
    }
    particlesJS('particles-js', particlesJSON);
  }

});

$(function() {
  var openbutton = $('.custom-navbar-toggler')
  var closebutton = $('.close-div')
  var overlay = $('.overlay')
  var backbutton = $('.it-back-button')
  var navlink = $('.navbar-collapsable a')

  $('.it-bottom-navscroll ul li a[href^="#"]').on('click', function(e) {
    e.preventDefault()

    var hash = this.hash

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      600,
      function() {
        if (history.pushState) {
          history.pushState(null, null, hash)
        } else {
          location.hash = hash
        }
      }
    )
    //close window on click
    $(overlay).trigger('click')
  })

  // navscroll back function
  $(backbutton).click(function(event) {
    $(overlay).trigger('click')
    $(this).fadeOut()
    event.preventDefault()
  })

  // navscroll item on scroll
  $(window)
    .on('scroll', function() {
      var sectionsContainerTop = $('.it-page-sections-container').length ? $(".it-page-sections-container").offset().top : 0
      var scrollDistance = $(window).scrollTop() - sectionsContainerTop
      // Assign active class to nav links while scolling
      $('.it-page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
          $('.it-navscroll-wrapper .menu-wrapper a.active').removeClass(
            'active'
          )
          $('.it-navscroll-wrapper .menu-wrapper a')
            .eq(i)
            .addClass('active')
          var parentsection = $('.it-navscroll-wrapper .menu-wrapper a')
            .eq(i)
            .closest('ul')
            .prev('a')
          var parentparentsection = $(parentsection)
            .closest('ul')
            .prev('a')
          $(parentsection).addClass('active')
          $(parentparentsection).addClass('active')
          var textContent = $('.it-navscroll-wrapper .menu-wrapper a')
            .eq(i)
            .find('span')
            .text()
          var $btn = $('.it-navscroll-wrapper .custom-navbar-toggler')
          var $icon = $btn.find('span.it-list')
          $btn.text(textContent)
          $btn.prepend($icon)
        }
      })
    })
    .scroll()
})

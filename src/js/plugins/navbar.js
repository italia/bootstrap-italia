$(function () {
  // open / close navbar actions
  var openbutton = $('.custom-navbar-toggler')
  var closebutton = $('.close-div')
  var overlay = $('.overlay')
  var backbutton = $('.it-back-button')

  //-open button action
  $(openbutton).on('click', function () {
    /* Act on the event */
    var target = $(this).attr('data-target')
    var fadelayer = $(target).find('.overlay')
    $(this).attr('aria-expanded', 'true')
    $(backbutton).fadeIn()
    $(target).show()
    $(fadelayer).fadeIn()
    $(target).addClass('expanded')
  })

  $(overlay).on('click', function () {
    var target = $(this).closest('.navbar-collapsable')
    var buttonrel = $(this).closest('.navbar').find('.custom-navbar-toggler')
    var fadelayer = $(target).find('.overlay')
    $(buttonrel).attr('aria-expanded', 'false')

    $(target).removeClass('expanded')
    $(fadelayer).fadeOut()
    setTimeout(function () {
      $(target).hide()
    }, 300)
  })

  //-close button action
  $(closebutton).on('click', function () {
    var target = $(this).closest('.navbar-collapsable')
    var buttonrel = $(this).closest('.navbar').find('.custom-navbar-toggler')
    var fadelayer = $(target).find('.overlay')

    $(buttonrel).attr('aria-expanded', 'false')

    $(target).removeClass('expanded')
    $(fadelayer).fadeOut()
    setTimeout(function () {
      $(target).hide()
    }, 300)
  })
})

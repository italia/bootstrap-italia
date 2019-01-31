$(function() {
  // open / close navbar actions
  var openbutton = $('.custom-navbar-toggler')
  var closebutton = $('.close-div')
  var overlay = $('.overlay')
  var backbutton = $('.it-back-button')
  var navlink = $('.navbar-collapsable a')

  //-open button action
  $(openbutton).on('click', function(event) {
    /* Act on the event */
    var target = $(this).attr('data-target')
    var fadelayer = $(target).find('.overlay')
    $(this).attr('aria-expanded', 'true')
    $(backbutton).fadeIn()
    $(target).show()
    $(fadelayer).fadeIn()
    $(target).addClass('expanded')
  })

  $(overlay).on('click', function() {
    var target = $(this).closest('.navbar-collapsable')
    var buttonrel = $(this)
      .closest('.navbar')
      .find('.custom-navbar-toggler')
    var fadelayer = $(target).find('.overlay')
    $(buttonrel).attr('aria-expanded', 'false')

    $(target).removeClass('expanded')
    $(fadelayer).fadeOut()
    setTimeout(function() {
      $(target).hide()
    }, 300)
  })

  //-close button action
  $(closebutton).on('click', function(event) {
    var target = $(this).closest('.navbar-collapsable')
    var buttonrel = $(this)
      .closest('.navbar')
      .find('.custom-navbar-toggler')
    var fadelayer = $(target).find('.overlay')

    $(buttonrel).attr('aria-expanded', 'false')

    $(target).removeClass('expanded')
    $(fadelayer).fadeOut()
    setTimeout(function() {
      $(target).hide()
    }, 300)
  })

  //-- (a fine elenco viene chiuso il menù ed il focus passa all'elemento successivo)
  $(navlink).on('blur', function(event) {
    closemenu = $(this)
      .closest('.navbar-collapsable')
      .find('.close-div .btn') // determino il pulsante di chiusura
    /* Act on the event */
    if (
      $(this)
        .closest('.navbar-collapsable')
        .hasClass('expanded')
    ) {
      // se il navigatore è a perto
      setTimeout(function() {
        var active = document.activeElement // determino quale elemento ha il focus
        var isMenu = $(active).closest('.navbar-collapsable').length // controllo che l'elemento si trovi all'interno del navigatore

        if (isMenu == 0) {
          // se l'elemento è fuori dal navigatore
          $(closemenu).trigger('click') // simulo il click sul pulsante di chiusura del pannello
        }
      }, 50)
    }
  })

  //-- (a inizio elenco tabbando indietro, dopo il close chiudo il menu)
  $(closebutton).on('blur', function(event) {
    closemenu = $(this)
    /* Act on the event */
    if (
      $(this)
        .closest('.navbar-collapsable')
        .hasClass('expanded')
    ) {
      // se il navigatore è a perto
      setTimeout(function() {
        var active = document.activeElement // determino quale elemento ha il focus
        var isMenu = $(active).closest('.navbar-collapsable').length // controllo che l'elemento si trovi all'interno del navigatore

        if (isMenu == 0) {
          // se l'elemento è fuori dal navigatore
          $(closemenu).trigger('click') // simulo il click sul pulsante di chiusura del pannello
        }
      }, 50)
    }
  })
})

$(function() {
  var carouselTarget = $('.owl-carousel.it-carousel-all')
  // parameters
  var cnav
  var cloop
  var cmargin
  var citems
  var cnavText
  var cnavSpeed //arrow click
  var csmartSpeed // bullet click
  var cdotsSpeed
  var ccontrolsAriaHidden
  var cmouseDrag
  var ctouchDrag
  var cdots
  var cslideBy
  var cstagePadding
  // mobile params
  var mobnav
  var mobdots
  var mobitems
  var mobstagePadding
  var mobmargin
  // 768 params
  var tabnav
  var tabdots
  var tabitems
  var tabstagePadding
  var tabmargin
  // 992 params
  var desknav
  var deskdots
  var deskitems
  var deskstagePadding
  var deskmargin
  // xl params
  var xlnav
  var xldots
  var xlitems
  var xlstagePadding
  var xlmargin

  $(carouselTarget).each(function() {
    // target definition
    if (
      $(this)
        .closest('.it-carousel-wrapper')
        .hasClass('it-carousel-landscape-abstract-three-cols')
    ) {
      cnav = true
      cloop = false
      cmargin = 24
      citems = 3
      cnavText = []
      cnavSpeed = 300 //arrow click
      csmartSpeed = 500 // bullet click
      cdotsSpeed = 200
      ccontrolsAriaHidden = true
      cmouseDrag = true
      ctouchDrag = true
      cdots = false
      cslideBy = 'page'
      cstagePadding = cstagePadding
      // mobile params
      mobnav = false
      mobdots = true
      mobitems = 1
      mobstagePadding = 40
      mobmargin = 24
      // 768 params
      tabnav = false
      tabdots = true
      tabitems = 2
      tabstagePadding = 40
      tabmargin = 24
      // 992 params
      desknav = false
      deskdots = true
      deskitems = 3
      deskstagePadding = 0
      deskmargin = 0
      // xl params
      xlnav = false
      xldots = true
      xlitems = 3
      xlstagePadding = 0
      xlmargin = 0

      // carousel 3 col with shadow
      if ($(this).hasClass('it-card-bg')) {
        mobstagePadding = 40
        mobmargin = 24
        tabstagePadding = 40
        tabmargin = 24
        deskstagePadding = 12
        deskmargin = 24
        xlstagePadding = 12
        xlmargin = 24
      }

      // carousel 3 img card
      if ($(this).hasClass('it-img-card')) {
        mobstagePadding = 40
        mobmargin = 24
        tabstagePadding = 40
        tabmargin = 24
        deskstagePadding = 0
        deskmargin = 24
        xlstagePadding = 0
        xlmargin = 24
      }
      // carousel img big
      if ($(this).hasClass('it-img-card') && $(this).hasClass('it-big-img')) {
        cloop = true
        mobstagePadding = 0
        mobmargin = 0
        tabstagePadding = 160
        tabmargin = 24
        tabitems = 1
        deskstagePadding = 320
        deskmargin = 48
        deskitems = 1
        xlstagePadding = 320
        xlmargin = 48
        xlitems = 1
      }
      // standard img
      if (
        $(this).hasClass('it-img-card') &&
        $(this).hasClass('it-standard-image')
      ) {
        cloop = true
        mobstagePadding = 40
        mobmargin = 24
        mobitems = 1
        tabstagePadding = 48
        tabmargin = 24
        tabitems = 2
        deskstagePadding = 68
        deskmargin = 24
        deskitems = 3
        xlstagePadding = 48
        xlmargin = 24
        xlitems = 3
      }
    }

    if (
      $(this)
        .closest('.it-carousel-wrapper')
        .hasClass('it-calendar-wrapper')
    ) {
      cnav = true
      cloop = false
      cmargin = 0
      citems = 4
      cnavText = []
      cnavSpeed = 300 //arrow click
      csmartSpeed = 500 // bullet click
      cdotsSpeed = 200
      ccontrolsAriaHidden = true
      cmouseDrag = true
      ctouchDrag = true
      cdots = false
      cslideBy = 'page'
      cstagePadding = cstagePadding
      // mobile params
      mobnav = false
      mobdots = true
      mobitems = 1
      mobstagePadding = 40
      mobmargin = 0
      // 768 params
      tabnav = false
      tabdots = true
      tabitems = 2
      tabstagePadding = 40
      tabmargin = 0
      // 992 params
      desknav = false
      deskdots = true
      deskitems = 4
      deskstagePadding = 0
      deskmargin = 0
      // xl params
      xlnav = false
      xldots = true
      xlitems = 4
      xlstagePadding = 0
      xlmargin = 0

      // carousel 4 col with shadow
      if ($(this).hasClass('it-card-bg')) {
        mobstagePadding = 40
        mobmargin = 0
        tabstagePadding = 40
        tabmargin = 0
        deskstagePadding = 0
        deskmargin = 0
        xlstagePadding = 0
        xlmargin = 0
      }

      // carousel 4 img card
      if ($(this).hasClass('it-img-card')) {
        mobstagePadding = 40
        mobmargin = 0
        tabstagePadding = 40
        tabmargin = 0
        deskstagePadding = 0
        deskmargin = 0
        xlstagePadding = 0
        xlmargin = 0
      }
      // carousel img big
      if ($(this).hasClass('it-img-card') && $(this).hasClass('it-big-img')) {
        cloop = true
        mobstagePadding = 0
        mobmargin = 0
        tabstagePadding = 160
        tabmargin = 0
        tabitems = 1
        deskstagePadding = 320
        deskmargin = 0
        deskitems = 1
        xlstagePadding = 320
        xlmargin = 0
        xlitems = 1
      }
      // standard img
      if (
        $(this).hasClass('it-img-card') &&
        $(this).hasClass('it-standard-image')
      ) {
        cloop = true
        mobstagePadding = 40
        mobmargin = 0
        mobitems = 1
        tabstagePadding = 48
        tabmargin = tabitems = 2
        deskstagePadding = 68
        deskmargin = 0
        deskitems = 4
        xlstagePadding = 48
        xlmargin = 0
        xlitems = 4
      }
    }

    // Landscape abstract --------------------------------------------------------------------------
    if (
      $(this)
        .closest('.it-carousel-wrapper')
        .hasClass('it-carousel-landscape-abstract')
    ) {
      cnav = true
      cloop = false
      cmargin = 24
      citems = 1
      cnavText = []
      cnavSpeed = 300 //arrow click
      csmartSpeed = 500 // bullet click
      cdotsSpeed = 200
      ccontrolsAriaHidden = true
      cmouseDrag = true
      ctouchDrag = true
      cdots = false
      cslideBy = 'page'
      cstagePadding = cstagePadding
      // mobile params
      mobnav = false
      mobdots = true
      mobitems = 1
      mobstagePadding = 0
      mobmargin = 24
      // 768 params
      tabnav = false
      tabdots = true
      tabitems = 1
      tabstagePadding = 24
      tabmargin = 24
      // 992 params
      desknav = false
      deskdots = true
      deskitems = 1
      deskstagePadding = 0
      deskmargin = 0
      // xl params
      xlnav = false
      xldots = true
      xlitems = 1
      xlstagePadding = 0
      xlmargin = 0
    }

    if ($(this).owlCarousel) {
      //carousel settings//
      $(this).owlCarousel({
        //carousel parameters
        nav: cnav,
        loop: cloop,
        margin: 24, //cmargin
        items: citems,
        navText: cnavText,
        navSpeed: cnavSpeed, //arrow click
        smartSpeed: csmartSpeed, // bullet click
        dotsSpeed: cdotsSpeed,
        navElement: 'button',
        dotElement: 'button',
        controlsAriaHidden: ccontrolsAriaHidden,
        mouseDrag: cmouseDrag,
        touchDrag: ctouchDrag,
        dots: cdots,
        slideBy: cslideBy,
        stagePadding: cstagePadding, //cstagePadding,
        responsive: {
          // breakpoint from 0 up
          0: {
            nav: mobnav,
            dots: mobdots,
            items: mobitems,
            stagePadding: mobstagePadding,
            margin: mobmargin,
          },
          // breakpoint from 768 up
          768: {
            nav: tabnav,
            dots: tabdots,
            stagePadding: tabstagePadding,
            items: tabitems,
            margin: tabmargin,
          },
          // breakpoint from 992 up
          992: {
            nav: desknav,
            dots: deskdots,
            items: deskitems,
            stagePadding: deskstagePadding,
            margin: deskmargin,
          },
          // breakpoint from 1200 up
          1200: {
            nav: xlnav,
            dots: xldots,
            stagePadding: xlstagePadding,
            items: xlitems,
            margin: xlmargin,
          },
        },
        onInitialized: function(event) {
          $(event.target)
            .find('.owl-dot')
            .each(function(index) {
              $(this).attr('aria-labelledby', 'owl-dot-' + index)
            })
        },
      })
    }
  })
})

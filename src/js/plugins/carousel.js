document.addEventListener('DOMContentLoaded', function () {
  if (window['Splide'] !== undefined) {
    //configs
    var selector = document.getElementsByClassName('splide')
    var splide
    var perPageMob
    var perPageTab
    var perPageDesk
    var gapMob
    var gapTab
    var gapDesk
    var paddingMob
    var paddingTab
    var paddingDesk
    var arrowsMob
    var arrowsTab
    var arrowsDesk
    Array.prototype.forEach.call(selector, function (el) {
      if (el.classList.contains('it-carousel-landscape-abstract-three-cols')) {
        perPageMob = 1
        perPageTab = 2
        perPageDesk = 3
        gapMob = 24
        gapTab = 24
        gapDesk = 24
        paddingMob = { left: 40, right: 40 }
        paddingTab = { left: 40, right: 40 }
        paddingDesk = { left: 12, right: 12 }
        arrowsMob = false
        arrowsTab = false
        arrowsDesk = false
      } else if (el.classList.contains('it-carousel-landscape-abstract')) {
        perPageMob = 1
        perPageTab = 1
        perPageDesk = 1
        gapMob = 24
        gapTab = 24
        gapDesk = 24
        paddingMob = { left: 0, right: 0 }
        paddingTab = { left: 24, right: 24 }
        paddingDesk = { left: 0, right: 0 }
        arrowsMob = false
        arrowsTab = false
        arrowsDesk = false
      }
      /*eslint-disable */
      splide = new Splide(el, {
        /*eslint-enable */
        perPage: perPageDesk,
        gap: gapDesk,
        padding: paddingDesk,
        arrows: arrowsDesk,
        slideFocus: true,
        i18n: {
          prev: 'Slide precedente',
          next: 'Slide successiva',
          pageX: 'Vai a pagina %s',
          slideX: 'Vai alla slide %s',
        },
        breakpoints: {
          768: {
            perPage: perPageMob,
            gap: gapMob,
            padding: paddingMob,
            arrows: arrowsMob,
          },
          992: {
            perPage: perPageTab,
            gap: gapTab,
            padding: paddingTab,
            arrows: arrowsTab,
          },
        },
      })
      splide.mount()
    })
  }
})

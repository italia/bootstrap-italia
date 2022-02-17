import ClassWatcher from './class-watcher'

const STYLE = {
  opened: 'expanded',
}
const SELECTOR = {
  sideMenu: '.navbar-collapsable',
  navlink: '.nav-link',
  megamenuNavLink: '.nav-item .list-item',
  closeBtn: '.close-menu',
  navbar: '.navbar',
  homeBtn: '.custom-navbar-toggler',
}

class SideMenu {
  constructor(targetNode) {
    this.target = targetNode
    this.watcher
    this.items = targetNode.querySelectorAll([SELECTOR.navlink, SELECTOR.megamenuNavLink, SELECTOR.closeBtn].join(','))
    this.currItemIdx = 0
    this.isKeyShift = false
  }

  init() {
    this.watcher = new ClassWatcher(
      this.target,
      STYLE.opened,
      () => this.onOpen(),
      () => this.onClose()
    )
    this.bindEvents()
  }
  bindEvents() {
    this.items.forEach((item) => {
      item.addEventListener('keydown', (evt) => this.onItemKeyDown(evt))
      item.addEventListener('keyup', (evt) => this.onItemKeyUp(evt))
      item.addEventListener('click', (evt) => this.onItemClick(evt))
    })
  }

  /**
   * sposta il focus sul primo link all'apertura del menu
   */
  onOpen() {
    const firstItem = this.getNextVisibleItem(1) //in pos 0 c'è il bottone di chiusura
    if (firstItem.item) {
      firstItem.item.focus()
      this.currItemIdx = firstItem.index
    }
  }
  /**
   * sposta il focus sul bottone di apertura menu alla chiusura del menu
   */
  onClose() {
    const homeBtn = this.target.closest(SELECTOR.navbar).querySelector(SELECTOR.homeBtn)
    if (homeBtn) {
      homeBtn.focus()
    }
  }
  onItemKeyUp(evt) {
    if (evt.key === 'Shift') {
      this.isKeyShift = false
    }
  }
  /**
   * Gestisce la navigazione degli elementi interagibili del menu tramite tastiera
   */
  onItemKeyDown(evt) {
    if (evt.key === 'Shift') {
      this.isKeyShift = true
    }
    if (evt.key === 'Tab') {
      evt.preventDefault()
      this.focusNext()
    }
  }
  /**
   * Aggiorna l'ultimo elemento con focus al click su un elemento interagibile
   */
  onItemClick(evt) {
    this.currItemIdx = this.getItemIndex(evt.currentTarget)
  }
  /**
   * indica se l'elemento è non visibile
   * @param {Object} element - l'elemento da analizzare
   * @returns {boolean} true se l'elemento risulta non visibile
   */
  isHidden(element) {
    return element.offsetParent === null
  }
  /**
   * ritorna l'indice dell'elemento all'interno dell'array degli elementi del menu
   * @param {Object} target - l'elemento di cui si vuole ottenere l'indice
   * @returns {int} l'indice dell'elemento
   */
  getItemIndex(target) {
    let foundIdx = null
    this.items.forEach((item, idx) => {
      if (item === target) {
        foundIdx = idx
      }
    })
    return foundIdx
  }
  /**
   * Sposta il focus sul primo elemento visibile dato un punto di partenza
   * @param {int} start - l'indice dell'array degli elementi del menu dal quale partire (compreso)
   * @param {boolean} wayTop - indica se esplorare l'array dal basso verso l'alto
   * @returns {Object} un oggetto contenente l'elemento e il suo indice trovati
   */
  getNextVisibleItem(start, wayTop) {
    let found = null
    let foundIdx = null

    let i = start
    let incr = wayTop ? -1 : 1
    let firstCheck = false
    while (!found && (i != start || !firstCheck)) {
      if (i == start) {
        firstCheck = true
      }
      if (!this.isHidden(this.items[i])) {
        found = this.items[i]
        foundIdx = i
      }
      i = i + incr
      if (i < 0) {
        i = this.items.length - 1
      } else if (i >= this.items.length) {
        i = 0
      }
    }

    return {
      item: found,
      index: foundIdx,
    }
  }

  /**
   * Sposta il focus sul prossimo elemento tenendo conto della direzione in cui si sta esplorando il DOM
   */
  focusNext() {
    let nextIdx = this.currItemIdx + (this.isKeyShift ? -1 : 1)
    if (nextIdx < 0) {
      nextIdx = this.items.length - 1
    } else if (nextIdx >= this.items.length) {
      nextIdx = 0
    }
    const target = this.getNextVisibleItem(nextIdx, this.isKeyShift)
    if (target.item) {
      target.item.focus()
      this.currItemIdx = target.index
    }
  }
}

const menus = document.querySelectorAll(SELECTOR.sideMenu)
menus.forEach((menu) => {
  const smenu = new SideMenu(menu)
  smenu.init()
})

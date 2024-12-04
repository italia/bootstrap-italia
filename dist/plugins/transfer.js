import BaseComponent from './base-component.js';
import EventHandler from './dom/event-handler.js';
import SelectorEngine from './dom/selector-engine.js';

const NAME = 'transfer';
const DATA_KEY = 'bs.transfer';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';

const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_CLICK = `click${EVENT_KEY}`;

const CLASS_NAME_ACTIVE = 'active';
const CLASS_NAME_SOURCE = 'source';
const CLASS_NAME_SEMICHECKED = 'semi-checked';

const SELECTOR_BLOCK = '[data-bs-transfer]'; //'.it-transfer-block'
const SELECTOR_BTN_TRANS = 'a.transfer';
const SELECTOR_BTN_TRANS_BACK = 'a.backtransfer';
const SELECTOR_BTN_RESET = 'a.reset';
const SELECTOR_HEAD = '.transfer-header';
const SELECTOR_HEAD_INPUT = '.transfer-header input';
const SELECTOR_HEAD_LABEL = '.transfer-header span.num';
const SELECTOR_LIST_INPUT = '.transfer-group input';
const SELECTOR_TRANS_WRAPPER = '.it-transfer-wrapper';
const SELECTOR_TRANS_GROUP = '.transfer-group';
const SELECTOR_SOURCE = `${SELECTOR_TRANS_WRAPPER}.source`;
const SELECTOR_TARGET = `${SELECTOR_TRANS_WRAPPER}.target`;
const SELECTOR_FORM_CHECK = '.form-check';

class Transfer extends BaseComponent {
  constructor(element) {
    super(element);

    this._addBtnElement = SelectorEngine.findOne(SELECTOR_BTN_TRANS, this._element);
    this._invBtnElement = SelectorEngine.findOne(SELECTOR_BTN_TRANS_BACK, this._element);
    this._resetBtnElement = SelectorEngine.findOne(SELECTOR_BTN_RESET, this._element);
    this._listDefault = {
      source: SelectorEngine.find(SELECTOR_SOURCE + ' ' + SELECTOR_TRANS_GROUP + ' ' + SELECTOR_FORM_CHECK, this._element),
      target: SelectorEngine.find(SELECTOR_TARGET + ' ' + SELECTOR_TRANS_GROUP + ' ' + SELECTOR_FORM_CHECK, this._element),
    };

    this._bindEvents();
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public

  // Private

  _bindEvents() {
    SelectorEngine.find(SELECTOR_HEAD_INPUT, this._element).forEach((input) => {
      EventHandler.on(input, EVENT_CLICK, () => {
        this._checkListHeader(input.closest(SELECTOR_TRANS_WRAPPER));
      });
    });
    SelectorEngine.find(SELECTOR_LIST_INPUT, this._element).forEach((input) => {
      EventHandler.on(input, EVENT_CLICK, () => {
        this._checkList(input.closest(SELECTOR_TRANS_WRAPPER));
      });
    });

    EventHandler.on(this._addBtnElement, EVENT_CLICK, (evt) => {
      evt.preventDefault();
      // disattivo il pulsante corrente
      this._disableElement(this._addBtnElement);
      this._addItems();
    });
    EventHandler.on(this._invBtnElement, EVENT_CLICK, (evt) => {
      evt.preventDefault();
      // disattivo il pulsante corrente
      this._disableElement(this._invBtnElement);
      this._addItems(true);
    });

    EventHandler.on(this._resetBtnElement, EVENT_CLICK, (evt) => {
      evt.preventDefault();

      this._disableElement(this._addBtnElement);
      this._disableElement(this._invBtnElement);
      this._disableElement(this._resetBtnElement);

      this._resetAll();
    });
  }

  _disableElement(element) {
    element.classList.remove(CLASS_NAME_ACTIVE);
    element.setAttribute('disabled', 'disabled');
    element.setAttribute('aria-disabled', 'true');
  }

  _enableElement(element) {
    element.classList.add(CLASS_NAME_ACTIVE);
    element.removeAttribute('disabled');
    element.removeAttribute('aria-disabled');
  }

  _getScopeData(scope) {
    return {
      scope,
      list: SelectorEngine.find(SELECTOR_LIST_INPUT, scope),
      listChecked: SelectorEngine.find(SELECTOR_LIST_INPUT + ':checked', scope),
      head: SelectorEngine.findOne(SELECTOR_HEAD, scope),
      inputHead: SelectorEngine.findOne(SELECTOR_HEAD_INPUT, scope),
      labelNumHead: SelectorEngine.findOne(SELECTOR_HEAD_LABEL, scope),
      group: SelectorEngine.findOne(SELECTOR_TRANS_GROUP, scope),
    }
  }

  _checkList(scopeElControl) {
    const scopeData = this._getScopeData(scopeElControl);

    if (scopeData.listChecked.length == 0) {
      scopeData.inputHead.classList.remove(CLASS_NAME_SEMICHECKED);
      scopeData.inputHead.checked = true;
      // controllo quale pulsante centrale disattivare
      if (scopeElControl.classList.contains(CLASS_NAME_SOURCE)) {
        this._disableElement(this._addBtnElement);
      } else {
        this._disableElement(this._invBtnElement);
      }
    } else {
      if (scopeData.listChecked.length == scopeData.list.length) {
        scopeData.inputHead.classList.remove(CLASS_NAME_SEMICHECKED);
        scopeData.inputHead.checked = true;
      } else {
        scopeData.inputHead.classList.add(CLASS_NAME_SEMICHECKED);
        scopeData.inputHead.checked = false;
      }
      // controllo quale pulsante centrale disattivare
      if (scopeElControl.classList.contains(CLASS_NAME_SOURCE)) {
        this._enableElement(this._addBtnElement);
      } else {
        this._enableElement(this._invBtnElement);
      }
    }
  }

  _checkListHeader(scopeElControl) {
    const scopeData = this._getScopeData(scopeElControl);

    if (scopeData.listChecked.length > 0) {
      scopeData.list.forEach((item) => {
        item.checked = false;
      });
      scopeData.inputHead.classList.remove(CLASS_NAME_SEMICHECKED);
      scopeData.inputHead.checked = false;

      // controllo quale pulsante centrale disattivare
      if (scopeElControl.classList.contains(CLASS_NAME_SOURCE)) {
        this._disableElement(this._addBtnElement);
      } else {
        this._disableElement(this._invBtnElement);
      }
    } else {
      scopeData.list.forEach((item) => {
        item.checked = true;
      });
      // controllo quale pulsante centrale attivare
      if (scopeElControl.classList.contains(CLASS_NAME_SOURCE)) {
        this._enableElement(this._addBtnElement);
      } else {
        this._enableElement(this._invBtnElement);
      }
    }
  }

  _addItems(inverse) {
    const sourceData = this._getScopeData(SelectorEngine.findOne(inverse ? SELECTOR_TARGET : SELECTOR_SOURCE, this._element));
    const targetData = this._getScopeData(SelectorEngine.findOne(inverse ? SELECTOR_SOURCE : SELECTOR_TARGET, this._element));

    const sourceItems = sourceData.listChecked; //sourceControl.find('.transfer-group input:checked')
    //const sourceItemsBlock = SelectorEngine.findOne('.form-check', sourceData.head) //sourceData.head('.form-check')
    const sourceHeadInput = sourceData.inputHead; //sourceControl.find('.transfer-header input')
    const sourceHeadLabel = sourceData.labelNumHead; //sourceControl.find('.transfer-header span.num')
    const sourceItemsQty = sourceItems.length;
    const sourceTotalQty = sourceData.list.length;

    const targetDiv = targetData.group;
    const targetQty = targetData.list.length + sourceItemsQty;
    const targetHeadLabel = targetData.labelNumHead;
    const targetHeadInput = targetData.inputHead;

    // ciclo di aggiunta
    sourceItems.forEach((item) => {
      const wrapper = item.closest(SELECTOR_FORM_CHECK);
      wrapper.remove();
      targetDiv.appendChild(wrapper);
      item.checked = false;
    });

    // update label
    const totalSource = sourceTotalQty - sourceItemsQty;
    const totalTarget = targetQty;

    sourceHeadLabel.innerText = totalSource;
    targetHeadLabel.innerText = totalTarget;

    // disattivazione header input se non ci sono più elementi
    if (totalSource == 0) {
      sourceHeadInput.setAttribute('disabled', true);
    }
    if (totalTarget > 0) {
      targetHeadInput.removeAttribute('disabled');
    }

    // ripristino stato iniziale input header
    sourceHeadInput.classList.remove(CLASS_NAME_SEMICHECKED);
    sourceHeadInput.checked = false;

    // attivo il pulsante di reset
    this._enableElement(this._resetBtnElement);
  }

  _resetAll() {
    const blocks = {
      source: this._getScopeData(SelectorEngine.findOne(SELECTOR_SOURCE, this._element)),
      target: this._getScopeData(SelectorEngine.findOne(SELECTOR_TARGET, this._element)),
    };

    Object.keys(blocks).forEach((key) => {
      blocks[key].list.forEach((item) => item.closest(SELECTOR_FORM_CHECK).remove());
    });

    Object.keys(blocks).forEach((key) => {
      this._listDefault[key].forEach((item) => {
        item.checked = false;
        blocks[key].group.appendChild(item);
      });
      blocks[key].labelNumHead.innerText = this._listDefault[key].length;

      blocks[key].inputHead.removeAttribute('disabled');
      blocks[key].inputHead.classList.remove(CLASS_NAME_SEMICHECKED);
      blocks[key].inputHead.checked = false;
    });
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_BLOCK + ' .form-check label', function () {
    Transfer.getOrCreateInstance(this.closest(SELECTOR_BLOCK));
  });
  EventHandler.on(document, EVENT_KEYUP_DATA_API, SELECTOR_BLOCK + ' .form-check label', function () {
    Transfer.getOrCreateInstance(this.closest(SELECTOR_BLOCK));
  });
}

export { Transfer as default };
//# sourceMappingURL=transfer.js.map

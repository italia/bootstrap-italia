import SelectorEngine from 'bootstrap/js/src/dom/selector-engine';
import { isVisible } from 'bootstrap/js/src/util';

const CLASS_NAME_CLONED_HEADER = 'cloned-element';
const CLASS_NAME_SHOW = 'show';

const SELECTOR_HEADER = '.it-header-sticky';
const SELECTOR_TOGGLER = '.custom-navbar-toggler';
const SELECTOR_MENU_WRAPPER = '.menu-wrapper';
const SELECTOR_BRAND_WRAPPER = '.it-brand-wrapper';
const SELECTOR_SEARCH_WRAPPER = '.it-search-wrapper';
const SELECTOR_USER_WRAPPER = '.it-user-wrapper';
const SELECTOR_CLONED = `.${CLASS_NAME_CLONED_HEADER}`;

const toggleClonedElement = (targetHeader, toAdd = true) => {
  const isDesktop = !isVisible(SelectorEngine.findOne(SELECTOR_TOGGLER, targetHeader));

  if (isDesktop) {
    const target = SelectorEngine.findOne(SELECTOR_MENU_WRAPPER, targetHeader);

    if (toAdd) {
      const elBrand = SelectorEngine.findOne(SELECTOR_BRAND_WRAPPER, targetHeader);
      const elSearch = SelectorEngine.findOne(SELECTOR_SEARCH_WRAPPER, targetHeader);
      const elUser = SelectorEngine.findOne(SELECTOR_USER_WRAPPER, targetHeader);

      const clonedBrand = elBrand ? elBrand.cloneNode(true) : null;
      const clonedSearch = elSearch ? elSearch.cloneNode(true) : null;
      const clonedUser = elUser ? elUser.cloneNode(true) : null;

      if (clonedBrand) {
        target.insertBefore(clonedBrand, target.childNodes[0]).classList.add(CLASS_NAME_CLONED_HEADER);
      }
      if (clonedSearch) {
        target.appendChild(clonedSearch).classList.add(CLASS_NAME_CLONED_HEADER);
      }
      if (clonedUser) {
        target.appendChild(clonedUser).classList.add(CLASS_NAME_CLONED_HEADER);
        target.appendChild(clonedUser).classList.remove(CLASS_NAME_SHOW);
      }
    } else {
      SelectorEngine.find(SELECTOR_CLONED, targetHeader).forEach((item) => {
        item.parentElement.removeChild(item);
      });
    }
  }

  /*if (toAdd) {
    elSticky.nextElementSibling.style.paddingTop = navbarHeight + (isDesktop ? navOffsetTop - scrollToGap : navbarHeight - scrollToGap) + 'px'
  } else {
    elSticky.nextElementSibling.style.paddingTop = 0 + 'px'
  }*/
};

const init = (targetHeader) => {
  targetHeader.addEventListener('on.bs.sticky', () => toggleClonedElement(targetHeader, true));
  targetHeader.addEventListener('off.bs.sticky', () => toggleClonedElement(targetHeader, false));
};

SelectorEngine.find(SELECTOR_HEADER).forEach((header) => {
  init(header);
});
//# sourceMappingURL=header-sticky.js.map

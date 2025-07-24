/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import '../scss/bootstrap-italia.scss'

import { loadPlugin } from './load-plugin'
import init from './plugins/init'
import loadFonts from './plugins/fonts-loader'
import { cookies } from './plugins/util/cookies'
import * as icons from './icons'

import {
  // Bootstrap
  Alert,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Offcanvas,
  Popover,
  ScrollSpy,
  Tab,
  Toast,
  Tooltip,
  // Extra components
  Dimmer,
  Notification,
  Cookiebar,
  NavBarCollapsible,
  Accordion,
  NavScroll,
  FormValidate,
  ValidatorSelectAutocomplete,
  Input,
  SelectAutocomplete,
  InputSearchAutocomplete,
  InputPassword,
  InputNumber,
  ProgressDonut,
  UploadDragDrop,
  BackToTop,
  AcceptOverlay,
  Sticky,
  HeaderSticky,
  HistoryBack,
  Forward,
  Masonry,
  List,
  Transfer,
  VideoPlayer,
} from './bootstrap-italia.esm'

loadPlugin(icons)
init()

export default {
  Alert,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Offcanvas,
  Popover,
  ScrollSpy,
  Tab,
  Toast,
  Tooltip,
  VideoPlayer,
  AcceptOverlay,
  Accordion,
  BackToTop,
  Cookiebar,
  Dimmer,
  FormValidate,
  Forward,
  HistoryBack,
  Input,
  InputNumber,
  InputPassword,
  InputSearchAutocomplete,
  List,
  Masonry,
  NavBarCollapsible,
  NavScroll,
  Notification,
  ProgressDonut,
  SelectAutocomplete,
  Sticky,
  HeaderSticky,
  Transfer,
  UploadDragDrop,
  ValidatorSelectAutocomplete,
  loadFonts,
  cookies,
}

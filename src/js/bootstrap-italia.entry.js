import '../scss/bootstrap-italia.scss'
import { Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip } from 'bootstrap' //importing bootstrap.bundle throws a rollup compiling warning/error

import { loadPlugin } from './load-plugin'
import * as fontsLoader from './plugins/fonts-loader'
import * as icons from './icons.js'
import * as headerSticky from './plugins/header-sticky'

loadPlugin(icons)
loadPlugin(fontsLoader)
loadPlugin(headerSticky)

import {
  Dimmer,
  Notification,
  Cookiebar,
  NavBarCollapsible,
  Accordion,
  NavScroll,
  TrackFocus,
  CarouselBI,
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
  Sticky,
  HistoryBack,
  Forward,
  Masonry,
  List,
  Transfer,
} from './bootstrap-italia.esm'

window.bootstrap = {
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
  Accordion,
  BackToTop,
  CarouselBI,
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
  TrackFocus,
  Transfer,
  UploadDragDrop,
  ValidatorSelectAutocomplete,
}

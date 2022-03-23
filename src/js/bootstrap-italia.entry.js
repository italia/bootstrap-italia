import '../scss/bootstrap-italia.scss'
import { Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip } from 'bootstrap' //importing bootstrap.bundle throws a rollup compiling warning/error

import * as fontsLoader from './plugins/fonts-loader'
import * as inputs from './plugins/inputs'
import * as icons from './icons.js'

import {
  Dimmer,
  Notification,
  Cookiebar,
  NavBarCollapsible,
  Accordion,
  NavScroll,
  HeaderSticky,
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
} from './bootstrap-italia'

window.bootstrap = {
  fontsLoader, //!!!

  icons,
  inputs,
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
  HeaderSticky,
  HistoryBack,
  Input,
  InputNumber,
  InputPassword,
  InputSearchAutocomplete,
  NavBarCollapsible,
  NavScroll,
  Notification,
  ProgressDonut,
  SelectAutocomplete,
  Sticky,
  TrackFocus,
  UploadDragDrop,
  ValidatorSelectAutocomplete,
}

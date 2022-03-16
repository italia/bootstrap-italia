import '../scss/bootstrap-italia.scss'
import { Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip } from 'bootstrap' //importing bootstrap.bundle throws a rollup compiling warning/error

import './plugins/dropdown'
import './plugins/forward'
import './plugins/fonts-loader'

import Dimmer from './plugins/dimmer'
import Notification from './plugins/notification'
import Cookiebar from './plugins/cookiebar'
import NavBarCollapsible from './plugins/navbar-collapsible'
import NavScroll from './plugins/navscroll'
import HeaderSticky from './plugins/header-sticky'
import Sticky from './plugins/sticky'
import TrackFocus from './plugins/track-focus'

import './icons.js'

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

  Cookiebar,
  Dimmer,
  HeaderSticky,
  NavBarCollapsible,
  NavScroll,
  Notification,
  Sticky,
  TrackFocus,
}

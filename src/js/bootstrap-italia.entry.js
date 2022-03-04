//import '../scss/bootstrap-italia.scss'
import { Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip } from 'bootstrap' //importing bootstrap.bundle throws a rollup compiling warning/error

import './plugins/dropdown'
import './plugins/forward'

import Dimmer from './plugins/dimmer'

import foo from './foo.js'

export default function () {
  console.log(foo)
}

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

  Dimmer,
}

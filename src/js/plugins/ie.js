function isIe() {
  return window.navigator.userAgent.indexOf("MSIE ") > 0
    || !!navigator.userAgent.match(/Trident.*rv\:11\./);
}

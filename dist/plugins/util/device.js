const MEDIA_MOBILE = '(max-width: 991px)';

const isScreenMobile = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia(MEDIA_MOBILE).matches
  }
};

export { isScreenMobile };
//# sourceMappingURL=device.js.map

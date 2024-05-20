const MEDIA_MOBILE = '(max-width: 991px)'
/*const MEDIA_TABLET = ''
const MEDIA_PHONE = ''
const MEDIA_DESKTOP = ''*/

const isScreenMobile = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia(MEDIA_MOBILE).matches
  }
}

export { isScreenMobile }

import TrackFocus from './track-focus.js';
import BOOTSTRAP_ITALIA_VERSION from '../version.js';

const init = () => {
  if (!window.BOOTSTRAP_ITALIA_VERSION) {
    new TrackFocus();
    window.BOOTSTRAP_ITALIA_VERSION = BOOTSTRAP_ITALIA_VERSION;
  }
};

init();

export { init as default };
//# sourceMappingURL=init.js.map

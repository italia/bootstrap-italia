// Create our stylesheet
var fontsLoader = (path = '/node_modules/bootstrap-italia/dist/fonts') => {
  const styleNode = document.createElement('style');
  const __PUBLIC_PATH__ = window.__PUBLIC_PATH__ ? window.__PUBLIC_PATH__ : path;
  styleNode.innerHTML = `
  /* Titillium+Web:300,400,600,700 */

  /* titillium-web-300 - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.woff2') format('woff2'), /* Super Modern Browsers */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.woff') format('woff'), /* Modern Browsers */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.svg#TitilliumWeb') format('svg'); /* Legacy iOS */
  }

  /* titillium-web-300italic - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Web';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.woff') format('woff'), /* Modern Browsers */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.svg#TitilliumWeb') format('svg'); /* Legacy iOS */
  }

  /* titillium-web-regular - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.woff') format('woff'), /* Modern Browsers */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.svg#TitilliumWeb') format('svg'); /* Legacy iOS */
  }

  /* titillium-web-italic - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Web';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.woff') format('woff'), /* Modern Browsers */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.svg#TitilliumWeb') format('svg'); /* Legacy iOS */
  }

  /* titillium-web-700 - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.woff') format('woff'), /* Modern Browsers */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.svg#TitilliumWeb') format('svg'); /* Legacy iOS */
  }

  /* titillium-web-700italic - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Web';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.woff') format('woff'), /* Modern Browsers */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.svg#TitilliumWeb') format('svg'); /* Legacy iOS */
  }
  /* titillium-web-600 - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.woff2') format('woff2'), /* Super Modern Browsers */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.woff') format('woff'), /* Modern Browsers */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.svg#TitilliumWeb') format('svg'); /* Legacy iOS */
  }

  /* titillium-web-600italic - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Web';
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.woff') format('woff'), /* Modern Browsers */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('${__PUBLIC_PATH__}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.svg#TitilliumWeb') format('svg'); /* Legacy iOS */
  }

  /* Lora:400,700 */

  /* lora-regular - latin-ext_latin */
  @font-face {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-regular.woff') format('woff'), /* Modern Browsers */
        url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-regular.svg#Lora') format('svg'); /* Legacy iOS */
  }

  /* lora-700 - latin-ext_latin */
  @font-face {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-700.woff') format('woff'), /* Modern Browsers */
        url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-700.svg#Lora') format('svg'); /* Legacy iOS */
  }

  /* lora-italic - latin-ext_latin */
  @font-face {
    font-family: 'Lora';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-italic.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-italic.woff') format('woff'), /* Modern Browsers */
        url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-italic.svg#Lora') format('svg'); /* Legacy iOS */
  }

  /* lora-700italic - latin-ext_latin */
  @font-face {
    font-family: 'Lora';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-700italic.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-700italic.woff') format('woff'), /* Modern Browsers */
        url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('${__PUBLIC_PATH__}/Lora/lora-v20-latin-ext_latin-700italic.svg#Lora') format('svg'); /* Legacy iOS */
  }

  /* Roboto+Mono:400,700 */

  /* roboto-mono-regular - latin-ext_latin */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.woff') format('woff'), /* Modern Browsers */
        url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.svg#RobotoMono') format('svg'); /* Legacy iOS */
  }

  /* roboto-mono-700 - latin-ext_latin */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.woff') format('woff'), /* Modern Browsers */
        url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.svg#RobotoMono') format('svg'); /* Legacy iOS */
  }

  /* roboto-mono-italic - latin-ext_latin */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.woff') format('woff'), /* Modern Browsers */
        url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.svg#RobotoMono') format('svg'); /* Legacy iOS */
  }

  /* roboto-mono-700italic - latin-ext_latin */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.woff') format('woff'), /* Modern Browsers */
        url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('${__PUBLIC_PATH__}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.svg#RobotoMono') format('svg'); /* Legacy iOS */
  }
  `;
  document.getElementsByTagName('head')[0].appendChild(styleNode);
};

export { fontsLoader as default };
//# sourceMappingURL=fonts-loader.js.map

/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

// Font CSS generators
const getTitilliumWebCSS = (basePath) => `
  /* Titillium+Web:300,400,600,700 */

  /* titillium-web-300 - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.eot');
    src: local(''),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.woff2') format('woff2'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.woff') format('woff'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.ttf') format('truetype'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.svg#TitilliumWeb') format('svg');
  }

  /* titillium-web-300italic - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Web';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.eot');
    src: local(''),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.woff2') format('woff2'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.woff') format('woff'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.ttf') format('truetype'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.svg#TitilliumWeb') format('svg');
  }

  /* titillium-web-regular - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.eot');
    src: local(''),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.woff2') format('woff2'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.woff') format('woff'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.ttf') format('truetype'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.svg#TitilliumWeb') format('svg');
  }

  /* titillium-web-italic - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Web';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.eot');
    src: local(''),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.woff2') format('woff2'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.woff') format('woff'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.ttf') format('truetype'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.svg#TitilliumWeb') format('svg');
  }

  /* titillium-web-600 - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.eot');
    src: local(''),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.woff2') format('woff2'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.woff') format('woff'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.ttf') format('truetype'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.svg#TitilliumWeb') format('svg');
  }

  /* titillium-web-600italic - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Web';
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.eot');
    src: local(''),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.woff2') format('woff2'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.woff') format('woff'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.ttf') format('truetype'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.svg#TitilliumWeb') format('svg');
  }

  /* titillium-web-700 - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.eot');
    src: local(''),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.woff2') format('woff2'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.woff') format('woff'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.ttf') format('truetype'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.svg#TitilliumWeb') format('svg');
  }

  /* titillium-web-700italic - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Web';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.eot');
    src: local(''),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.woff2') format('woff2'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.woff') format('woff'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.ttf') format('truetype'),
        url('${basePath}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.svg#TitilliumWeb') format('svg');
  }
`;

const getTitilliumProCSS = (basePath) => `
  /* Titillium+Sans+Pro:300,400,600,700 */

  /* titillium-sans-pro-300 - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Sans Pro';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-300.eot');
    src: local(''),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-300.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-300.woff2') format('woff2'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-300.woff') format('woff'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-300.ttf') format('truetype'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-300.svg#TitilliumSansPro') format('svg');
  }

  /* titillium-sans-pro-300italic - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Sans Pro';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-300italic.eot');
    src: local(''),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-300italic.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-300italic.woff2') format('woff2'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-300italic.woff') format('woff'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-300italic.ttf') format('truetype'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-300italic.svg#TitilliumSansPro') format('svg');
  }

  /* titillium-sans-pro-regular - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-regular.eot');
    src: local(''),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-regular.woff2') format('woff2'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-regular.woff') format('woff'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-regular.ttf') format('truetype'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-regular.svg#TitilliumSansPro') format('svg');
  }

  /* titillium-sans-pro-italic - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Sans Pro';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-italic.eot');
    src: local(''),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-italic.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-italic.woff2') format('woff2'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-italic.woff') format('woff'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-italic.ttf') format('truetype'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-italic.svg#TitilliumSansPro') format('svg');
  }

  /* titillium-sans-pro-600 - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-600.eot');
    src: local(''),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-600.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-600.woff2') format('woff2'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-600.woff') format('woff'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-600.ttf') format('truetype'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-600.svg#TitilliumSansPro') format('svg');
  }

  /* titillium-sans-pro-600italic - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Sans Pro';
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-600italic.eot');
    src: local(''),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-600italic.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-600italic.woff2') format('woff2'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-600italic.woff') format('woff'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-600italic.ttf') format('truetype'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-600italic.svg#TitilliumSansPro') format('svg');
  }

  /* titillium-sans-pro-700 - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Sans Pro';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-700.eot');
    src: local(''),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-700.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-700.woff2') format('woff2'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-700.woff') format('woff'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-700.ttf') format('truetype'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-700.svg#TitilliumSansPro') format('svg');
  }

  /* titillium-sans-pro-700italic - latin-ext_latin */
  @font-face {
    font-family: 'Titillium Sans Pro';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-700italic.eot');
    src: local(''),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-700italic.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-700italic.woff2') format('woff2'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-700italic.woff') format('woff'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-700italic.ttf') format('truetype'),
        url('${basePath}/Titillium_Sans_Pro/titillium-sans-pro-v1-latin-ext_latin-700italic.svg#TitilliumSansPro') format('svg');
  }
`;

const getTitillioCSS = (basePath) => `
  /* Titillio - Light 300 */
  @font-face {
    font-family: 'Titillio';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('${basePath}/Titillio/Titillio-Light.woff2') format('woff2'),
         url('${basePath}/Titillio/Titillio-Light.woff') format('woff'),
         url('${basePath}/Titillio/Titillio-Light.ttf') format('truetype');
  }

  /* Titillio - Regular 400 */
  @font-face {
    font-family: 'Titillio';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('${basePath}/Titillio/Titillio-Regular.woff2') format('woff2'),
         url('${basePath}/Titillio/Titillio-Regular.woff') format('woff'),
         url('${basePath}/Titillio/Titillio-Regular.ttf') format('truetype');
  }

  /* Titillio - Italic 400 */
  @font-face {
    font-family: 'Titillio';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('${basePath}/Titillio/Titillio-Italic.woff2') format('woff2'),
         url('${basePath}/Titillio/Titillio-Italic.woff') format('woff'),
         url('${basePath}/Titillio/Titillio-Italic.ttf') format('truetype');
  }

  /* Titillio - Semibold 600 */
  @font-face {
    font-family: 'Titillio';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('${basePath}/Titillio/Titillio-Semibold.woff2') format('woff2'),
         url('${basePath}/Titillio/Titillio-Semibold.woff') format('woff'),
         url('${basePath}/Titillio/Titillio-Semibold.ttf') format('truetype');
  }

  /* Titillio - Semibold Italic 600 */
  @font-face {
    font-family: 'Titillio';
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url('${basePath}/Titillio/Titillio-SemiboldItalic.woff2') format('woff2'),
         url('${basePath}/Titillio/Titillio-SemiboldItalic.woff') format('woff'),
         url('${basePath}/Titillio/Titillio-SemiboldItalic.ttf') format('truetype');
  }

  /* Titillio - Bold 700 */
  @font-face {
    font-family: 'Titillio';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('${basePath}/Titillio/Titillio-Bold.woff2') format('woff2'),
         url('${basePath}/Titillio/Titillio-Bold.woff') format('woff'),
         url('${basePath}/Titillio/Titillio-Bold.ttf') format('truetype');
  }

  /* Titillio - Bold Italic 700 */
  @font-face {
    font-family: 'Titillio';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url('${basePath}/Titillio/Titillio-BoldItalic.woff2') format('woff2'),
         url('${basePath}/Titillio/Titillio-BoldItalic.woff') format('woff'),
         url('${basePath}/Titillio/Titillio-BoldItalic.ttf') format('truetype');
  }
`;

const getLoraCSS = (basePath) => `
  /* Lora:400,700 */

  /* lora-regular - latin-ext_latin */
  @font-face {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('${basePath}/Lora/lora-v20-latin-ext_latin-regular.eot');
    src: local(''),
        url('${basePath}/Lora/lora-v20-latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Lora/lora-v20-latin-ext_latin-regular.woff2') format('woff2'),
        url('${basePath}/Lora/lora-v20-latin-ext_latin-regular.woff') format('woff'),
        url('${basePath}/Lora/lora-v20-latin-ext_latin-regular.ttf') format('truetype'),
        url('${basePath}/Lora/lora-v20-latin-ext_latin-regular.svg#Lora') format('svg');
  }

  /* lora-700 - latin-ext_latin */
  @font-face {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('${basePath}/Lora/lora-v20-latin-ext_latin-700.eot');
    src: local(''),
        url('${basePath}/Lora/lora-v20-latin-ext_latin-700.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Lora/lora-v20-latin-ext_latin-700.woff2') format('woff2'),
        url('${basePath}/Lora/lora-v20-latin-ext_latin-700.woff') format('woff'),
        url('${basePath}/Lora/lora-v20-latin-ext_latin-700.ttf') format('truetype'),
        url('${basePath}/Lora/lora-v20-latin-ext_latin-700.svg#Lora') format('svg');
  }

  /* lora-italic - latin-ext_latin */
  @font-face {
    font-family: 'Lora';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('${basePath}/Lora/lora-v20-latin-ext_latin-italic.eot');
    src: local(''),
        url('${basePath}/Lora/lora-v20-latin-ext_latin-italic.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Lora/lora-v20-latin-ext_latin-italic.woff2') format('woff2'),
        url('${basePath}/Lora/lora-v20-latin-ext_latin-italic.woff') format('woff'),
        url('${basePath}/Lora/lora-v20-latin-ext_latin-italic.ttf') format('truetype'),
        url('${basePath}/Lora/lora-v20-latin-ext_latin-italic.svg#Lora') format('svg');
  }

  /* lora-700italic - latin-ext_latin */
  @font-face {
    font-family: 'Lora';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url('${basePath}/Lora/lora-v20-latin-ext_latin-700italic.eot');
    src: local(''),
        url('${basePath}/Lora/lora-v20-latin-ext_latin-700italic.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Lora/lora-v20-latin-ext_latin-700italic.woff2') format('woff2'),
        url('${basePath}/Lora/lora-v20-latin-ext_latin-700italic.woff') format('woff'),
        url('${basePath}/Lora/lora-v20-latin-ext_latin-700italic.ttf') format('truetype'),
        url('${basePath}/Lora/lora-v20-latin-ext_latin-700italic.svg#Lora') format('svg');
  }
`;

const getRobotoMonoCSS = (basePath) => `
  /* Roboto+Mono:400,700 */

  /* roboto-mono-regular - latin-ext_latin */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.eot');
    src: local(''),
        url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.woff2') format('woff2'),
        url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.woff') format('woff'),
        url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.ttf') format('truetype'),
        url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.svg#RobotoMono') format('svg');
  }

  /* roboto-mono-700 - latin-ext_latin */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.eot');
    src: local(''),
        url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.woff2') format('woff2'),
        url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.woff') format('woff'),
        url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.ttf') format('truetype'),
        url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.svg#RobotoMono') format('svg');
  }

  /* roboto-mono-italic - latin-ext_latin */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.eot');
    src: local(''),
        url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.woff2') format('woff2'),
        url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.woff') format('woff'),
        url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.ttf') format('truetype'),
        url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.svg#RobotoMono') format('svg');
  }

  /* roboto-mono-700italic - latin-ext_latin */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.eot');
    src: local(''),
        url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.eot?#iefix') format('embedded-opentype'),
        url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.woff2') format('woff2'),
        url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.woff') format('woff'),
        url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.ttf') format('truetype'),
        url('${basePath}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.svg#RobotoMono') format('svg');
  }
`;

// Font configuration map
const fontGenerators = {
  'titillium-web': getTitilliumWebCSS,
  'titillium-pro': getTitilliumProCSS,
  'titillio': getTitillioCSS,
  'lora': getLoraCSS,
  'roboto-mono': getRobotoMonoCSS
};

// Main loadFonts function
export default (path = '/node_modules/bootstrap-italia/dist/fonts', options = {}) => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // Backward compatibility: if called without options, use legacy behavior
  if (Object.keys(options).length === 0) {
    // Original hardcoded behavior - load all three fonts with Titillium Web
    options = {
      titillium: 'web',
      fonts: ['titillium', 'lora', 'roboto-mono']
    };
  }

  // Extract options with defaults
  const {
    titillium = 'web',           // 'web' | 'pro' | 'titillio'
    fonts = ['titillium', 'lora', 'roboto-mono']  // which font families to include
  } = options;

  // Map titillium variant to specific font ID
  const titilliumFontId = titillium === 'pro' ? 'titillium-pro' 
                        : titillium === 'titillio' ? 'titillio'
                        : 'titillium-web';

  // Build final font list - replace 'titillium' with the specific variant
  const finalFonts = fonts.map(font => 
    font === 'titillium' ? titilliumFontId : font
  );

  // Resolve path
  const __PUBLIC_PATH__ = window.__PUBLIC_PATH__ ? window.__PUBLIC_PATH__ : path;

  // Generate CSS for requested fonts
  const cssChunks = finalFonts
    .filter(fontId => fontGenerators[fontId])  // only valid fonts
    .map(fontId => fontGenerators[fontId](__PUBLIC_PATH__));

  const finalCSS = cssChunks.join('\n');

  // Create and inject stylesheet
  const styleNode = document.createElement('style');
  styleNode.innerHTML = finalCSS;
  document.getElementsByTagName('head')[0].appendChild(styleNode);
};

// Export convenience functions for individual font loading
export const loadTitilliumWeb = (path) => loadFonts(path, { titillium: 'web', fonts: ['titillium'] });
export const loadTitilliumPro = (path) => loadFonts(path, { titillium: 'pro', fonts: ['titillium'] });
export const loadTitillio = (path) => loadFonts(path, { titillium: 'titillio', fonts: ['titillium'] });

/*
USAGE EXAMPLES:

// Backward compatible - unchanged behavior
loadFonts('/fonts');

// Load only Titillium Sans Pro
loadFonts('/fonts', { titillium: 'sans-pro', fonts: ['titillium'] });

// Load only Titillio
loadFonts('/fonts', { titillium: 'titillio', fonts: ['titillium'] });

// Load Titillium Sans Pro + Lora (no Roboto Mono)
loadFonts('/fonts', { titillium: 'sans-pro', fonts: ['titillium', 'lora'] });

// Load all fonts with Titillio as the Titillium variant
loadFonts('/fonts', { titillium: 'titillio' });

// Convenience functions
loadTitilliumWeb('/fonts');     // Only Titillium Web
loadTitilliumSansPro('/fonts'); // Only Titillium Sans Pro  
loadTitillio('/fonts');         // Only Titillio

POSSIBLE VALUES:
- titillium: 'web' | 'sans-pro' | 'titillio'
- fonts: ['titillium', 'lora', 'roboto-mono'] (any combination)
*/
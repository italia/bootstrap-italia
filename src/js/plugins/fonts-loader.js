// Create our stylesheet
var styleNode = document.createElement('style')
const __PUBLIC_PATH__ = window.__PUBLIC_PATH__
  ? window.__PUBLIC_PATH__
  : '/bootstrap-italia/dist/fonts'
styleNode.innerHTML = `
/* Titillium+Web:300,400,600,700 */

/* latin-ext */
@font-face {
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 300;
  src: local('Titillium Web Light'), local('TitilliumWeb-Light'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-Light.woff2) format('woff2'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-Light.woff) format('woff'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-Light.ttf) format('truetype');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 300;
  src: local('Titillium Web Light'), local('TitilliumWeb-Light'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-Light.woff2) format('woff2'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-Light.woff) format('woff'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-Light.ttf) format('truetype');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 400;
  src: local('Titillium Web Regular'), local('TitilliumWeb-Regular'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-Regular.woff2) format('woff2'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-Regular.woff) format('woff'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-Regular.ttf) format('truetype');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 400;
  src: local('Titillium Web Regular'), local('TitilliumWeb-Regular'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-Regular.woff2) format('woff2'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-Regular.woff) format('woff'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-Regular.ttf) format('truetype');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 600;
  src: local('Titillium Web SemiBold'), local('TitilliumWeb-SemiBold'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-SemiBold.woff2) format('woff2'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-SemiBold.woff) format('woff'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-SemiBold.ttf) format('truetype');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 600;
  src: local('Titillium Web SemiBold'), local('TitilliumWeb-SemiBold'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-SemiBold.woff2) format('woff2'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-SemiBold.woff) format('woff'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-SemiBold.ttf) format('truetype');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 700;
  src: local('Titillium Web Bold'), local('TitilliumWeb-Bold'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-Bold.woff2) format('woff2'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-Bold.woff) format('woff'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-Bold.ttf) format('truetype');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 700;
  src: local('Titillium Web Bold'), local('TitilliumWeb-Bold'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-Bold.woff2) format('woff2'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-Bold.woff) format('woff'),
  url(${__PUBLIC_PATH__}/Titillium_Web/TitilliumWeb-Bold.ttf) format('truetype');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* Lora:400,700 */

/* latin-ext */
@font-face {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  src: local('Lora Regular'), local('Lora-Regular'),
  url(${__PUBLIC_PATH__}/Lora/Lora-Regular.woff2) format('woff2'),
  url(${__PUBLIC_PATH__}/Lora/Lora-Regular.woff) format('woff'),
  url(${__PUBLIC_PATH__}/Lora/Lora-Regular.ttf) format('truetype');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  src: local('Lora Regular'), local('Lora-Regular'),
  url(${__PUBLIC_PATH__}/Lora/Lora-Regular.woff2) format('woff2'),
  url(${__PUBLIC_PATH__}/Lora/Lora-Regular.woff) format('woff'),
  url(${__PUBLIC_PATH__}/Lora/Lora-Regular.ttf) format('truetype');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 700;
  src: local('Lora Bold'), local('Lora-Bold'),
  url(${__PUBLIC_PATH__}/Lora/Lora-Bold.woff2) format('woff2'),
  url(${__PUBLIC_PATH__}/Lora/Lora-Bold.woff) format('woff'),
  url(${__PUBLIC_PATH__}/Lora/Lora-Bold.ttf) format('truetype');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 700;
  src: local('Lora Bold'), local('Lora-Bold'),
  url(${__PUBLIC_PATH__}/Lora/Lora-Bold.woff2) format('woff2'),
  url(${__PUBLIC_PATH__}/Lora/Lora-Bold.woff) format('woff'),
  url(${__PUBLIC_PATH__}/Lora/Lora-Bold.ttf) format('truetype');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* Roboto+Mono:400,700 */

/* latin-ext */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto Mono'), local('RobotoMono-Regular'),
  url(${__PUBLIC_PATH__}/Roboto_Mono/RobotoMono-Regular.woff2) format('woff2'),
  url(${__PUBLIC_PATH__}/Roboto_Mono/RobotoMono-Regular.woff) format('woff'),
  url(${__PUBLIC_PATH__}/Roboto_Mono/RobotoMono-Regular.ttf) format('truetype');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto Mono'), local('RobotoMono-Regular'),
  url(${__PUBLIC_PATH__}/Roboto_Mono/RobotoMono-Regular.woff2) format('woff2'),
  url(${__PUBLIC_PATH__}/Roboto_Mono/RobotoMono-Regular.woff) format('woff'),
  url(${__PUBLIC_PATH__}/Roboto_Mono/RobotoMono-Regular.ttf) format('truetype');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 700;
  src: local('Roboto Mono Bold'), local('RobotoMono-Bold'),
  url(${__PUBLIC_PATH__}/Roboto_Mono/RobotoMono-Bold.woff2) format('woff2'),
  url(${__PUBLIC_PATH__}/Roboto_Mono/RobotoMono-Bold.woff) format('woff'),
  url(${__PUBLIC_PATH__}/Roboto_Mono/RobotoMono-Bold.ttf) format('truetype');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 700;
  src: local('Roboto Mono Bold'), local('RobotoMono-Bold'),
  url(${__PUBLIC_PATH__}/Roboto_Mono/RobotoMono-Bold.woff2) format('woff2'),
  url(${__PUBLIC_PATH__}/Roboto_Mono/RobotoMono-Bold.woff) format('woff'),
  url(${__PUBLIC_PATH__}/Roboto_Mono/RobotoMono-Bold.ttf) format('truetype');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`

document.body.appendChild(styleNode)

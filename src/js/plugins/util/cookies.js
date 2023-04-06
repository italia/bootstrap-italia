let preferencesMap = { ck3: {} }

/*
  Possible choices:
  0 => Do not accept
  1 => Accept once
  2 => Accept always
*/
const setCookiePreference = (service, choice = 0) => {
  preferencesMap.ck3[service] = choice
}

const getCookiePreference = (service) => {
  return preferencesMap.ck3[service]
}

export { setCookiePreference, getCookiePreference }

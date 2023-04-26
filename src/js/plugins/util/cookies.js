const preferencesMap = { ck3: {} }

/*
  Possible choices:
  Not present => Do not accept
  1 => Accept once
  2 => Accept always
*/
const setCookiePreference = (service, remember) => {
  preferencesMap.ck3[service] = remember
  localStorage.setItem("bs-ck3", JSON.stringify(preferencesMap.ck3));
}

const getCookiePreference = (service) => {
  preferencesMap.ck3 = JSON.parse(localStorage.getItem("bs-ck3") || "{}")
  return preferencesMap.ck3[service] || false
}

export { setCookiePreference, getCookiePreference }

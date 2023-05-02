const preferencesMap = { ck3: {} };

/*
  Possible choices:
  false => Accept once
  true => Accept always
*/
const rememberChoice = (service, remember) => {
  preferencesMap.ck3[service] = remember;
  localStorage.setItem('bs-ck3', JSON.stringify(preferencesMap.ck3));
};

const isChoiceRemembered = (service) => {
  preferencesMap.ck3 = JSON.parse(localStorage.getItem('bs-ck3') || '{}');
  return preferencesMap.ck3[service] || false
};

const clearAllRememberedChoices = () => {
  localStorage.removeItem('bs-ck3');
};

const cookies = {
  rememberChoice,
  isChoiceRemembered,
  clearAllRememberedChoices,
};

export { cookies };
//# sourceMappingURL=cookies.js.map

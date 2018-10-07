import i18n from "i18next";

const supportedLanguages = ['en', 'fr'];
const defaultLanguages =  { current: supportedLanguages[0], all: supportedLanguages};

const languages = (state = defaultLanguages, action) => {
  switch (action.type) {
    case 'INIT': 
     return defaultLanguages
    case 'SET_LANGUAGE':
      i18n.changeLanguage(action.id);
      return {...state, current: action.id}
    default:
      return state
  }
}

export default languages

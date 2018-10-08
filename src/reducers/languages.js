
const supportedLanguages = ['en', 'fr', 'zh'];
const defaultLanguages =  { current: supportedLanguages[0], all: supportedLanguages};

const languages = (state = defaultLanguages, action) => {
  switch (action.type) {
    case 'INIT': 
     return defaultLanguages
    case 'SET_LANGUAGE':
      return {...state, current: action.id}
    default:
      return state
  }
}

export default languages

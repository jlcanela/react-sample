import i18n from "i18next";

export const initItems = () => ({
    type: 'INIT_ITEMS',
  })

export const selectItem = (id) => ({
  type: 'SELECT_ITEM',
  id,
})

export function selectLanguage(lang) {
  return dispatch => {
    i18n.changeLanguage(lang, () => 
      dispatch({
        type: 'SET_LANGUAGE',
        id: lang,
    }));
  }
}

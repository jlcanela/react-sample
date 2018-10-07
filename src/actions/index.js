export const initItems = () => ({
    type: 'INIT_ITEMS',
  })

export const selectItem = (id) => ({
  type: 'SELECT_ITEM',
  id,
})

export const selectLanguage = (id) => ({
  type: 'SET_LANGUAGE',
  id,
})

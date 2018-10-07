let id = 0;
function createData(name, date, selected) {
  id += 1;
  return { id, name, date, selected };
}

const defaultState = [
  createData('Frozen yoghurt', new Date(), true),
  createData('Ice cream sandwich', new Date(), false),
  createData('Eclair', new Date(), false),
  createData('Cupcake', new Date(), false),
  createData('Gingerbread', new Date(), false),
];

const items = (state = defaultState, action) => {
    switch (action.type) {
      case 'INIT': 
        return [
          ...defaultState,
        ]
      case 'SELECT_ITEM':
        return state.map(item => ({ ...item, selected: action.id === item.id }))
      default:
        return state
    }
  }

export default items;

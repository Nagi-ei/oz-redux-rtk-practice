export const addItem = (options, quantity, id) => ({
  type: 'ADD',
  payload: { options, quantity, id },
});
export const deleteItem = (id) => ({ type: 'DELETE', payload: { id } });

export function cartReducer(state = [], action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'DELETE':
      return state.filter((el) => action.payload.id !== el.id);
    default:
      return state;
  }
}

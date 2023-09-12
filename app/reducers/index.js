export default function counter(state = {count: 0}, action) {
  console.log(action.type);
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {count: state.count + 1})

    case 'DECREMENT':
      return Object.assign({}, state, {count: state.count - 1})
    case 'FETCH_SUCCEEDED':
      console.log('fetch_succeeded ', action);
      return state

    default:
      return state
  }
}
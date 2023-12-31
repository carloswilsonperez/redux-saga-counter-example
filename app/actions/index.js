export const increment = () => ({type: 'INCREMENT'});
export const decrement = () => ({type: 'DECREMENT'});
export const incrementAsync = () => ({type: 'INCREMENT_ASYNC'});
export const decrementAsync = () => ({type: 'DECREMENT_ASYNC'});
export const fetchData = () => ({
  type: 'FETCH_REQUESTED',
  payload: {
    url: 'https://jsonplaceholder.typicode.com/posts/1'
  }
});

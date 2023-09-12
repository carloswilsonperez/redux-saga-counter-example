import { call, put, take, fork, cancel } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const Api = {
  async fetchUser(url) {
    const result = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  
    return result;
  }
};

export function* incrementAsync() {
  yield call(delay, 2000)
  yield put({type: 'INCREMENT'})
}

function* increment() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* decrementAsync() {
  yield call(delay, 2000)
  yield put({type: 'DECREMENT'})
}

function* decrement() {
  yield takeEvery('DECREMENT_ASYNC', decrementAsync)
}

export function* fetchData(action) {
  try {
    const data = yield call(Api.fetchUser, action.payload.url);
    // JSON data is now available
    console.log('data =', data);
    // Sending the proper action with the downloaded data
    yield put({ type: 'FETCH_SUCCEEDED', data })
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error })
  }
}

function* watchFetchData() {
  yield takeEvery('FETCH_REQUESTED', fetchData)
}

export default function* root() {
  yield [
    increment(),
    decrement(),
    watchFetchData()
  ]
}
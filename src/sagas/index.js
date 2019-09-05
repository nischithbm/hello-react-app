import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchOrders() {
  const orders = yield fetch('http://my-json-server.typicode.com/nischithbm/demo/orders')
                        .then(response => response.json());
  console.log("Saga: Got the response", orders);
  yield put({ type: "GET_ORDERS_SUCCESS", data: { orders } });
}

function* actionWatcher() {
     yield takeLatest('GET_ORDERS', fetchOrders)
}

export default function* rootSaga() {
   yield all([
    actionWatcher(),
   ]);
}
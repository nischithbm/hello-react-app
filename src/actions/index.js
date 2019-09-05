export const fetchOrders = () => ({
    type: 'GET_ORDERS',
});

export const fetchOrdersSuccess = (data) => ({
    type: 'GET_ORDERS_SUCCESS',
    data
});

export const fetchOrdersFailed = (data) => ({
    type: 'GET_ORDERS_FAIL',
    data
});
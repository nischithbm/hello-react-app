const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ORDERS_SUCCESS':
            return Object.assign({}, state, {
                orders: action.data.orders
            });
        default:
            return state;
    }
};
export default reducer;
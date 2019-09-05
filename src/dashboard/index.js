import { connect } from 'react-redux';

import { fetchOrders } from '../actions';
import Dashboard from './Dashboard';

const mapStateToProps = (state) => ({
    orders: state.orders,
});

const mapDispatchToProps = {
    fetchOrders: fetchOrders,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
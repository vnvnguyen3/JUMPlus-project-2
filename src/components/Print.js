import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Print extends Component {
    render(){
        const transactions = this.props.user.user.transactions.map(transaction => (
            <p>{transaction}</p>
        ));
        return (
            <div>
                <h2>Print Transactions</h2>
                {transactions}
                <br />
                <Link to="/transactions">
                    Go back
                </Link>
            </div>
        )
    }
}

Print.propTypes = {
    user: PropTypes.object
}

const mapStateToProps = state => ({
    user: state.users.user
})

export default connect(mapStateToProps, {})(Print);
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Transactions extends Component {
    render(){
        return (
            <div>
                <h2>What transaction would you like to make?</h2>
                <Link to="/balance">
                    Account Balance
                </Link>
                <br />
                <Link to="/print">
                    Print Transactions
                </Link>
                <br />
                <Link to="/update">
                    Update PIN
                </Link>
                <br />
                <Link to="/withdraw">
                    Withdraw Amount
                </Link>
                <br />
                <Link to="/deposit">
                    Deposit Amount
                </Link>
                <br />
            </div>
        )
    }
}

Transactions.propTypes = {
    user: PropTypes.object
}

const mapStateToProps = state => ({
    user: state.users.user
})

export default connect(mapStateToProps, {})(Transactions);
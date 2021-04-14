import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Balance extends Component {
    render(){
        return (
            <div>
                <h2>Your account currently has ${this.props.user.user.amount}</h2>
                <Link to="/transactions">
                    Go back
                </Link>
                <br />
            </div>
        )
    }
}

Balance.propTypes = {
    user: PropTypes.object
}

const mapStateToProps = state => ({
    user: state.users.user
})

export default connect(mapStateToProps, {})(Balance);
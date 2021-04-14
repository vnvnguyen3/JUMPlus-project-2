import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
    render(){
        return (
            <div>
                <h2>Would you like to make a log in or open a new account?</h2>
                <Link to="/login">
                    Login
                </Link>
                <br />
                <Link to="/new">
                    New Account
                </Link>
                <br />
            </div>
        )
    }
}

Home.propTypes = {
    user: PropTypes.object
}

const mapStateToProps = state => ({
    user: state.users.user
})

export default connect(mapStateToProps, {})(Home);

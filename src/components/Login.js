import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/userActions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = this.props.users.filter(user => user.user.pin === this.state.pin)[0];
        if(typeof user !== 'undefined'){
            alert("You have successfully logged in");
            this.props.login(user);
        }else {
            alert("pin does not exist");
        }
    }

    render(){
        return (
            <div>
                <h2>Enter your pin</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label for="pin">Pin: </label> <br />
                        <input type="text" name="pin" onChange={this.onChange} 
                            value={this.state.pin} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
                <Link to="/">
                    Go Back
                </Link>
                <Link to="/transactions">Transactions</Link>
            </div>
        )
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    users: PropTypes.array
}

const mapStateToProps = state => ({
    users: state.users.users
})

export default connect(mapStateToProps, {login})(Login);
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/userActions';

class NewAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: '',
            verify: '',
            deposit: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        
        const userExists = this.props.users.filter(user => user.pin === this.state.pin)[0];
        if(this.state.pin === "" || this.state.verify === "" || this.state.deposit === ""){
            alert("You cannot leave any field blank")
        }else if(typeof userExists !== 'undefined'){
            alert("User already exists");
        }else if(this.state.pin !== this.state.verify){
            alert("pins do not match");
        }else if(this.state.pin.length !== 4){
            alert("pin is not the correct length");
        }else if(isNaN(this.state.pin)){
            alert("pin needs to be a number")
        }else if(isNaN(this.state.deposit)){
            alert("deposit needs to be a number")
        }else{
            const user = {
                pin: this.state.pin,
                amount: this.state.deposit,
                transactions: []
            }
    
            this.props.signup(user);
            alert("you have successfully created a new account. Click go back to return to home page or go to transactions");
        }
    }

    render() {
        return (
            <div>
                <h2>Enter pin and make a deposit</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label for="pin">Secure pin (4 digit number): </label> <br />
                        <input type="text" name="pin" onChange={this.onChange} 
                            value={this.state.pin} />
                    </div>
                    <br />
                    <div>
                        <label for="verify">Verify pin: </label> <br />
                        <input type="text" name="verify" onChange={this.onChange} 
                            value={this.state.verify} />
                    </div>
                    <br />
                    <div>
                        <label for="deposit">Enter initial deposit: </label> <br />
                        <input type="number" name="deposit" onChange={this.onChange} 
                            value={this.state.deposit} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                    <br />
                    <Link to="/">
                        Go Back
                    </Link>
                    <br />
                    <Link to="/transactions">Transactions</Link>
                </form>
            </div>
        )
    }
}

NewAccount.propTypes = {
    signup: PropTypes.func.isRequired,
    users: PropTypes.array
}

const mapStateToProps = state => ({
    users: state.users.users
})

export default connect(mapStateToProps, {signup})(NewAccount);
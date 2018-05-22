import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/FlatButton";
import {connect} from 'react-redux';

//Components
import style from './Home.css';

export default class Form extends React.Component {
    state = {
        walletSource: "",
        walletSourceError: "",
        walletTarget: "",
        walletTargetError: "",
        type: "",
        typeError: "",
        amount: "",
        amountError: "",
        minAmount: "",
        minAmountError: "",
        maxAmount:"",
        maxAmountError:""
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    validate = () => {
        let isError = false;
        const errors = {
            walletSourceError: "",
            walletTargetError: "",
            typeError: "",
            amountError: "",
            minAmountError: "",
            maxAmount:""
        };

        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    };

    onSubmit = e => {
        e.preventDefault();
        const err = this.validate();
        if (!err) {
            this.props.onSubmit(this.state);
            // clear form
            this.setState({
                walletSource: "",
                walletSourceError: "",
                walletTarget: "",
                walletTargetError: "",
                type: "",
                typeError: "",
                amount: "",
                amountError: "",
                minAmount: "",
                minAmountError: "",
                maxAmount:"",
                maxAmountError:""
            });
        }
    };

    render() {
        return (
            <MuiThemeProvider>
                <div className="header">Set the wallet rules</div>
            <form>
                <div className="formContainer">
                <TextField
                    name="walletSource"
                    hintText="wallet Source"
                    floatingLabelText="wallet Source"
                    value={this.state.walletSource}
                    onChange={e => this.change(e)}
                    errorText={this.state.walletSourceError}
                    floatingLabelFixed
                />
                <br />
                <TextField
                    name="walletTarget"
                    hintText="Wallet Target"
                    floatingLabelText="Wallet Target"
                    value={this.state.walletTarget}
                    onChange={e => this.change(e)}
                    errorText={this.state.walletTargetError}
                    floatingLabelFixed
                />
                <br />
                <TextField
                    name="type"
                    hintText="type"
                    floatingLabelText="type"
                    value={this.state.type}
                    onChange={e => this.change(e)}
                    errorText={this.state.typeError}
                    floatingLabelFixed
                />
                <br />
                <TextField
                    name="amount"
                    hintText="amount"
                    floatingLabelText="amount"
                    value={this.state.amount}
                    onChange={e => this.change(e)}
                    errorText={this.state.amountError}
                    floatingLabelFixed
                />
                <br />
                <TextField
                    name="minAmount"
                    hintText="minAmount"
                    floatingLabelText="minAmount"
                    value={this.state.minAmount}
                    onChange={e => this.change(e)}
                    errorText={this.state.minAmountError}
                    floatingLabelFixed
                />
                <br />
                <TextField
                    name="maxAmount"
                    hintText="maxAmount"
                    floatingLabelText="maxAmount"
                    value={this.state.maxAmount}
                    onChange={e => this.change(e)}
                    errorText={this.state.maxAmountError}
                    floatingLabelFixed
                />
                <br />
                <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
                </div>
            </form>
            </MuiThemeProvider>
        );
    }
}


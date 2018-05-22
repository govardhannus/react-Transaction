import React, {Component} from 'react';
import Form from './Form'
import Table from './Table'
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from "material-ui/FlatButton";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from 'material-ui/MenuItem';
import {TextField} from'redux-form-material-ui'
import style from './Home.css';


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data:  [
                { walletSource: "Paytm",walletTarget:"Paytm",type:"Paytm",amount:"180",minAmount:"20",maxAmount:"180"}
            ],
            value: 'Paytm',
            amount: "",
        };
    }
    onSubmit = e => {
        e.preventDefault();
        alert('data is inserted')
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleChange = (event, index, value) => this.setState({value});

    render() {

        var source;
        for (var i=0 ;i<=this.state.data.length;i++){
            this.state.data[0].walletSource === this.state.value ?
                source =   <MuiThemeProvider>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={"Paytm"} primaryText="Paytm" />
                        <MenuItem value={"payback"} primaryText="payback" />
                        <MenuItem value={"freecharge"} primaryText="freecharge" />
                        <MenuItem value={"KWIK"} primaryText="KWIK" />
                        <MenuItem value={"uber"} primaryText="uber" />
                    </DropDownMenu>
                </MuiThemeProvider>
                :
                source = "Please set the rule"
        }
        var target;
        for (var i=0 ;i<=this.state.data.length;i++){
            this.state.data[0].walletTarget === this.state.value ?
                target =   <MuiThemeProvider>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={"Paytm"} primaryText="Paytm" />
                        <MenuItem value={"payback"} primaryText="payback" />
                        <MenuItem value={"freecharge"} primaryText="freecharge" />
                        <MenuItem value={"KWIK"} primaryText="KWIK" />
                        <MenuItem value={"uber"} primaryText="uber" />
                    </DropDownMenu>
                    <TextField
                        name="amount"
                        type="number"
                        hintText="amount"
                        floatingLabelText="amount"
                        min={this.state.data[0].minAmount} max={this.state.data[0].maxAmount}
                        value={this.state.amount}
                        onChange={e => this.change(e)}
                        errorText={this.state.amountError}
                        floatingLabelFixed
                    />
                    <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
                </MuiThemeProvider>
                :
                target = "Please set the rule"
        }
        return (
            <div>
                <Form
                    onSubmit={submission =>
                        this.setState({
                            data: [...this.state.data, submission]
                        })}

                />
                <Table
                    data={this.state.data}
                    header={[
                        {
                            name: "Wallet Source",
                            prop: "Wallet Source"
                        },
                        {
                            name: "Wallet Target",
                            prop: "Wallet Target"
                        },
                        {
                            name: "Type",
                            prop: "Type"
                        },
                        {
                            name: "Amount",
                            prop: "Amount"
                        },
                        {
                            name: "Min Amount",
                            prop: "Min Amount"
                        },
                        {
                            name: "Max Amount",
                            prop: "Max Amount"
                        }
                    ]}
                />
                <div className="header">Wallet</div>
                <div className="formContainer">

                        <MuiThemeProvider>
                            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                                <MenuItem value={"Paytm"} primaryText="Paytm" />
                                <MenuItem value={"payback"} primaryText="payback" />
                                <MenuItem value={"freecharge"} primaryText="freecharge" />
                                <MenuItem value={"KWIK"} primaryText="KWIK" />
                                <MenuItem value={"uber"} primaryText="uber" />
                            </DropDownMenu>
                        </MuiThemeProvider>
                    <div>
                        {source}
                    </div>
                    <div>
                        {target}
                    </div>
                </div>
            </div>
        )
    }
}
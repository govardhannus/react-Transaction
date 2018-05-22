import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <Table>
                        <TableHeader>
                            <TableRow>
                            {this.props.header.map((x, i) => {
                                return (
                                    <TableHeaderColumn>{x.name}</TableHeaderColumn>
                                )
                            })}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {this.props.data.map((x, i) => {
                                return (
                                    <TableRow>
                                        <TableHeaderColumn>{x.walletSource}</TableHeaderColumn>
                                        <TableHeaderColumn>{x.walletTarget}</TableHeaderColumn>
                                        <TableHeaderColumn>{x.type}</TableHeaderColumn>
                                        <TableHeaderColumn>{x.amount}</TableHeaderColumn>
                                        <TableHeaderColumn>{x.minAmount}</TableHeaderColumn>
                                        <TableHeaderColumn>{x.maxAmount}</TableHeaderColumn>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </MuiThemeProvider>
            </div>
        )
    }
}
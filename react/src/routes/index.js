import React, {Component} from 'react';
import {Route, BrowserRouter,Redirect} from 'react-router-dom';

//components
import Home from '../Components/Home'

class index extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default index;
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import cors from 'cors'

import {Navigation, Main} from './components';

class App extends Component {

    render() {
        return (
            <div>
                <Navigation/>
                <Main/>
            </div>
        );
    }
}

export default App;

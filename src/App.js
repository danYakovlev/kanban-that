import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Routes from './Routes';

import stores from './stores/index';

import './App.scss';


class App extends Component {
    render() {
        return (
            <Provider {...stores} >
                <Router>
                    <Routes />
                </Router>
            </Provider>
        );
    }
}

export default App;

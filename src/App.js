import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';

import stores from './stores/index';

class App extends Component {
    render() {
        return (
            <Provider {...stores} >
                <Router>
                    <div>
                        <Routes />
                        <DevTools />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;

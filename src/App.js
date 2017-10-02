import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import stores from './stores/index';

class App extends Component {
    render() {
        return (
            <Provider { ...stores }>
                <DevTools />
            </Provider>
        )
    }
}

export default App;
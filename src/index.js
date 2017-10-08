import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';


const rootElement = document.getElementById('root');

const renderApp = Component => {
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        rootElement,
    );
};

renderApp(App);

if (module.hot) module.hot.accept('./App', () => renderApp(App));

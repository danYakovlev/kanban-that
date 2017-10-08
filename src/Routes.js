import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './views/Main';
import NotFound from './views/NotFound';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Main} />

        <Route component={NotFound} />
    </Switch>
);

export default Routes;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './views/Main';
import Board from './views/Board';
import NotFound from './views/NotFound';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/board" component={Board} />

        <Route component={NotFound} />
    </Switch>
);

export default Routes;

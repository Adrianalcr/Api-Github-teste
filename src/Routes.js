import React from 'react';

import {
    BrowserRouter as BRouter,
    Switch,
    Route
} from 'react-router-dom';

import Perfil from './Perfil';
import Repo from './Repo';

const Routes = () => (
    <BRouter>
        <Switch>
            <Route path="/users" exact component={ Perfil } />
            <Route path="/repos" component={ Repo } />
        </Switch>
    </BRouter>
)

export default Routes;
import React from 'react';
import { Switch, Route } from "react-router-dom";
import pathNames from './utils/pathnames';
import Home from './pages/Home';
/*
import Instruccionts  from './pages/Instruccionts';
import Form  from './pages/Form';
import UserForm  from './pages/UserForm';
import Ending  from './pages/Ending';
import Login  from './pages/Login';
import Dashboard  from './pages/Dashboard';
import FormEmbu from './pages/FormEmbu';
import FormUserEmbu from './pages/FormUserEmbu';
import EndingEmbu from './pages/EndingEmbu';
import NotFound from './pages/NotFound';
import InstrucctionsEmbu from './pages/InstrucctionEmbu';
*/

function Routes() {
    return (
        <Switch>
            <Route exact path={pathNames.home} component={Home} />
        </Switch>
    );
}

export default Routes;

// <Route component={NotFound} />
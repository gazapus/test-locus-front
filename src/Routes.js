import React from 'react';
import { Switch, Route } from "react-router-dom";
import pathNames from './utils/pathnames';
import Home from './pages/Home';
import TestForm from './pages/TestForm';
import Instrucction from './pages/Instrucction';
import Test from './pages/Test';
import TestEnding from './pages/Ending';

function Routes() {
    return (
        <Switch>
            <Route exact path={pathNames.home} component={Home} />
            <Route exact path={pathNames.test_form} component={TestForm}/>
            <Route exact path={pathNames.test_instrucction} component={Instrucction}/>
            <Route exact path={pathNames.test_play} component={Test}/>
            <Route exact path={pathNames.test_end} component={TestEnding}/>
        </Switch>
    );
}

export default Routes;

// <Route component={NotFound} />
import React from 'react';
import { Switch, Route } from "react-router-dom";
import pathNames from './utils/pathnames';
import Home from './pages/Home';
import TestForm from './pages/TestForm';
import Instrucction from './pages/Instrucction';
import Test from './pages/Test';
import TestEnding from './pages/Ending';
import Register from './pages/Register';
import Login from './pages/Login';
import Confirmation from './pages/Confirmation';
import StartTest from './pages/StartTest';
import TestLink from './pages/TestLink';
import Results from './pages/Results';

function Routes() {
    return (
        <Switch>
            <Route exact path={pathNames.home} component={Home} />
            <Route exact path={pathNames.test_form} component={TestForm}/>
            <Route exact path={pathNames.test_instrucction} component={Instrucction}/>
            <Route exact path={pathNames.test_play} component={Test}/>
            <Route exact path={pathNames.test_end} component={TestEnding}/>
            <Route exact path={pathNames.register} component={Register}/>
            <Route exact path={pathNames.login} component={Login}/>
            <Route exact path={pathNames.confirmation} component={Confirmation}/>
            <Route exact path={pathNames.start_test} component={StartTest}/>
            <Route exact path={pathNames.link_test} component={TestLink}/>
            <Route exact path={pathNames.results} component={Results}/>
        </Switch>
    );
}

export default Routes;

// <Route component={NotFound} />
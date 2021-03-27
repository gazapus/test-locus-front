import React from 'react';
import { Switch, Route } from "react-router-dom";
import pathNames from './utils/pathnames';
import Home from './pages/Home';
import TestForm from './pages/TestForm';
import Instrucction from './pages/Instrucction';
import Test from './pages/Test';
import TestEnding from './pages/Ending';
import TestEndingFree from './pages/EndingFree';
import Register from './pages/Register';
import Login from './pages/Login';
import Confirmation from './pages/Confirmation';
import StartTest from './pages/StartTest';
import TestLink from './pages/TestLink';
import Results from './pages/Results';
import Profile from './pages/Profile';
import ConfirmChange from './pages/ConfirmChange';
import CancelChange from './pages/CancelChange';
import RestartPassword from './pages/RestartPassword';
import RestartPasswordForm from './pages/RestartPasswordForm';

function Routes() {
    return (
        <Switch>
            <Route exact path={pathNames.home} component={Home} />
            <Route exact path={pathNames.test_form} component={TestForm}/>
            <Route exact path={pathNames.test_instrucction} component={Instrucction}/>
            <Route exact path={pathNames.test_play} component={Test}/>
            <Route exact path={pathNames.test_end} component={TestEnding}/>
            <Route exact path={pathNames.test_endFree} component={TestEndingFree}/>
            <Route exact path={pathNames.register} component={Register}/>
            <Route exact path={pathNames.login} component={Login}/>
            <Route exact path={pathNames.confirmation} component={Confirmation}/>
            <Route exact path={pathNames.start_test} component={StartTest}/>
            <Route exact path={pathNames.link_test} component={TestLink}/>
            <Route exact path={pathNames.results} component={Results}/>
            <Route exact path={pathNames.profile} component={Profile}/>
            <Route exact path={pathNames.confirm_change} component={ConfirmChange}/>
            <Route exact path={pathNames.cancel_change} component={CancelChange}/>
            <Route exact path={pathNames.restart_password} component={RestartPassword}/>
            <Route exact path={pathNames.restart_password_form} component={RestartPasswordForm}/>
        </Switch>
    );
}

export default Routes;

// <Route component={NotFound} />
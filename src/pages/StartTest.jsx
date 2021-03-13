import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import UserService from '../services/user.service';
import LocalStorageService from '../services/localstorage.service';
import pathnames from '../utils/pathnames';

function StartTest() {
    const { username } = useParams();
    const [message, setMessage] = useState();
    const history = useHistory();

    useEffect(() => {
        UserService.check_username(username)
            .then(res => {
                LocalStorageService.setUsernameTest(username);
                history.push(pathnames.test_form);
            })
            .catch(err => setMessage(err.response.data.message))
    })

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '1em' }}>
            {
                message ? <h4 style={{ width: '100%', color: 'red', textIndent: '1em' }}>{message}</h4> : <CircularProgress size="1.5em"/>
            }
        </div>
    )
}
export default StartTest;
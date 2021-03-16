import { useEffect, useState } from 'react';
import AuthService from '../services/auth.service';
import { useHistory } from 'react-router-dom';
import pathnames from '../utils/pathnames';

function useUserLogged() {
    const history = useHistory();
    const [userLogged, setUserLogged] = useState(null);
    useEffect(() => {
        let user = AuthService.getCurrentUser();
        setUserLogged(user);
        if (!user) {
            alert("Debe iniciar sesión primero")
            history.push(pathnames.login);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return userLogged;
}

export default useUserLogged;
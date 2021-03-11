import { useEffect } from 'react';
import LocalStorageService from '../services/localstorage.service';
import { useHistory } from 'react-router-dom';
import pathnames from '../utils/pathnames';

function useUserLogged() {
    const history = useHistory();
    useEffect(() => {
        if(!LocalStorageService.getUserData()) {
            alert("Debe llenar el formulario primero")
            history.push(pathnames.home);
        }
    });
    return;
}

export default useUserLogged;
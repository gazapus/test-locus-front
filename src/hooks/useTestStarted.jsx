import { useEffect } from 'react';
import LocalStorageService from '../services/localstorage.service';
import { useHistory } from 'react-router-dom';
import pathnames from '../utils/pathnames';

function useTestStarted() {
    const history = useHistory();
    useEffect(() => {
        if(!LocalStorageService.getUserData() && !LocalStorageService.isGuestTest()) {
            alert("Debe llenar el formulario primero")
            history.push(pathnames.home);
        }
    });
    return;
}

export default useTestStarted;
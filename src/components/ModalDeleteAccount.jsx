import { useHistory } from 'react-router-dom';
import { Button, Typography, CircularProgress } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from './Modal';
import UserService from '../services/user.service';
import AuthService from '../services/auth.service';
import pathnames from '../utils/pathnames';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        boxSizing: 'border-box',
        padding: '1em'
    },
    buttonsContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }
}))

function ModalDeleteAccount({ open, close }) {
    const [loading, setLoading] = useState(false);
    const classes = useStyles();
    const history = useHistory();

    function deleteAccount() {
        setLoading(true);
        UserService.deleteAccount()
            .then( res => {
                alert("Se ha eliminado la cuenta correctamente");
                AuthService.logout();
                history.push(pathnames.home);
            })
            .catch(err => alert(err.response.data.message))
            .finally(() => setLoading(false))
    }

    return (
        <Modal open={open}>
            <div className={classes.root}>
                <Typography variant="h5" align="center" style={{ margin: '1em' }} >¿Eliminar su cuenta?</Typography>
                <Typography variant="body2" align="center" style={{ margin: '1em' }}>
                    Al eliminar su cuenta también se borraran todos los tests que haya realizado.
                    <br/> 
                    Esta acción no se puede revertir.
                </Typography>
                <div className={classes.buttonsContainer}>
                    <Button 
                        variant="contained" 
                        size="small" 
                        style={{margin: '1em 1em 1em 0em'}} 
                        color="secondary"
                        onClick={deleteAccount}
                        disabled={loading}
                    >
                        ELIMINAR
                    </Button>
                    <Button 
                        variant="contained" 
                        size="small" 
                        style={{margin: '1em 0em 1em 1em'}} 
                        color="primary"
                        onClick={close}
                        disabled={loading}
                    >
                        CANCELAR
                    </Button>
                </div>
                {loading ? <CircularProgress/> : ''}
            </div>
        </Modal>
    )
}

export default ModalDeleteAccount;
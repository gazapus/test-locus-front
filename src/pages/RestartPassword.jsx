import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import withProcessChange from './WithProcessChange';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import pathnames from '../utils/pathnames';
import AuthService from '../services/auth.service';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '1em'
    },
    message: {
        color: 'green',
        marginBottom: '1em'
    }
}))

function RestartEmail(props) {
    const history = useHistory();
    const classes = useStyles();
    document.title = "Locus de Control | Reestablecimiento de password"

    useEffect(() => {
        AuthService.logout();
    }, [])

    return (
        <div className={classes.root}>
            <Typography variant="h5" className={classes.message}>
                Se ha realizado el cambio de password correctamente
            </Typography>
            <Button 
                onClick={() => history.push(pathnames.login)}
                variant="contained"
                color="primary"
            >
                INICIAR SESIÓN
            </Button>
        </div>
    )
}

export default withProcessChange('changeemail', RestartEmail)
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import pathnames from '../utils/pathnames';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AuthService from '../services/auth.service';

const useStyles = makeStyles((theme) => ({
    button: {
        fontSize: '0.8em',
        color: 'white'
    }
}));

function UserButton() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function handleLogout() {
        AuthService.logout();
        history.push(pathnames.home)
    }

    return (
        <>
            {
                (AuthService.getCurrentUser()) ?
                    <Button
                        aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                        className={classes.button} variant="outlined"
                    >
                        {AuthService.getCurrentUser().username}
                    </Button>
                    :
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Button className={classes.button} onClick={() => history.push(pathnames.login)}>Accede</Button> |
                        <Button className={classes.button} onClick={() => history.push(pathnames.register)}>Registrate</Button>
                    </div>
            }
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Mi Cuenta</MenuItem>
                <MenuItem onClick={handleClose}>Resultados</MenuItem>
                <MenuItem onClick={handleLogout}>Salir</MenuItem>
            </Menu>
        </>
    )
}

export default UserButton;
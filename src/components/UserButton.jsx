import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import pathnames from '../utils/pathnames';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    white: {
        color: 'white'
    }
}));

function UserButton() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                variant="outlined" className={classes.white}
            >
                Entrar
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Mi Cuenta</MenuItem>
                <MenuItem onClick={handleClose}>Resultados</MenuItem>
                <MenuItem onClick={handleClose}>Salir</MenuItem>
            </Menu>
        </>
    )
}

export default UserButton;
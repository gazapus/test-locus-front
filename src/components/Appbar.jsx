import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import UNLIcon from '../images/unlbanner.png';
import pathnames from '../utils/pathnames';

const useStyles = makeStyles((theme) => ({
    link: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        margin: '0.8em 0 0.8em 0'
    },
    menuIcon: {
        marginRight: theme.spacing(3),
        height: '5em',
        filter: 'brightness(0.9)'
    },
    right: {

    }
}));

function AppTopBar({rightComponent = <></>}) {
    const classes = useStyles();

    return (
        <AppBar position="relative" >
            <Toolbar>
                <Link to={pathnames.home} className={classes.link}>
                    <img src={UNLIcon} className={classes.menuIcon} alt="" />
                </Link>
                <div className={classes.right}>
                    {rightComponent}
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default AppTopBar;
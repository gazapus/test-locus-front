import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import UNLIcon from '../images/unlbanner.png';
import pathnames from '../utils/pathnames';
import UserButton from './UserButton';

const useStyles = makeStyles((theme) => ({
    left: {
        display: 'flex',
        alignItems: 'center',
        margin: '0.8em 0 0.8em 0',
        flexGrow: 1
    },
    menuIcon: {
        height: '4em',
        filter: 'brightness(0.9)',
        [theme.breakpoints.between('xs', 'md')]: {
            height: '4em',
        },
    }
}));

function AppTopBar({showLoginButton = false}) {
    const classes = useStyles();

    return (
        <AppBar position="relative" >
            <Toolbar>
                <div className={classes.left}>
                    <Link to={pathnames.home} >
                        <img src={UNLIcon} className={classes.menuIcon} alt="" />
                    </Link>
                </div>
                {showLoginButton ? <UserButton /> : ''}
            </Toolbar>
        </AppBar>
    )
}

export default AppTopBar;
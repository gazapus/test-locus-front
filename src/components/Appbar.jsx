import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '../images/icon.png';
import pathnames from '../utils/pathnames';
import UserButton from './UserButton';

const useStyles = makeStyles((theme) => ({
    left: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '0.8em 0 0.8em 0',
        flexGrow: 1,
    },
    menuIcon: {
        height: '4em',
        filter: 'brightness(0.9)',
        [theme.breakpoints.down('md')]: {
            height: '3.5em',
        },
    },
    title: {
        fontSize: '1.4em',
        margin: 0,
        color: '#e2e2e2',
        borderLeftStyle: 'solid',
        marginLeft: '0.5em',
        paddingLeft: '0.5em',
        fontFamily: 'Roboto',
        fontWeight: '500',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0.2em',
            paddingLeft: '0.2em',
            fontSize: '1.2em',

        },
    }
}));

function AppTopBar({ showLoginButton = false }) {
    const classes = useStyles();

    return (
        <AppBar position="relative" >
            <Toolbar>
                <div className={classes.left}>
                    <Link to={pathnames.home} style={{ display: 'flex', textDecoration: 'none', alignItems: 'center' }}>
                        <img src={Icon} className={classes.menuIcon} alt="" />
                        <h1 className={classes.title}>Test de {window.innerWidth > 600 ? <br /> : ''} Locus de Control</h1>
                    </Link>
                </div>
                {showLoginButton ? <UserButton /> : ''}
            </Toolbar>
        </AppBar>
    )
}

export default AppTopBar;
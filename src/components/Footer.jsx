import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#1f1f1f',
        paddingBottom: '1em'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerTitle: {
        fontSize: (window.innerHeight <650 ) ? '0.8em' : '0.9em',
        margin: (window.innerHeight <650 ) ? '0.5em 0 0 0' : '1.5em 0 0 0',
        textAlign: 'center',
        color: '#adadad'
    },
    footerText: {
        fontSize: (window.innerHeight <650 ) ? '0.6em' : '0.7em',
        margin: '0.5em 0 0 0',
        textAlign: 'center',
        color: '#adadad'
    }
});

function Footer() {

    const classes = useStyles();
    return (
        <AppBar position="relative" className={classes.root}>
            <Toolbar className={classes.content}>
                <p className={ classes.footerTitle}>
                    Universidad Nacional de Loja  |  Carrera de Psicología Educativa y Orientación
                </p>
                <p className={ classes.footerText}>
                    Diseñado por <a href="https://github.com/sendrarisk" style={{textDecoration: 'none', color: 'inherit'}}>Cristian Villafañe</a>
                </p>
            </Toolbar>
        </AppBar>
    )
}

export default Footer;
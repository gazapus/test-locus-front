import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import pathnames from '../utils/pathnames';
import PageContainer from '../components/PageContainer';
import LogoUNL from '../images/logo-UNL.png';

const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '2em',
        justifyContent: 'center',
        width: '100vw',
        paddingTop: '2em'
    },
    main: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '2em',
        boxSizing: 'border-box',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
            flexDirection: 'column',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '90%',
            flexDirection: 'row',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '80%',
            flexDirection: 'row',
        },
        [theme.breakpoints.up('lg')]: {
            width: '75%',
            flexDirection: 'row',
        }
    },
    main_left: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1em',
        boxSizing: 'border-box',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    leftMain_logo: {
        width: '80%',
        [theme.breakpoints.down('sm')]: {
            width: '55%',
        }
    },
    main_right: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flexGrow: 2,
        flexShrink: 1,
        flexBasis: 0,
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center',
        },
        [theme.breakpoints.up('sm')]: {
            alignItems: 'flex-start',
        }
    },
    main_title: {
        marginBottom: '0.5em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2em',
            textAlign: 'center'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '3em',
            textAlign: 'left'
        }
    },
    main_description: {
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            fontSize: '1em',
        },
        [theme.breakpoints.up('sm')]: {
            textAlign: 'left',
            fontSize: '1.2em',
        }
    }
}))

function Home() {
    const classes = useStyle();
    document.title = "Locus de Control"

    return (
        <PageContainer showLoginButton={true}>
            <div className={classes.root}>
                <div className={classes.main}>
                    <div className={classes.main_left}>
                        <img src={LogoUNL} className={classes.leftMain_logo} alt="niversidad Nacional de Loja" />
                    </div>
                    <div className={classes.main_right}>
                        <Typography variant="h3" className={classes.main_title}>Indicador del Tipo de <br /> Locus de Control</Typography>
                        <Typography variant="h6" className={classes.main_description}>
                            ¡Aquí es donde comienza tu viaje! Este test de personalidad de 10 minutos te permitirá
                            conocer más sobre tus fortalezas y como alcanzar el éxito en tu vida profesional y romántica.
                        </Typography>
                    </div>
                </div>
            </div>

        </PageContainer>
    )
}

export default Home;
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import pathnames from '../utils/pathnames';
import PageContainer from '../components/PageContainer';
import LogoUNL from '../images/logo-UNL.png';
import ShieldLogo from '../images/shield.png';
import InfoLogo from '../images/info.png';
import WebLogo from '../images/global.png';
import LogoFundation from '../images/logopsy.png';
import MainCard from '../components/MainCard';

const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2em 0 2em 0',
        justifyContent: 'center',
        width: '100%',
        boxSizing: 'border-box',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '90%',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '80%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '75%',
        }
    },
    main: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '2em',
        boxSizing: 'border-box',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            flexDirection: 'row',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            flexDirection: 'row',
        },
        [theme.breakpoints.up('lg')]: {
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
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '95%',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '75%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '65%',
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
    },
    testButton_container: {
        boxSizing: 'border-box',
        borderStyle: 'solid none solid none',
        borderColor: '#c5c5c5',
        padding: '2.5em 0 2.5em 0',
        margin: '3em 0 3em 0',
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    },
    main2: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        boxSizing: 'border-box',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    cards: {
        flexGrow: 3,
        flexShrink: 1,
        flexBasis: 0,
        paddingRight: '1em',
        paddingLeft: '1em'
    },
    aside: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        borderStyle: 'solid',
        borderRadius: '10px',
        borderWidth: '1pt',
        borderColor: '#cccccc',
        margin: '1em 0 1em 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        padding: '1em',
        backgroundImage: 'url("https://i.ibb.co/PGQRsV3/Wallpaper-seamless-pattern-with-Modern-Roman-Classic-Alphabet-with-a-Method-of-Geometrical-Construct.jpg")'
    },
    aside_text: {
        color: '#5f0303',
    },
    aside_image: {
        width: '80%',
        backgroundColor: '#ffffffa1',
        [theme.breakpoints.down('sm')]: {
            width: '60%',
            backgroundColor: '#ffffff00',
        },
    },
    aside_footer: {
        color: '#000552',
        fontSize: '0.7em',
    }
}))

function Home() {
    const classes = useStyle();
    document.title = "Locus de Control"

    return (
        <PageContainer showLoginButton={true} align="center">
            <div className={classes.root}>
                <div className={classes.main}>
                    <div className={classes.main_left}>
                        <img src={LogoUNL} className={classes.leftMain_logo} alt="niversidad Nacional de Loja" />
                    </div>
                    <div className={classes.main_right}>
                        <Typography variant="h3" className={classes.main_title}>Indicador del Tipo de <br /> Locus de Control</Typography>
                        <Typography variant="h6" className={classes.main_description}>
                            Este test de personalidad de 10 minutos te permitirá
                            conocer más sobre tus fortalezas y como alcanzar el éxito en tu vida profesional y romántica.
                        </Typography>
                    </div>
                </div>
                <div className={classes.testButton_container}>
                    <Link to={pathnames.test_form} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" size="large" color="primary">REALIZAR TEST</Button>
                    </Link>
                </div>
                <div className={classes.main2}>
                    <div className={classes.cards}>
                        <MainCard
                            title="¿Que función cumple este test?"
                            description="Conoce más sobre como reaccionarás a situaciones anticipadas e inesperadas.
                            Obtén una comprensión invaluable sobre cómo hacer los ajustes necesarios dependiendo
                            de las circunstancias"
                            logo={InfoLogo}
                        />
                        <MainCard
                            title="¿Son mis resultados seguros?"
                            description="Conoce más sobre como reaccionarás a situaciones anticipadas e inesperadas.
                            Obtén una comprensión invaluable sobre cómo hacer los ajustes necesarios dependiendo
                            de las circunstancias"
                            logo={ShieldLogo}
                            isIconOnRight
                        />
                        <MainCard
                            title="¿Por que elegir esta plataforma?"
                            description="Conoce más sobre como reaccionarás a situaciones anticipadas e inesperadas.
                            Obtén una comprensión invaluable sobre cómo hacer los ajustes necesarios dependiendo
                            de las circunstancias"
                            logo={WebLogo}
                        />
                    </div>
                    <aside className={classes.aside}>
                        <Typography variant="body1" align="center" className={classes.aside_text}>Colaboración por</Typography>
                        <img src={LogoFundation} alt="" className={classes.aside_image} />
                        <Typography variant="body2" align="center" className={classes.aside_footer}>
                            Una ONG dedidacada a la digitalización de herramientas de evaluación psicologica
                        </Typography>
                    </aside>
                </div>

            </div>
        </PageContainer>
    )
}

export default Home;
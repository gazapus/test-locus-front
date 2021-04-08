import { useHistory } from 'react-router-dom';
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
import LocalStorageService from '../services/localstorage.service';

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
    document.title = "Locus de Control";
    const history = useHistory();

    function playTestAsGuest() {
        LocalStorageService.setGuestTest();
        history.push(pathnames.test_instrucction);
    }

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
                            En este test se descifra el grado en el que considera la persona de tener el
                            control de su vida en los eventos que ocurren en ella, hasta qué punto los sujetos logran controlarse
                            ante eventos sociales o de lo contrario cómo son influenciados por estos en su actuar.
                        </Typography>
                    </div>
                </div>
                <div className={classes.testButton_container}>
                    <Button variant="contained" size="large" color="primary" onClick={playTestAsGuest}>REALIZAR TEST</Button>
                </div>
                <div className={classes.main2}>
                    <div className={classes.cards}>
                        <MainCard
                            title="¿Que función cumple este test?"
                            description="El locus de control es una variable de la personalidad que representa la atribución que 
                            una persona lleva a cabo sobre si el esfuerzo que realiza es o no contingente a su conducta.
                            Puede ser interno (cuando creemos que tenemos todo el control de lo que nos pasa) o externo 
                            (cuando creemos que son otras personas o las circunstancias las que dominan nuestra vida)."
                            logo={InfoLogo}
                        />
                        <MainCard
                            title="¿Son mis resultados seguros?"
                            description="Los resultados son completamente anónimos y no sé compartiran con nadie. 
                            Nunca asociaremos públicamente tus datos con tus resultados.
                            Los test que puedas aplicar a otras personas mantienen el mismo nivel de confidencialidad."
                            logo={ShieldLogo}
                            isIconOnRight
                        />
                        <MainCard
                            title="¿Por que usar esta plataforma?"
                            description="Además de la autoevaluación le proveemos el uso para especialistas que quieran aplicar el test a otra persona,
                            a través de un simple y gratuito registro puede enviar el test a sus casos estudiados y obtener los resultados en su cuenta 
                            inmediatamente"
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
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import PageContinaer from '../components/PageContainer';
import pathanames from '../utils/pathnames';
import palette from '../utils/palette';
import { useEffect } from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderStyle: 'solid',
        borderColor: palette.border,
        margin: '1em',
        padding: '2em',
        boxSizing: 'border-box',
        backgroundColor: 'white',
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '100%',
            fontSize: '1em',
            borderStyle: 'none',
            margin: '0em',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '80%',
            fontSize: '1.15em',
        },
        [theme.breakpoints.up('md')]: {
            width: '65%',
            fontSize: '1.15em',
        }
    },
    title: {
        marginBottom: '1em',
        textAlign: 'center'
    },
    text: {
        textAlign: 'justify',
        fontFamily: 'roboto',
        marginBottom: '1em',
        marginTop: '0.3em',
        lineHeight: '1.4em',
        textIndent: '1em',
        
    },
    textStrong: {
        textAlign: 'left',
        fontFamily: 'roboto',
        margin: '0.5em',
        fontSize: '0.9em',
        color: palette.primary
    },
    button: {
        margin: '2em',
    }
}))


function Instrucction() {
    const classes = useStyles();
    document.title = "Locus de Control | Instrucciones"

    useEffect(() => {
        window.scrollTo({ top: 10, behavior: 'smooth' });
    }, [])

    return (
        <PageContinaer align="center" backgroundColor={palette.background}>
            <div className={classes.root}>
                <Typography variant="h4" className={classes.title}>
                    INSTRUCCIONES
                </Typography>
                <p className={classes.text}>
                    Este es un cuestionario para determinar cómo ciertos acontecimientos en nuestra  sociedad afectan
                    a las personas. Cada ítem consiste de dos oraciones  denominadas A y B. Escoja entre las alternativas, la que
                    más fuertemente usted crea (en su opinión)  que  describa  la situación expuesta.
                </p>
                <p className={classes.text}>
                    Marque  la alternativa (A o B) que indique su opinión. Cerciórese de escoger  la alternativa en que  verdaderamente
                    crea, en vez de la que piensa que deba escoger o la que quisiera que fuese verdad.
                </p>
                <p className={classes.text}>
                    El presente cuestionario es una medida  de las creencias personales  y por lo tanto,  no hay respuestas  correctas  o incorrectas
                </p>
                <p className={classes.text}>
                    Por  favor conteste  con cuidado  pero  sin detenerse particularmente en ningún  ítem.  Tal vez descubra  que  en algunos  casos usted
                    crea  en ambas alternativas o que no cree en ninguna  de las dos. En esos casos escoja la alternativa que más se acerque  a lo que
                    usted cree y en lo que a usted  respecta.  Trate  de contestar a cada  ítem  independientemente al hacer  su selección, no se deje
                    afectar  por sus selecciones anteriores.
                </p>
                <strong className={classes.textStrong}>
                    RECUERDE: Escoja la alternativa que usted personalmente crea que sea la más verdadera en cada ítem.
                </strong>
                <Link to={pathanames.test_play} style={{ textDecoration: 'none' }}>
                    <Button color="secondary" variant="contained" className={classes.button} size="large">
                        ACEPTAR
                </Button>
                </Link>
            </div>
        </PageContinaer >
    )
}

export default Instrucction;
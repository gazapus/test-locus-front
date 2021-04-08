import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Button, CircularProgress, Typography } from '@material-ui/core';
import TestService from '../services/test.service';
import pathnames from '../utils/pathnames';
import palette from '../utils/palette';
import PageContainer from '../components/PageContainer';
import useTestStarted from '../hooks/useTestStarted';
import LocalStorageService from '../services/localstorage.service';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        margin: '1em 0 1em 0',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        backgroundColor: 'white',
        padding: '1.5em',
        borderStyle: 'solid',
        borderColor: palette.border,
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '100%',
            padding: '0 1em 1em 1em',
            borderStyle: 'none',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '75%',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '70%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '60%',
        },
    },
    textNormal: {
        color: palette.textDark
    },
    textRight: {
        color: palette.secondary,
        fontWeight: 'bold',
        margin: '0.5em'
    },
    textWrong: {
        color: 'red'
    },
    text: {
        textAlign: 'justify',
        fontFamily: 'roboto',
        margin: '2em 0 2em 0',
        lineHeight: '1.4em',
        textIndent: '1em',
    },
    locus_description: {
        backgroundColor: '#eeeeee',
        padding: '1.2em',
        borderRadius: '10px',
        marginTop: '1em'
    }
}))

function Ending({ location }) {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState({});
    const [succefullyCalculated, setSuccefullyCalculated] = useState(false);
    const classes = useStyles();
    useTestStarted();

    document.title = "Locus de Control | Finalización"

    useEffect(() => {
        setLoading(true) 
        if(!location.state) return;
        TestService.calculateResults({ answers: location.state.results })
            .then(res => {
                setResults(res.data);
                setSuccefullyCalculated(true);
            })
            .catch(err => alert(err.response.data.message))
            .finally(() => setLoading(false))
        return (() => LocalStorageService.clearAll())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) return (
        <PageContainer align="center" backgroundColor={palette.background} justify="center">
            <div className={classes.root}>
                <Typography variant="h5" className={classes.textNormal}>Cargando resultados</Typography>
                <p className={classes.text}>Espere que termine de procesar los datos</p>
                <CircularProgress />
            </div>
        </PageContainer>
    )
    return (
        <PageContainer align="center" backgroundColor={palette.background} justify="center">
            <div className={classes.root}>
                {
                    succefullyCalculated ?
                        <>
                            <Typography variant="h6">Su resultado predominante es:</Typography>
                            <Typography variant="h4" className={classes.textRight}>{results.locus.toUpperCase()}</Typography>
                            <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                                {`${((results.internal > results.external ? results.internal : results.external) * 100 / 23).toFixed(1)}% `}
                            </Typography>
                            {
                                results.internal > results.external ?
                                    <Typography variant="body2" className={classes.locus_description}>
                                        Según tus respuestas, tienes un locus de control interno. Crees que los eventos en la vida de las personas son
                                        causados por sus propias elecciones y están completamente bajo su propio control.
                                        <br /><br />
                                        Aquellos con un locus de control interno suelen ser se describen como que tienen una "mentalidad de crecimiento" - creen 
                                        que las personas pueden aprender cualquier cosa y hacer cualquier cosa que se propongan. No creen que se nace con 
                                        grandeza - creen que la grandeza se hace.
                                        <br /><br />
                                        Quienes tienen un locus de control interno tienen más probabilidades de ser escépticos sobre cosas como fantasmas, 
                                        espíritus y cualquier otra cosa paranormal. No son supersticiosos.
                                        <br /><br />
                                        Como tienen un locus de control interno, se culpan a sí mismos cuando no cumplen con sus objetivos. Esto les da un 
                                        fuerte impulso para hacer lo mejor y tener éxito. Cuando no cumples tus objetivos, no tienes miedo de volver a intentarlo. 
                                        Te niegas a renunciar. Las personas con un locus de control interno tienen más probabilidades de ser exitosos a largo plazo.
                                        <br /><br/>
                                        Tu locus de control interno puede ser útil cuando se trata de desafíos a largo plazo, pero a corto plazo, puedes ser muy duro 
                                        contigo mismo. Eres tu peor crítico.
                                    </Typography>
                                    :
                                    <Typography variant="body2" className={classes.locus_description}>
                                        Según tus respuestas, tienes un locus de control externo. Sueles creer que los eventos que suceden en las vidas
                                        de las personas son causados por fuerzas externas, y no están bajo su control. Estos factores externos pueden ser
                                        Dios, otras personas, naturaleza, etc.
                                        <br /><br />
                                        Aquellos con un locus de control externo suelen describirse como que tienen una "mentalidad fija" - creen que los
                                        talentos de las personas (como la inteligencia o la capacidad atlética) son rasgos fijos que tienen desde el principio
                                        de la vida. Aquellos con una mentalidad fija creen que los grandes líderes generalmente nacen, no se hacen.
                                        <br /><br />
                                        Los que tienen un locus de control externo tienen muchas más probabilidades de ser religiosos que aquellos que tienen un
                                        locus de control interno. A menudo creen que Dios tiene un plan para sus vidas. Cuando les suceden cosas malas, es probable
                                        que las personas con un locus de control externo atribuyan estos acontecimientos al plan o destino de Dios. También pueden
                                        ser muy supersticiosos - las personas con un locus de control externo tienden a creer en cosas como fantasmas y espíritus.
                                        <br /><br />
                                        Como tienen un enfoque de control externo, suelen atribuir sus fallas a factores externos. Por ejemplo, si perdiste tu trabajo,
                                        puede haber sido porque tu jefe era un imbécil al que no le gustabas desde el principio.
                                        <br /><br/>
                                        Tu locus de control externo puede ser útil cuando afrontas fallas a corto plazo. Sin embargo, si esto sucede a menudo,
                                        debes hacer un examen de conciencia para ver cuál fue tu papel en estos fracasos.
                                        Ser más crítico contigo mismo te ayudará a tener más éxito a largo plazo.
                                    </Typography>
                            }
                        </>
                        :
                        <Typography variant="h5" className={classes.textWrong}>No se pudo calcular el test</Typography>
                }
                <Link to={pathnames.home} style={{ textDecoration: 'none', margin: '1em' }}>
                    <Button color="primary" variant="contained" size="large">Aceptar</Button>
                </Link>
            </div>
        </PageContainer>
    )
}

export default Ending;
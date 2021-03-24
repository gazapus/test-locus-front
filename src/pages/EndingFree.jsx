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
            width: '60%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '50%',
        },
    },
    textNormal: {
        color: palette.textDark
    },
    textRight: {
        color: palette.secondary
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
                            <Typography variant="h4">Resultado del Test:</Typography>
                            <Typography variant="h5" className={classes.textRight} style={{margin: '1em'}}>{results.locus}</Typography>

                            <Typography variant="body1">{'Respuestas de Locus Interno: ' + results.internal}</Typography>
                            <Typography variant="body1">{'Respuestas de Locus Externo: ' + results.external}</Typography>
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
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Button, CircularProgress, Typography } from '@material-ui/core';
import TestService from '../services/test.service';
import pathnames from '../utils/pathnames';
import palette from '../utils/palette';
import PageContainer from '../components/PageContainer';
import useLoggedUser from '../hooks/useUserLogged';
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
    const [succefullySaved, setSuccefullySaved] = useState(false);
    const classes = useStyles();
    useLoggedUser();

    document.title = "Locus de Control | Finalización"

    useEffect(() => {
        setLoading(true)
        let userData = LocalStorageService.getUserData();
        let username = LocalStorageService.getUsernameTest();
        console.log(username)
        let requestData = { ...userData, ...{ results: location.state.results } };
        TestService.create(requestData, username)
            .then(res => setSuccefullySaved(true))
            .catch(err => alert(err.response.data.message))
            .finally(() => setLoading(false))
    }, [])

    return (
        <PageContainer align="center" backgroundColor={palette.background} justify="center">
            <div className={classes.root}>
                <Typography
                    variant="h5"
                    className={loading ? classes.textNormal : succefullySaved ? classes.textRight : classes.textWrong}
                >
                    {loading ? 'Cargando resultados' : succefullySaved ? 'Test guardado correctamente' : 'No se pudo guardar el test'}
                </Typography>
                <p className={classes.text}>
                    {loading ? 'Espere que termine de guardar los datos' : succefullySaved ? 'Muchas gracias por participar' : 'Reintente de vuelta'}
                </p>
                {loading ? <CircularProgress /> :
                    <Link to={pathnames.home} style={{ textDecoration: 'none' }}>
                        <Button color="primary" variant="contained" size="large">Aceptar</Button>
                    </Link>}
            </div>
        </PageContainer>
    )
}

export default Ending;
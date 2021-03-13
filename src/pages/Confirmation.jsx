import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PageContainer from '../components/PageContainer';
import pathnames from '../utils/pathnames';
import AuthService from '../services/auth.service';

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        margin: '3em 1em 3em 1em'
    },
    text: {
        marginBottom: '2em',
        textAlign: 'center',
        fontFamily: 'Roboto'
    }
}))

function Confirmation() {
    document.title = "Locus de Control | Confirmación"
    const classes = useStyle();
    const { user_id } = useParams();
    const [loading, setLoading] = useState(true);
    const [confirmated, setConfirmated] = useState(true);
    const history = useHistory();

    function handleClick() {
        if (confirmated) {
            history.push(pathnames.login)
        } else {
            history.push(pathnames.home)
        }
    }

    useEffect(() => {
        async function confirmUser() {
            try {
                await AuthService.confirm(user_id);
                setConfirmated(true)
            } catch (err) {
                setConfirmated(false)
            } finally {
                setLoading(false)
            }
        }
        confirmUser();
    }, [user_id])

    if (loading) return (
        <PageContainer>
            <div className={classes.root}>
                <Typography variant="h5">Finalizando registro de cuenta. Por favor, espere</Typography>
                <CircularProgress size="2em" />
            </div>
        </PageContainer>
    )

    return (
        <PageContainer>
            <div className={classes.root}>
                {
                    confirmated ?
                        <>
                            <Typography color='primary' variant="h4" align="center">¡Confirmación de registro exitosa!</Typography>
                            <p className={classes.text}>Ahora puede iniciar sesión con su email y contraseña</p>
                            <Button size="medium" variant="contained" onClick={handleClick} color="primary">Iniciar Sesión</Button>
                        </>
                        :
                        <>
                            <Typography color='secondary' variant="h4" align="center">Hubo un error y no se pudo terminar con el registro</Typography>
                            <p className={classes.text}>Vuelva a intentar más tarde</p>
                            <Button size="medium" variant="contained" onClick={handleClick} color="primary">Aceptar</Button>
                        </>
                }
            </div>
        </PageContainer>
    )
}

export default Confirmation;
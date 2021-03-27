import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, CircularProgress, Typography } from '@material-ui/core';
import PageContainer from '../components/PageContainer';
import Alert from '../components/Alert';
import validators from '../utils/validators';
import palette from '../utils/palette';
import pathnames from '../utils/pathnames';
import AuthService from '../services/auth.service';
import RequestChangeService from '../services/requestchange.service';

const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        borderStyle: 'solid',
        borderRadius: '5px',
        borderColor: palette.border,
        backgroundColor: 'white',
        marginTop: '2.5em',
        marginBottom: '2em',
        boxSizing: 'border-box',
        [theme.breakpoints.between('xs', 'sm')]: {
            padding: '0em',
            width: '90%',
            borderStyle: 'none',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '1em',
            width: '60%'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            padding: '2em',
            width: '45%'
        },
        [theme.breakpoints.up('lg')]: {
            padding: '3em',
            width: '35%'
        },
    },
    input: {
        margin: '1em',
        width: '100%'
    },
    button: {
        marginTop: '1em'
    },
    modalContent: {
        boxSizing: 'border-box',
        padding: '2.5em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    alert: {
        position: 'absolute',
        top: '1em',
        right: '1em',
        display: 'flex',
        zIndex: 1100,
    }
}))

function Login() {
    document.title = "Locus de Control | Reestablecer password"

    const [loading, setLoading] = useState(false);
    const [succefullyRequest, setSuccefullyRequest] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const history = useHistory();
    const classes = useStyle();
    const formik = useFormik({
        initialValues: {
            email: '',
            newPassword: '',
            newPasswordRepeat: ''
        },
        onSubmit: values => {
            setLoading(true)
            RequestChangeService.requestChangePassword({ newPassword: values.newPassword, email: values.email })
                .then(res => setSuccefullyRequest(true))
                .catch(err => { setAlertMessage(err.response.data.message); setAlertOpen(true) })
                .finally(() => setLoading(false))
        },
        validate: values => {
            let errors = {};
            if (!validators.validateEmail(values.email)) errors.email = "Formato de correo electrónico no válido";
            if (values.newPassword.length < 6) errors.newPassword = "Password muy corto";
            if (values.newPassword.length > 20) errors.newPassword = "Password muy largo";
            if (values.newPassword.length === 0) errors.newPassword = "Debe completar este campo";
            if (values.newPasswordRepeat !== values.newPassword) errors.newPasswordRepeat = "Los passwords no son iguales";
            return errors;
        },
        validateOnChange: false,
        validateOnBlur: false,
    })

    useEffect(() => {
        if (AuthService.getCurrentUser()) history.push(pathnames.home);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (succefullyRequest) {
        return (
            <PageContainer align="center" backgroundColor={palette.background}>
                <Typography 
                    variant="h5" 
                    style={{ color: 'green', margin: '2em 1em 0 1em' }}
                >
                    Se le ha enviado un email para restablecer el password
                </Typography>
            </PageContainer>
        )
    }

    return (
        <PageContainer align="center" backgroundColor={palette.background}>
            <form className={classes.root} onSubmit={formik.handleSubmit}>
                <Typography variant="h5">Reestablecer Password</Typography>
                <TextField
                    id="email"
                    name="email"
                    label="Correo electrónico"
                    variant="outlined"
                    value={formik.values.email}
                    className={classes.input}
                    helperText={formik.errors.email}
                    error={formik.errors.email}
                    onChange={formik.handleChange}
                    InputProps={{ inputProps: { maxLength: 45 } }}
                />
                <TextField
                    id="newPassword"
                    name="newPassword"
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={formik.values.newPassword}
                    className={classes.input}
                    helperText={formik.errors.newPassword}
                    error={formik.errors.newPassword}
                    onChange={formik.handleChange}
                    InputProps={{ inputProps: { maxLength: 20 } }}
                />
                <TextField
                    id="newPasswordRepeat"
                    name="newPasswordRepeat"
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={formik.values.newPasswordRepeat}
                    className={classes.input}
                    helperText={formik.errors.newPasswordRepeat}
                    error={formik.errors.newPasswordRepeat}
                    onChange={formik.handleChange}
                    InputProps={{ inputProps: { maxLength: 20 } }}
                />
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.button}
                    type="submit"
                    disabled={loading}
                >
                    REESTABLCER
                </Button>
                {loading ? <CircularProgress style={{ margin: '1em' }} size="1.5em" /> : ''}
                <Alert
                    open={alertOpen}
                    close={() => setAlertOpen(false)}
                    type='error'
                >
                    {alertMessage}
                </Alert>
            </form>
        </PageContainer>
    )
}

export default Login;
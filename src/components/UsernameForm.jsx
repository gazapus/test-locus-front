import { useState } from 'react';
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, CircularProgress } from '@material-ui/core';
import UserService from '../services/user.service';
import AuthService from '../services/auth.service';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        flexWrap: 'wrap'
    }
}));

function UsernameForm({user, launchAlert}) {
    const [loading, setLoading] = useState(false);
    const classes = useStyles();
    const formikUsername = useFormik({
        initialValues: {
            username: ''
        },
        onSubmit: values => {
            setLoading(true)
            UserService.update_username(values)
                .then(res => {
                    launchAlert('Nombre de usuario modificado correctamente', 'success');
                    AuthService.updateUsername(values.username)
                })
                .catch(err => {
                    launchAlert(err.response.data.message, 'error');
                })
                .finally(() => setLoading(false))
        },
        validate: values => {
            let errors = {};
            if (values.username.length < 4) errors.username = "Nombre de usuario muy corto";
            if (values.username.length > 20) errors.username = "Nombre de usuario muy largo";
            if (values.username.length === 0) errors.username = "Debe completar este campo";
            return errors;
        },
        validateOnChange: false,
        validateOnBlur: false,
    })

    return (
        <form className={classes.form} onSubmit={formikUsername.handleSubmit}>
            <TextField
                id="username"
                name="username"
                label="Nombre de usuario"
                placeholder={user.username}
                variant="outlined"
                value={formikUsername.values.username}
                helperText={formikUsername.errors.username}
                error={formikUsername.errors.username}
                onChange={formikUsername.handleChange}
                InputProps={{ inputProps: { maxLength: 20 } }}
            />
            {
                loading ?
                    <CircularProgress />
                    :
                    <Button variant="contained" color="primary" style={{ marginLeft: '1em' }} type="submit">Guardar</Button>
            }
        </form>

    )
}

export default UsernameForm;
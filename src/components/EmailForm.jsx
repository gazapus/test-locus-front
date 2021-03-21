import { useState } from 'react';
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, CircularProgress } from '@material-ui/core';
import UserService from '../services/user.service';
import AuthService from '../services/auth.service';
import validators from '../utils/validators';

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

function EmailForm({user, launchAlert}) {
    const [loading, setLoading] = useState(false);
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            username: ''
        },
        onSubmit: values => {
            setLoading(true)
            UserService.update_email(values)
                .then(res => {
                    launchAlert('Email modificado correctamente', 'success');
                    AuthService.updateEmail(values.email)
                })
                .catch(err => {
                    launchAlert(err.response.data.message, 'error');
                })
                .finally(() => setLoading(false))
        },
        validate: values => {
            let errors = {};
            if (!validators.validateEmail(values.email)) errors.email = "Formato de correo electrónico no válido";
            return errors;
        },
        validateOnChange: false,
        validateOnBlur: false,
    })

    return (
        <form className={classes.form} onSubmit={formik.handleSubmit}>
            <TextField
                id="email"
                name="email"
                label="Email"
                placeholder={user.email}
                variant="outlined"
                value={formik.values.email}
                helperText={formik.errors.email}
                error={formik.errors.email}
                onChange={formik.handleChange}
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

export default EmailForm;
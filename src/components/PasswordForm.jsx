import { useState } from 'react';
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, CircularProgress } from '@material-ui/core';
import UserService from '../services/user.service';

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

function UsernameForm({launchAlert}) {
    const [loading, setLoading] = useState(false);
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            password: ''
        },
        onSubmit: values => {
            setLoading(true)
            UserService.update_password(values)
                .then(res => {
                    launchAlert('Contraseña modificada correctamente', 'success');
                })
                .catch(err => {
                    launchAlert(err.response.data.message, 'error');
                })
                .finally(() => setLoading(false))
        },
        validate: values => {
            let errors = {};
            if (values.password.length < 6) errors.password = "Contraseña muy corta";
            if (values.password.length > 20) errors.password = "Contraseña muy larga";
            if (values.password.length === 0) errors.password = "Debe completar este campo";
            return errors;
        },
        validateOnChange: false,
        validateOnBlur: false,
    })

    return (
        <form className={classes.form} onSubmit={formik.handleSubmit}>
            <TextField
                id="password"
                name="password"
                label="Contraseña"
                variant="outlined"
                type="password"
                value={formik.values.password}
                helperText={formik.errors.password}
                error={formik.errors.password}
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

export default UsernameForm;
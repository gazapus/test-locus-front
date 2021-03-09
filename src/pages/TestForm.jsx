import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import pathnames from '../utils/pathnames';
import PageContainer from '../components/PageContainer';
import LocalStorageService from '../services/localstorage.service';

const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        borderStyle: 'solid',
        borderRadius: '5px',
        borderColor: '#cfcfcf',
        marginTop: '2.5em',
        marginBottom: '2em',
        boxSizing: 'border-box',
        [theme.breakpoints.between('xs', 'sm')]: {
            padding: '0em',
            width: '90%'
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
    title: {
        marginTop: 0,
        marginBottom: '1em',
        fontFamily: 'roboto',
        fontSize: '1.5em'
    },
    button: {
        marginTop: '1em'
    }
}))


function TestForm() {
    const classes = useStyle();
    let history = useHistory();

    const formik = useFormik({
        initialValues: {
            alias: '',
            age: '',
            sex: '',
            grade: '',
            institution: ''
        },
        onSubmit: values => {
            LocalStorageService.setUserData({
                alias: values.alias,
                age: values.age,
                grade: values.grade,
                sex: values.sex,
                institution: values.institution
            })
            history.push(pathnames.instrucctions);
        },
        validate: values => {
            let errors = {};
            if (values.alias.length < 4) errors.alias = "Alias muy corto";
            if (values.alias.length > 20) errors.alias = "Alias muy largo";
            if (values.alias.length === 0) errors.alias = "Debe completar este campo";
            if (values.age < 2 || values.age > 100) errors.age = "Edad no válida";
            if (values.age === '') errors.age = "Debe completar este campo";
            if (values.grade.length < 1) errors.grade = "Debe completar este campo";
            if (values.sex.length < 1) errors.sex = "Debe completar este campo";
            if (values.institution.length < 1) errors.institution = "Debe completar este campo";
            return errors;
        },
        validateOnChange: false,
        validateOnBlur: false,
    });

    return (
        <PageContainer align="center">
            <form className={classes.root} onSubmit={formik.handleSubmit}>
                <h3 className={classes.title}>DATOS INFORMATIVOS</h3>
                <TextField
                    id="alias"
                    name="alias"
                    label="Alias"
                    variant="outlined"
                    value={formik.values.alias}
                    className={classes.input}
                    helperText={formik.errors.alias}
                    error={formik.errors.alias}
                    onChange={formik.handleChange}
                    InputProps={{ inputProps: { maxLength: 20 } }}
                />
                <TextField
                    id="age"
                    name="age"
                    label="Edad"
                    variant="outlined"
                    type="number"
                    value={formik.values.age}
                    className={classes.input}
                    helperText={formik.errors.age}
                    error={formik.errors.age}
                    onChange={formik.handleChange}
                    InputProps={{ inputProps: { maxLength: 2 } }}
                />
                <TextField
                    id="sex"
                    name="sex"
                    label="Sexo"
                    variant="outlined"
                    value={formik.values.sex}
                    className={classes.input}
                    helperText={formik.errors.sex}
                    error={formik.errors.sex}
                    onChange={formik.handleChange}
                    InputProps={{ inputProps: { maxLength: 20 } }}
                />
                <TextField
                    id="grade"
                    name="grade"
                    label="Año de básica"
                    variant="outlined"
                    value={formik.values.grade}
                    className={classes.input}
                    helperText={formik.errors.grade}
                    error={formik.errors.grade}
                    onChange={formik.handleChange}
                    InputProps={{ inputProps: { maxLength: 30 } }}
                />
                <TextField
                    id="institution"
                    name="institution"
                    label="Institución"
                    variant="outlined"
                    value={formik.values.institution}
                    className={classes.input}
                    helperText={formik.errors.institution}
                    error={formik.errors.institution}
                    onChange={formik.handleChange}
                    InputProps={{ inputProps: { maxLength: 40 } }}
                />
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.button}
                    type="submit"
                >
                    ACEPTAR
                </Button>
            </form>
        </PageContainer>
    )
}

export default TestForm;
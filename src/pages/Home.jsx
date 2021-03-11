import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import pathnames from '../utils/pathnames';
import PageContainer from '../components/PageContainer';

const useStyle = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '8vh',
        paddingBottom: '2em',
    },
    title: {
        textAlign: 'center',
        marginTop: '1em',
        maxWidth: '95%'
    },
    locus: {
        textAlign: 'center',
        marginTop: 0,
        maxWidth: '95%',
        marginBottom: '1em'
    },
    button: {
        marginTop: '1em',
        marginBottom: '1em',
        padding: '1.3em 3em 1.3em 3em',
    }
})

function Home() {
    const classes = useStyle();
    document.title = "Test de Caras"

    return (
        <PageContainer>
            <div className={classes.root}>
                <Typography variant={window.innerWidth > 400 ? 'h4' : 'h5'} className={classes.title}>
                    Carrera de Psicología Educativa y Orientación
                    </Typography>
                <Typography variant={window.innerWidth > 400 ? 'h4' : 'h5'} className={classes.title}>
                    Proyecto para el trabajo de Titulación
                    </Typography>
                <Typography className={classes.title}>
                    Instrumento: Inventario personal sobre algunas situaciones sociales de Rotter.
                    </Typography>
                <Typography className={classes.locus}>
                    (Locus de Control)
                    </Typography>
                <Link to={pathnames.test_form} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="secondary" size="large" className={classes.button}>TEST LOCUS</Button>
                </Link>
            </div>
        </PageContainer>
    )
}

export default Home;
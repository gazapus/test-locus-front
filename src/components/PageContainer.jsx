import { makeStyles } from '@material-ui/core/styles';
import AppBar from './Appbar';
import Footer from './Footer';

const useStyle = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        boxSizing: 'border-box',
        width: '100%',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        boxSizing: 'border-box',
        flexGrow: 1,
    }
})

function PageContainer({ children }) {
    const classes = useStyle();

    return (
        <div className={classes.container}>
            <AppBar />
            <div className={classes.content}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default PageContainer;
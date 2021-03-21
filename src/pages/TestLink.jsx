import { useState, useEffect } from 'react';
import PageContainer from '../components/PageContainer';
import CopyableText from '../components/CopyableText';
import pathnames from '../utils/pathnames';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useLoggedUser from '../hooks/useUserLogged';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '4em',
        [theme.breakpoints.between('xs', 'md')]: {
            padding: '1em',
        },
        [theme.breakpoints.up('md')]: {
            padding: '3em',
        },
    },
    StyledBox: {
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderStyle: 'solid',
        borderColor: '#98C1D9',
        borderWidth: '2px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '2.5em',
        marginBottom: '1.5em',
        minHeight: '1em',
        [theme.breakpoints.down('md')]: {
            width: '96vw',
            padding: '1em 0.5em 1em 0.5em',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '80vw',
            padding: '1em 2em 1em 2em',
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            width: '50vw',
            padding: '1em 2.5em 1em 2.5em',
        },
        [theme.breakpoints.up('xl')]: {
            width: '40vw',
            padding: '1.5em 3em 1.5em 3em',
        },
    }
}))

function TestLink() {
    const [link, setLink] = useState("");
    const [whatsappURL, setWhatsappURL] = useState("https://api.whatsapp.com/send?text=Resuelve%20el%20test%20de%20locus%20de%20control%20siguiendo%20este%20enlace:%20");
    const [mailURL, setMailURL] = useState("mailto:?subject=Enlace%20para%20la%20realización%20del%20Test%20Locus%20de%20Control&body=Resuelve%20el%20test%20siguiendo%20este%20enlace:%20");
    const userLogged = useLoggedUser();
    const classes = useStyles();
    document.title = "Locus de Control | Enlace del Test"
    
    useEffect(() => {
        const URL_BASE = `${pathnames.server}/test/start/`;
        function getLink() {
            let newLink = URL_BASE + userLogged.username;
            setLink(newLink);
            setWhatsappURL(whatsappURL => whatsappURL + newLink.replace('#', '%23'));
            setMailURL(mailURL => mailURL + newLink);
        }
        if(userLogged) getLink();
    }, [userLogged])

    return (
        <PageContainer align="center" showLoginButton>
                <div className={classes.StyledBox}>
                    <Typography variant="h4" style={{margin: '1em'}} align="center">Enlace para realizar el test:</Typography>
                    <div style={{ display: 'flex', width: '100%' }}>
                        <CopyableText>{link}</CopyableText>
                    </div>
                    <Typography variant="body1" align="center" style={{margin: '1em'}} >
                        Los resultados de las personas que realicen el test desde este enlace se guardarán
                        tus <strong>registros</strong>.
                    </Typography>
                    <Button 
                        variant="contained" 
                        style={{ backgroundColor: "#0547c2", margin: '0.4em' }} 
                        href={mailURL}
                    >
                        Compartir por correo
                    </Button>
                    <Button 
                        variant="contained" 
                        style={{ backgroundColor: "#107c10", margin: '0.4em' }} 
                        href={whatsappURL}
                        target="nblanck"
                    >
                        Compartir por whatsapp
                    </Button>
                </div>
        </PageContainer>
    )
}

export default TestLink;
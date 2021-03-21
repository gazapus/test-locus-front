import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import PageContainer from '../components/PageContainer';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import palette from '../utils/palette';
import AuthService from '../services/auth.service';
import UsernameForm from '../components/UsernameForm';
import EmailForm from '../components/EmailForm';
import PasswordForm from '../components/PasswordForm';
import Alert from '../components/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '100%',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '55%'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '50%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '45%'
        },
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    form: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%',
        height: '100%',
        flexWrap: 'wrap'
    }
}));

function Profile() {
    const [user, setUser] = useState({});
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const [expanded, setExpanded] = useState(false);
    const classes = useStyles();

    document.title = "Locus de Control | Perfil"

    useEffect(() => {
        setUser(AuthService.getCurrentUser());
    }, [])

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const launchAlert = (message, type) => {
        setAlertOpen(true);
        setAlertMessage(message);
        setAlertType(type);
    }

    return (
        <PageContainer align="center" backgroundColor={palette.background} showLoginButton>
            <Typography variant="h5" style={{ margin: '1.2em' }}>Mi Cuenta</Typography>
            <div className={classes.root}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel1' ? <ExpandMoreIcon /> : <EditIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>Nombre de usuario</Typography>
                        <Typography className={classes.secondaryHeading}>{expanded !== 'panel1' ? user.username : ''}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <UsernameForm user={user} launchAlert={launchAlert}/>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel2' ? <ExpandMoreIcon /> : <EditIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography className={classes.heading}>Correo electrónico</Typography>
                        <Typography className={classes.secondaryHeading}>{expanded !== 'panel2' ? user.email : ''}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <EmailForm user={user} launchAlert={launchAlert}/>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel3' ? <ExpandMoreIcon /> : <EditIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography className={classes.heading}>Contraseña</Typography>
                        <Typography className={classes.secondaryHeading}>{expanded !== 'panel3' ? '********' : ''}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <PasswordForm launchAlert={launchAlert}/>
                    </AccordionDetails>
                </Accordion>
            </div>
            <Alert 
                open={alertOpen} 
                close={() => setAlertOpen(false)}
                type={alertType}
            >
                {alertMessage}
            </Alert>
        </PageContainer>
    )
}

export default Profile;
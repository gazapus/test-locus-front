import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton } from '@material-ui/core';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Table from '../components/Table';
import TestService from '../services/test.service';
import PageContainer from '../components/PageContainer';
import Modal from '../components/Modal';
import CloseIcon from '@material-ui/icons/Close';
import questions from '../data/questions';

const useStyles = makeStyles((theme) => ({
    table: {
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '100%',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '90%',
        },
        [theme.breakpoints.up('md')]: {
            width: '70%',
        },
    }
}))

function Results() {
    const [answers, setAnswers] = useState([]);
    const [testOpen, setTestOpen] = useState({});

    const classes = useStyles();

    useEffect(() => {
        TestService.getByUser()
            .then(res => setAnswers(res.data))
            .catch(err => alert(err.response.data.message));
    }, [])

    function deleteTest(id) {
        confirmAlert({
            title: '¿Eliminar Registro?',
            buttons: [
                {
                    label: 'Confirmar',
                    onClick: () => {
                        TestService.remove(id)
                            .then(res => {
                                let answersUpdated = [...answers];
                                let indexToRemove = answersUpdated.findIndex(e => e.id === id);
                                answersUpdated.splice(indexToRemove, 1);
                                setAnswers(answersUpdated);
                            })
                            .catch(err => alert(err.response.data.message))
                    }
                },
                {
                    label: 'Cancelar',
                }
            ]
        });
    }

    function openDetails(test) {
        setTestOpen(test)
    }

    return (
        <PageContainer align="center" showLoginButton >
            <Typography variant="h4" style={{ margin: '1em' }}>Resultados</Typography>
            <div className={classes.table}>
                <Table answers={answers} onDelete={deleteTest} onDetails={openDetails} />
            </div>
            <Modal open={Object.keys(testOpen).length !== 0} >
                <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                    <IconButton color="secondary" onClick={() => setTestOpen({})}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5em' }}>
                    <Typography variant="h5" style={{ margin: '0.2em' }}>Detalles</Typography>
                    <div style={{ width: '100%' }}>
                        <Typography variant="h6">{testOpen.alias}</Typography>
                        <Typography variant="body2">{testOpen.locus}</Typography>
                        <Typography variant="body2">Interno: {testOpen.external}</Typography>
                        <Typography variant="body2">Externo: {testOpen.internal}</Typography>
                        <Typography variant="body2">Fecha: {testOpen.createdAt}</Typography>
                    </div>
                    {
                        testOpen.results ?
                            <ol style={{ paddingLeft: 0 }}>
                                {
                                    questions.map((answer, index) =>
                                        <li key={index}>
                                            <div style={{ margin: '0.5em' }}>
                                                <Typography variant="caption" color={testOpen.results[index] === 0 ? 'primary' : 'initial'}>
                                                    A - {answer.optionA}
                                                </Typography>
                                                <span>{testOpen.results[index] === 0 ? '✔' : ''}</span><br />
                                                <Typography variant="caption" color={testOpen.results[index] === 1 ? 'primary' : 'initial'}>
                                                    B - {answer.optionB}
                                                </Typography>
                                                <span>{testOpen.results[index] === 1 ? '✔' : ''}</span>
                                            </div>
                                        </li>
                                    )
                                }
                            </ol>
                            : ''
                    }
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <IconButton color="secondary" onClick={() => setTestOpen({})}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                </div>
            </Modal>
        </PageContainer>
    )
}

export default Results;
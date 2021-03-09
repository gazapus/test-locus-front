import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import palette from '../utils/palette';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        borderStyle:'solid',
        boxSizing: 'border-box',
        padding: '1em',
        borderColor: palette.border,
        backgroundColor: 'white',
        margin: '1em', 
        [theme.breakpoints.between('xs', 'sm')]: {
            borderStyle: 'none',
            width: '100%',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '75%',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '60%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '50%',
        },
    },
    title: {
        color: palette.textDark,
        margin: '3vmax'
    },
    optionsContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    optionButton: {
        padding: '1em',
        fontSize: '1.1em',
        marginTop: '1em',
        textTransform: 'none',
    },
    buttonContainer: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: 'flex-end',
        margin: '1.5em 0 1.5em 0',
    },
}));


function Question({ question, optionA, optionB, saveAnswer, final = false }) {
    const [optionChosen, setOptionChosen] = useState(-1);
    const classes = useStyles();

    useEffect(() => {
        setOptionChosen(-1);
    }, [question])


    function handleSubmit() {
        if (optionChosen === -1) {
            alert('Debe elegir una opción');
        } else {
            saveAnswer(optionChosen);
        }
    }

    return (
        <div className={classes.root}>
            <Typography variant={window.innerWidth < 800 ? "h5" : "h4"} className={classes.title}>
                {question}
            </Typography>
            <div className={classes.optionsContainer}>
                <Button
                    size="large"
                    color="primary"
                    variant={optionChosen === 0 ? "contained" : "outlined"}
                    onClick={() => setOptionChosen(0)}
                    className={classes.optionButton}
                >
                    {'A - ' + optionA}
                </Button>
                <Button
                    size="large"
                    color="primary"
                    variant={optionChosen === 1 ? "contained" : "outlined"}
                    onClick={() => setOptionChosen(1)}
                    className={classes.optionButton}
                >
                    {'B - ' + optionB}
                </Button>
            </div>
            <div className={classes.buttonContainer}>
                <Button
                    size="large"
                    color="secondary"
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={optionChosen === -1}
                >
                    {final ? 'Finalizar' : 'Siguiente'}
                </Button>
            </div>
        </div>
    )
}

export default Question;
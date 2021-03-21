import { makeStyles } from '@material-ui/core/styles';
import { useRef, useState } from 'react';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    StyledContainer: {
        display: 'flex',
        boxSizing: 'border-box',
        minWidth: '3em',
        flexGrow: 1
    },
    StyledText: {
        borderStyle: 'none none solid none',
        borderColor: '#EE6C4D',
        borderWidth: '2px',
        fontSize: '1.2em',
        color: '#293241',
        fontFamily: 'Roboto, sans-serif',
        flexGrow: 1,
        padding: '0.5em 0.6em 0.5em 0.6em',
        '&:focus': {
            outline: 'none',
        }
    },
    StyledCopyButton: {
        fontFamily: 'Roboto',
        backgroundColor: '#EE6C4D',
        borderStyle: 'none',
        fontSize: '1em',
        fontWeight: 'bold',
        padding: '0.4em 0.5em 0.4em 0.5em',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#e96240',
        },
        '&:focus': {
            outline: 'none',
        }
    },
    alert: {
        position: 'absolute',
        top: '1em',
        right: '1em',
        display: 'flex',
        zIndex: 1100,
    }
}))

function CopyableText({ children }) {
    const textRef = useRef();
    const [mouseDown, setMouseDown] = useState(false);
    const [alertFlag, setAlertFlag] = useState(0);
    const classes = useStyles();

    function copyText() {
        selectText();
        navigator.clipboard.writeText(children);
        setAlertFlag(alertFlag + 1)
    }

    function selectText() {
        textRef.current.select();
        textRef.current.setSelectionRange(0, 99999);
    }

    return (
        <div className={classes.StyledContainer}>
            <input className={classes.StyledText}
                type="text"
                ref={textRef}
                value={children}
                onChange={() => { }}
                onClick={selectText}
                selected={mouseDown}
            />
            <button className={classes.StyledCopyButton}
                onClick={copyText}
                onMouseDown={() => setMouseDown(true)}
                onMouseUp={() => setMouseDown(false)}
            >
                COPIAR
            </button>
            { alertFlag !== 0 ? 
                <div className={classes.alert}>
                    <Alert onClose={() => { setAlertFlag(0) }}>Enlace copiado al portapapeles</Alert>
                </div> 
                : ''
            }
        </div>
    )
}

export default CopyableText;
import { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    alert: {
        position: 'absolute',
        top: '1em',
        right: '1em',
        display: 'flex',
        zIndex: 1100,
    }
}));

function AlertWindow({ children, open, close, type }) {
    const classes = useStyles();
    const alertRef = useRef();

    useEffect(() => {
        if (!alertRef.current) return;
        let escala = 0.002;
        alertRef.current.style.opacity = 1;
        var fadeEffect = setInterval(function () {
            if (alertRef.current.style.opacity > 0) {
                alertRef.current.style.opacity -= escala;
                if (alertRef.current.style.opacity < 0.9) escala = 0.07;
            }
            else {
                clearInterval(fadeEffect);
                close();
            }
        }, 100);
        return (() => clearInterval(fadeEffect))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [alertRef, open, type]);
    
    return open ?
        <div className={classes.alert}>
            <Alert onClose={() => close()} ref={alertRef} color={type}>{children}</Alert>
        </div> : '';
}

export default AlertWindow;
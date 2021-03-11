import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        [theme.breakpoints.between('xs', 'md')]: {
            width: '95%',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '70%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '50%',
        },
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: 0,
        minHeight: '30vh'
    },
    
}));

function SimpleModal({ children, open }) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    return (
        <Modal
            open={open}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div style={modalStyle} className={classes.paper}>
                {children}
            </div>
        </Modal>
    );
}

export default SimpleModal;

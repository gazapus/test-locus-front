import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    button: {
        marginLeft: '1em',
        padding: 0
    }
});

export default function BasicTable({ answers = [], onDetails, onDelete }) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Alias</TableCell>
                        <TableCell align="left">Locus</TableCell>
                        <TableCell align="left">Grado</TableCell>
                        <TableCell align="left">Institución</TableCell>
                        <TableCell align="left">Sexo</TableCell>
                        <TableCell align="left">Edad</TableCell>
                        <TableCell align="left">Detalles</TableCell>
                        <TableCell align="left"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {answers.map((row) => (
                        <TableRow key={row.id} hover={true}>
                            <TableCell component="th" scope="row">{row.alias}</TableCell>
                            <TableCell align="left">{row.locus}</TableCell>
                            <TableCell align="left">{row.grade}</TableCell>
                            <TableCell align="left">{row.institution}</TableCell>
                            <TableCell align="left">{row.sex}</TableCell>
                            <TableCell align="left">{row.age}</TableCell>
                            <TableCell align="left">
                                <Button className={classes.button} color="primary" onClick={() => onDetails(row)}>
                                    Ver
                                </Button>
                            </TableCell>
                            <TableCell align="left">
                                <IconButton className={classes.button} color="secondary" onClick={() => onDelete(row.id)}>
                                    <DeleteForeverIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

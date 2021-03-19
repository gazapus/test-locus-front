import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '../components/Table';
import TestService from '../services/test.service';

function Results(){
    const [ answers, setAnsers ] = useState([]);

    useEffect(() => {
        TestService.getByUser()
            .then(res => setAnsers(res.data))
            .catch(err => console.error(err));
    }, [])

    return(
        <Table answers={answers}/>
    )
}

export default Results;
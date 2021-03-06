import { useState, useEffect } from 'react';
import RequestChangeService from '../services/requestchange.service';
import PageContainer from '../components/PageContainer';
import { CircularProgress, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';

function withProcessChange(action, WrappedComponent) {

    return () => {
        const { id } = useParams();
        const [loading, setLoading] = useState(true);
        const [errorMessage, setErrorMessage] = useState('')
        const [changeAccepted, setChangeAccepted] = useState(false);

        useEffect(() => {
            switch(action) {
                case "confirm": {
                    RequestChangeService.confirm(id)
                        .then(res => setChangeAccepted(true))
                        .catch(err => setErrorMessage(err.response.data.message))
                        .finally(() => setLoading(false));
                    break;
                }
                case "cancel": {
                    RequestChangeService.cancel(id)
                        .then(res => setChangeAccepted(true))
                        .catch(err => setErrorMessage(err.response.data.message))
                        .finally(() => setLoading(false));
                    break;
                }
                case "changeemail": {
                    RequestChangeService.confirmChangePassword(id)
                        .then(res => setChangeAccepted(true))
                        .catch(err => setErrorMessage(err.response.data.message))
                        .finally(() => setLoading(false));
                    break;
                }
                default: setChangeAccepted(false); setLoading(false); break;
            }
        }, [id])

        if(loading) return (
            <PageContainer align="center">
                <div>
                    <CircularProgress/>
                    <Typography variant="h6">Procesando cambios</Typography> 
                </div>
            </PageContainer>
        )
        return (
            <PageContainer>
                {
                    changeAccepted ? 
                        <WrappedComponent /> 
                        : 
                        <Typography variant="h6" color="secondary" style={{margin: '2em'}}>
                            {'Error: ' + errorMessage}
                        </Typography> 
                }
            </PageContainer>
        )
    }
}

export default withProcessChange;
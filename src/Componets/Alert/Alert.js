import React, { startTransition, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

function Alert(props) {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar(); 

    const alert = useSelector(state => state.alert);
    console.log(alert);

    useEffect( () => {  
      if(alert.text !== ''){
        enqueueSnackbar(alert, {
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          }
        } );     
      }
    },[alert.text]);
    return (
        <div>
            
        </div>
    );
}

export default Alert;
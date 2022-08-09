import React, { startTransition, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { RestateAlert } from '../../Redux/Action/alertAction';
import { useDispatch } from 'react-redux'

function Alert(props) {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar(); 
    const dispatch = useDispatch();

    const alert = useSelector(state => state.alert);
    console.log(alert);

    useEffect( () => {  
      if(alert.text !== ''){
        enqueueSnackbar(alert.text, {
          variant :alert.color,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        } );     
      }
      setTimeout((dispatch(RestateAlert()))  
        
     , 2000);
    },[alert.text]);
    return (
        <div>
            
        </div>
    );
}

export default Alert;
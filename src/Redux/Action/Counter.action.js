 import  * as actiontypes from'../Actiontypes'; 

export const incrementCounter = () => (dispatch) => { 
    dispatch({type:actiontypes.INCREMENTCOUNTER})

}

export const decrementCounter = () => (dispatch) => { 
    dispatch({type:actiontypes.DECREMENTCOUNTER})

}

 
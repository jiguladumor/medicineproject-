import React from 'react'; 
import { useDispatch ,useSelector } from 'react-redux';
import { decrementCounter, incrementCounter } from '../../Redux/Action/Counter.action';

function About(props) { 
 const dispatch = useDispatch();
 const cmi= useSelector( state=>state.counter)

    const handleincrement = () => {
              dispatch(incrementCounter())
   }   

   const handledecrement = () => {
       dispatch(decrementCounter())

     
   }
    return ( 
     <>  
      <h1>redux</h1> 
       <button onClick={ () => handleincrement () }>+</button>
       <p>{cmi.counter}</p>
       <button onClick={ () => handledecrement () }>-</button>
     </>

    );
}

export default About;
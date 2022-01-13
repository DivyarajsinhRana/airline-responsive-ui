
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllAirline } from '../../auth/_redux/authaction'
const Airline = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.airline);
    console.log("airline data in comp>>>>",state);
    useEffect(()=>{
        dispatch(getAllAirline());
    },[])
    return (
        
            
        
    )
}

export default Airline

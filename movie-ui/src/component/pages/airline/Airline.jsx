
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllAirline } from '../../auth/_redux/authaction'
import Airlinecard from './Airlinecard';
const Airline = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.airline);
    // console.log("airline data in comp>>>>",state);
    useEffect(()=>{
        dispatch(getAllAirline());
    },[])
    const airlinedata = state && state.slice(0,50);
    console.log(airlinedata);
    return (
        <>
        <div className='row mt-2'>{
               airlinedata && airlinedata.map((item,index)=>{
                    return (
                        <div className='col gx-2 h-auto'>
                            <Airlinecard key={index} item={item}/>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Airline

import { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllAirline } from '../../auth/_redux/authaction'
import Airlinecard from './Airlinecard';
import Filter from '../filter/Filter';
import './airline.css'

const Airline = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.airline);
    // console.log("airline data in comp>>>>",state);
    useEffect(()=>{
        dispatch(getAllAirline());
    },[])
    const airlinedata = state && state.slice(0,50);
    // console.log(airlinedata);
    const [airline,setAirline] = useState([]);
    const [filterairline,setfilterAirline] = useState([]);
    useEffect(()=>{
        setAirline(state);
        setfilterAirline(state);
    },[state])
    const length = filterairline && filterairline.length;
    const [search,setSearch] = useState('');
    const handleChange = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value)
        if (e.target.value === "All" | '') {
            setfilterAirline(airline)
        }
        else {
            setfilterAirline(airline.filter(item => item.country === e.target.value))
        }
    }
   
  

    return (
    
       <>
        <div className='row'> 
            <Filter length={length} handleChange={handleChange} search={search}/>
        </div>

        <div className='airlinecard mt-2'>{
               filterairline && filterairline.map((item,index)=>{
                    return (
                        <div key={index} className='h-auto mx-3'>
                            <Airlinecard  item={item}/>
                        </div>
                    )
                })
            }
        </div>
    
        </>
    )
}

export default Airline

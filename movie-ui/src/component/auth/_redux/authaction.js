import axios from "axios"
import { GET_AIRLINE } from "./authcrud"

export const getAirline = (movie)=>{
    return {
        type : "getairline",
        payload: movie
    }
}

export const getAllAirline = ()=>{
    return (dispatch) => {
        axios.get(GET_AIRLINE).then((res)=>{
            // console.log(res);
            // console.log(res.data)
            dispatch(getAirline(res.data));
            return res
        }).catch(error=>{
            console.log(error.message);
            return error.message})
    }
}
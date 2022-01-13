const initialstate = null;

export const airlinereducer = (state=initialstate,action)=>{

    if(action.type==="getairline"){
      state = action.payload;
      // console.log("aitline data>>>>>",state)
      return state
    }
    else{
        return state
    }

}
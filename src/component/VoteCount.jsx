import React, {useReducer, useState } from 'react'


const reducer = (state,action)=>{
    switch(action){
        case "handleParty1Count":
            return [state[0]+1,state[1],state[2]];
        case "handleParty2Count":
            return [state[0],state[1]+1,state[2]];
        case "handleParty3Count":
            return [state[0],state[1],state[2]+1]
    }
}
function VoteCount() {

    // const [state, setState] = useState([0,0,0])

    // const handleParty1Count = ()=>{
    //     setState([state[0]+1,state[1],state[2]])
    // }

    // const handleParty2Count = ()=>{
    //     setState([state[0],state[1]+1,state[2]])
    // }

    // const handleParty3Count = ()=>{
    //     setState([state[0],state[1],state[2]+1])
    // }


    const initialState = [0,0,0]
    const [state,dispatch] = useReducer(reducer,initialState)

    

  return (
    <div className='voterContainer'>
    <div className='voterSubContainer'>
    <h1 style={{color:"darkblue"}}>Vote Count App</h1>
    {/* <div className='voteBtnContainer'>
        <button className='voteBtn' onClick={handleParty1Count}>Party1  </button>
        
        <button className='voteBtn' onClick={handleParty2Count}>Party2</button>
       
        <button className='voteBtn' onClick={handleParty3Count}>Party3</button>
      
    </div> */}

    <div className='voteBtnContainer'>
        <button className='voteBtn' onClick={()=>dispatch("handleParty1Count")}>Party1  </button>
        
        <button className='voteBtn' onClick={()=>dispatch("handleParty2Count")}>Party2</button>
       
        <button className='voteBtn' onClick={()=>dispatch("handleParty3Count")}>Party3</button>
      
    </div>

    <div className='display'>
        <span className='voteDisplay'>Vote Count : {state[0]}</span> <br /><br />
        <span className='voteDisplay'>Vote Count: {state[1]}</span> <br /><br />
        <span className='voteDisplay'>Vote Count : {state[2]}</span> <br /><br />
    </div>
    </div>
    </div>
  )
}

export default VoteCount
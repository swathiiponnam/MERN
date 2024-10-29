import React, { useState } from 'react'

function VoteCount() {

    const [state, setState] = useState([0,0,0])

    const handleParty1Count = ()=>{
        setState([state[0]+1,state[1],state[2]])
    }

    const handleParty2Count = ()=>{
        setState([state[0],state[1]+1,state[2]])
    }

    const handleParty3Count = ()=>{
        setState([state[0],state[1],state[2]+1])
    }

    // const handlePartyCount = ()=>{

    // }

  return (
    <div>
        <button onClick={handleParty1Count}>Party1</button>
        <p>{state[0]}</p>
        <button onClick={handleParty2Count}>Party2</button>
        <p>{state[1]}</p>
        <button onClick={handleParty3Count}>Party3</button>
        <p>{state[2]}</p>

        {
            state.map((ele)=>{
                return(
                    <div>
                    <p>{ele}</p>
                    {/* <button onClick={handlePartyCount}>Vote</button> */}
                </div>
                )
            })
        }
    </div>
  )
}

export default VoteCount
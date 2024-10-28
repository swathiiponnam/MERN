import React from 'react'

function Card(props) {

    console.log(props);
    let {data} = props
    
  return (
    <div keyname={props.keyname} className='card'>
                <img src= {data.thumbnail} alt="car image" 
                className='cardImage'/>
                <p className='cardTitle'><span>Name: </span>{data.title}</p>
                <p className='cardPrice'><span>Price: </span>{data.price}</p>
                <p className='cardDisc'><span>Description: </span>A well maintained vintage car</p>
    </div>
  )
}

export default Card
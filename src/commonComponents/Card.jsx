import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { myContext } from '../App';
import { useDispatch } from 'react-redux';
import { addItem } from '../util/redux/slices/cartSlice';

function Card(props) {

    // console.log(props);
    let {data} = props


    // ...................redux code..........................
    // step 7: useDispatch method will give dispatch function
    
    const dispatch = useDispatch()
    // console.log(dispatch,"from dispatch");
    


    // .................context api code..................
    const {dataName} = useContext(myContext)
  
  return (
    <div keyname={props.keyname} className='card'>
                <img src= {data.thumbnail} alt="car" 
                className='cardImage'/>
                <button onClick={()=>{dispatch(addItem(data))}}>Add +</button>
                <p className='cardTitle'><span>Name: </span>{data.title}</p>
                <p className='cardPrice'><span>Price: </span>{data.price}</p>
                <p className='cardDisc'><span>Description: </span>A well maintained vintage car</p>
                <p><span>Username : </span>{dataName}</p>
    </div>

  )
}

export default Card
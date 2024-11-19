import React, { useContext } from 'react'
import {myNavImage} from '../util/constants'
import { Link } from 'react-router-dom'
import { myContext } from '../App'
import { useSelector } from 'react-redux'



function Nav() {

  // .............code for redux..........................
  
  //step6:  subscribing to the store using useSelector hook
  const data = useSelector((store)=> store.cart.items)
  console.log(data,"data from selector");
  

  // ..............code for context api static display..................
  // const {dataName} = useContext(myContext)
  return (
    <>
    <section className = 'navBar'>
        <aside className='logo'>
            <img src={myNavImage}
            height="80px" width="80px"/>
        </aside>
        <aside className='navList'>
            <ul>
                <Link to={'/swiggy'}><li>Home</li></Link> 
                <Link to="/aboutus"><li>About</li></Link>
                <Link to={'/contactus'}><li>Contact Us</li></Link>
                <li><Link to={'/cart'}>Cart({data.length} items)</Link></li>
                <li><Link to={'/login'}>Login </Link></li>
                {/* <li>{dataName}</li> */}
            </ul>
        </aside>
    </section>
    </>
  )
}

export default Nav
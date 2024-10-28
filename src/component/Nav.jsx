import React from 'react'
import {myNavImage} from '../util/constants'
function Nav() {
  return (
    <>
    <section className = 'navBar'>
        <aside className='logo'>
            <img src={myNavImage}
            height="80px" width="80px"/>
        </aside>
        <aside className='navList'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </aside>
    </section>
    </>
  )
}

export default Nav
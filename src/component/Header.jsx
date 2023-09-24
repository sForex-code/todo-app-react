import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (<>
    <nav>daily goals</nav>
    <div className='navbar'>
      <Link to='/'>home</Link>
      <Link to='contact'>contact</Link>
      <Link to='/about'>about</Link>
    </div>
    </>
    )
}
export default Header
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <ul>
            <li><Link to='/footer'>terms and conditions</Link></li>
        </ul>
    </footer>
  )
}

export default Footer
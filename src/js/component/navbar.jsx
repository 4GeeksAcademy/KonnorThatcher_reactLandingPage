import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-dark d-flex justify-content-between p-2'>
        <h3 className='ms-3 text-light'>Start Bootstrap</h3>
        <ul className="nav">
            <li className="nav-item"><a href="#" className="nav-link text-light">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link text-light">About</a></li>
            <li className="nav-item"><a href="#" className="nav-link text-light">Services</a></li>
            <li className="nav-item"><a href="#" className="nav-link text-light">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar
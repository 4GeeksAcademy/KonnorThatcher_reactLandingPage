import React from 'react'

const Jumbotron = () => {
  return (
    <div className="p-4 mb-4 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5 text-start">
        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button className="btn btn-primary btn-lg" type="button">Call to Action!</button>
      </div>
    </div>
  )
}

export default Jumbotron;
import React from 'react'

function Testimonial() {
  return (
    <div>
        <h1 className='text-center mt-5'>Testimonials</h1>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>John Doe</h5>
                            <p className='card-text'>This service is amazing! I found a parking spot in no time.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Jane Smith</h5>
                            <p className='card-text'>Highly recommend PARKLANKA! Very user-friendly.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Alice Johnson</h5>
                            <p className='card-text'>A lifesaver! I never have to worry about parking again.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
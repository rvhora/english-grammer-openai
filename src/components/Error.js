import React from 'react';
import image from '../assets/404.png';

const Error = () => {
  return (
    <div className='text-center error-div'>
        <img src={image} alt="" className='error-img' />
        <h3>Page Not Found!</h3>
    </div>
  )
}

export default Error
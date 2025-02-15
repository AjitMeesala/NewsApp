import React from 'react'
import loading from './loading.gif'

function Spinner() {
  return (
    <div className='my-3 text-center'>
      <img src={loading} alt="" />
    </div>
  )
}

export default Spinner

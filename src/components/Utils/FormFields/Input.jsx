import React from 'react'

const Input = props => {
  return (
    <div className='field-container'>
        <span className='label'>{props?.label}</span>
        <input {...props} className='field'/>
    </div>
  )
}

export default Input
import React from 'react'

const Form = props => {
  return (
    <div className='form-mn'>
        <div className="heading">
            <h2>{props?.heading}</h2>
        </div>
        <form action="post">
            {props.children}
        </form>
    </div>
  )
}

export default Form
import React from 'react'
import UserAuth from '../../Layout/UserAuth/UserAuth'
import Form from '../../Layout/Form/Form'
import Input from '../../Utils/FormFields/Input'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  
  const navigate = useNavigate()

  const onRegisterHandler = e => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <UserAuth>
      <Form heading="Register Yourself">
        <Input label="Name" placeHolder="Enter your name"/>
        <Input label="Username" placeHolder="Enter your user name"/>
        <Input label="Password" placeHolder="Enter your password" type="password"/>
        <Input label="Confirm password" placeHolder="Confirm your password" type="password"/>
        <Input label="Mobile no." placeHolder="Enter your mobile no." type="number"/>
        <footer>
          <button className='btn contained' onClick={onRegisterHandler}>REGISTER</button>
        </footer>
      </Form>
    </UserAuth>
  )
}

export default RegisterPage
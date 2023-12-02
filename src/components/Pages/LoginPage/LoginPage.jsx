import { useNavigate } from "react-router-dom"
import Form from "../../Layout/Form/Form"
import UserAuth from "../../Layout/UserAuth/UserAuth"
import Input from "../../Utils/FormFields/Input"

const LoginPage = () => {

  const navigate = useNavigate()

  const onLoginHandler = e => {
    e.preventDefault()
    navigate('/')
  }
  return (
    <UserAuth>
        <Form heading="Welcome">
          <Input label="Username" placeHolder="Enter user name"/>
          <Input label="Password" placeHolder="Enter your password" type="password"/>
          <footer>
            <button className="btn contained" onClick={onLoginHandler}>LOG IN</button>
          </footer>
        </Form>
    </UserAuth>
  )
}

export default LoginPage
import Form from "../../Layout/Form/Form"
import UserAuth from "../../Layout/UserAuth/UserAuth"
import Input from "../../Utils/FormFields/Input"

const LoginPage = () => {
  return (
    <UserAuth>
        <Form heading="Welcome">
          <Input label="Username" placeHolder="Enter user name"/>
          <Input label="Password" placeHolder="Enter your password" type="password"/>
          <footer>
            <button className="btn contained">LOG IN</button>
          </footer>
        </Form>
    </UserAuth>
  )
}

export default LoginPage
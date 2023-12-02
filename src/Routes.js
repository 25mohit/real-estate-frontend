import { Route, Routes } from "react-router-dom"
import Home from "./components/Pages/Home/Home"
import LoginPage from "./components/Pages/LoginPage/LoginPage"
import RegisterPage from "./components/Pages/RegisterPage/RegisterPage"

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/user-login" exact element={<LoginPage />} />
        <Route path="/user-register" exact element={<RegisterPage />} />
    </Routes>
  )
}

export default AllRoutes
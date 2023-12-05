import { Route, Routes } from "react-router-dom"
import Home from "./components/Pages/Home/Home"
import LoginPage from "./components/Pages/LoginPage/LoginPage"
import RegisterPage from "./components/Pages/RegisterPage/RegisterPage"
import RealStatePage from "./components/Pages/RealStatePage/RealStatePage"
import AllRealState from "./components/Pages/AllRealState/AllRealState"

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/user-login" exact element={<LoginPage />} />
        <Route path="/user-register" exact element={<RegisterPage />} />
        <Route path="/real-state-detail/:propertyID" exact element={<RealStatePage />} />
        <Route path="/all-real-estate" exact element={<AllRealState />} />
    </Routes>
  )
}

export default AllRoutes
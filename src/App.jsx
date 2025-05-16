import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import MainLayout from "./Layout/MainLayout"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Error from "./pages/Error"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="*" element={<Error/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

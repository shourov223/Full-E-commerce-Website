import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import MainLayout from "./Layout/MainLayout"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Error from "./pages/Error"
import ProductPage from "./pages/ProductPage"
import Wishlist from "./pages/Wishlist"
import Cart from "./pages/Cart"
import BillingDetails from "./pages/BillingDetails"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
          <Route path="/productPage" element={<ProductPage />} />
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/billingdetails" element={<BillingDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

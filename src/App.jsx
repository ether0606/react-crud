import { BrowserRouter, Routes, Route } from "react-router";
import Header from './components/Header.jsx'
import Home from './components/Pages/Home/Index.jsx'
import Footer from './components/Footer.jsx'
import ShopPage from './components/Pages/ShopPage.jsx'
import ProductDetailPage from './components/ProductDetailPage.jsx'
import LoginPage from './components/LoginPage.jsx'
import RegisterPage from './components/RegisterPage.jsx'
import DashboardPage from './components/Pages/DashboardPage.jsx'

function App() {
 
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

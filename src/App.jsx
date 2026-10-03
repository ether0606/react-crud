import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProductSection from './components/ProductSection.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import InteriorDesign from './components/InteriorDesign.jsx'
import PopularProducts from './components/PopularProducts.jsx'
import Testimonials from './components/Testimonials.jsx'
import Journal from './components/Journal.jsx'
import Footer from './components/Footer.jsx'
import ShopPage from './components/ShopPage.jsx'
import ProductDetailPage from './components/ProductDetailPage.jsx'
import LoginPage from './components/LoginPage.jsx'
import RegisterPage from './components/RegisterPage.jsx'
import DashboardPage from './components/DashboardPage.jsx'

function App() {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/'
  const productMatch = currentPath.match(/^\/product\/(\d+)$/)
  const productId = productMatch ? Number(productMatch[1]) : null
  const page = productId !== null
    ? <ProductDetailPage productId={productId} />
    : currentPath === '/shop'
      ? <ShopPage />
      : currentPath === '/login'
        ? <LoginPage />
        : currentPath === '/register'
          ? <RegisterPage />
          : currentPath === '/dashboard'
            ? <DashboardPage />
            : null

  return (
    <>
         <Header />
         {page ? <main>{page}</main> : (
           <main>
             <Hero />
             <ProductSection />
             <WhyChooseUs />
             <InteriorDesign />
             <PopularProducts />
             <Testimonials />
             <Journal />
           </main>
         )}
         <Footer />
    </>
  )
}

export default App

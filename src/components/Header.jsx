import { useState } from 'react'

const navigation = [
  { label: 'Home', href: '/#home' },
  { label: 'Shop', href: '/shop' },
  { label: 'About us', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Blog', href: '/#journal' },
  { label: 'Contact us', href: '/#contact' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/'
  const isAccountRoute = ['/login', '/register', '/dashboard'].includes(currentPath)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation">
      <div className="container">
        <a className="navbar-brand" href="/#home" onClick={closeMenu}>Furni<span>.</span></a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="furni-navigation"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="furni-navigation">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            {navigation.map((item) => (
              <li className={(item.label === 'Shop' && currentPath === '/shop') || (item.label === 'Home' && currentPath === '/') ? 'active' : ''} key={item.label}>
                <a className="nav-link" href={item.href} onClick={closeMenu}>{item.label}</a>
              </li>
            ))}
          </ul>
          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-md-5">
            <li><a className="nav-link" href={isAccountRoute ? '/dashboard' : '/login'} aria-label={isAccountRoute ? 'Your account dashboard' : 'Sign in to your account'}><img src="/furni/images/user.svg" alt="" /></a></li>
            <li><a className="nav-link" href="/shop" aria-label="Shopping cart"><img src="/furni/images/cart.svg" alt="" /></a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
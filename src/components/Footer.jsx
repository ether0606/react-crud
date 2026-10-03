import { useState } from 'react'

const footerColumns = [
  ['About us', 'Services', 'Journal', 'Contact us'],
  ['Support', 'Knowledge base', 'Live chat'],
  ['Jobs', 'Our team', 'Leadership', 'Privacy Policy'],
  ['Nordic Chair', 'Kruzo Aero', 'Ergonomic Chair'],
]

function Footer() {
  const [isSubscribed, setIsSubscribed] = useState(false)

  function handleSubscribe(event) {
    event.preventDefault()
    setIsSubscribed(true)
  }

  return (
    <footer className="footer-section" id="contact">
      <div className="container relative">
        <div className="sofa-img"><img src="/furni/images/sofa.png" alt="" className="img-fluid" /></div>
        <div className="row">
          <div className="col-lg-8">
            <div className="subscription-form" id="newsletter">
              <h2 className="d-flex align-items-center">
                <span className="me-2"><img src="/furni/images/envelope-outline.svg" alt="" className="img-fluid" /></span>
                <span>Subscribe to Newsletter</span>
              </h2>
              <form className="row g-3" onSubmit={handleSubscribe}>
                <div className="col-auto"><label className="visually-hidden" htmlFor="subscriber-name">Your name</label><input id="subscriber-name" type="text" className="form-control" placeholder="Enter your name" required /></div>
                <div className="col-auto"><label className="visually-hidden" htmlFor="subscriber-email">Your email</label><input id="subscriber-email" type="email" className="form-control" placeholder="Enter your email" required /></div>
                <div className="col-auto"><button className="btn btn-primary" type="submit" aria-label="Subscribe"><span className="fa fa-paper-plane" aria-hidden="true" /></button></div>
              </form>
              {isSubscribed && <p className="subscription-message" role="status">Thanks for subscribing. Look out for our next update.</p>}
            </div>
          </div>
        </div>
        <div className="row g-5 mb-5">
          <div className="col-lg-4">
            <div className="mb-4 footer-logo-wrap"><a href="/#home" className="footer-logo">Furni<span>.</span></a></div>
            <p className="mb-4">Thoughtful furniture for the everyday moments that make a home. Find pieces that feel good to live with.</p>
            <ul className="list-unstyled custom-social">
              <li><a href="/#contact" aria-label="Facebook"><span className="fa-brands fa-facebook-f" /></a></li>
              <li><a href="/#contact" aria-label="Twitter"><span className="fa-brands fa-twitter" /></a></li>
              <li><a href="/#contact" aria-label="Instagram"><span className="fa-brands fa-instagram" /></a></li>
              <li><a href="/#contact" aria-label="LinkedIn"><span className="fa-brands fa-linkedin" /></a></li>
            </ul>
          </div>
          <div className="col-lg-8">
            <div className="row links-wrap">
              {footerColumns.map((column, index) => (
                <div className="col-6 col-sm-6 col-md-3" key={index}>
                  <ul className="list-unstyled">
                    {column.map((label) => <li key={label}><a href={label === 'Services' ? '/#services' : label === 'Journal' ? '/#journal' : '/#contact'}>{label}</a></li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-top copyright">
          <div className="row pt-4">
            <div className="col-lg-6"><p className="mb-2 text-center text-lg-start">Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.</p></div>
            <div className="col-lg-6 text-center text-lg-end">
              <ul className="list-unstyled d-inline-flex ms-auto"><li className="me-4"><a href="/#contact">Terms &amp; Conditions</a></li><li><a href="/#contact">Privacy Policy</a></li></ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
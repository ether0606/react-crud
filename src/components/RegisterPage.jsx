import { useState } from 'react'
import { authApi } from '../lib/authApi.js'
import {Link} from 'react-router'

function RegisterPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      await authApi.register({ full_name: fullName, email, password })
      window.location.assign('/login?registered=1')
    } catch (requestError) {
      setError(requestError.message)
      setIsSubmitting(false)
    }
  }

  return (
    <section className="account-section">
      <div className="container">
        <div className="account-layout">
          <aside className="account-intro">
            <span className="account-kicker">A PLACE OF YOUR OWN</span>
            <h1>Make yourself at home.</h1>
            <p>Create an account to keep your details together and make it easier to return to the pieces you love.</p>
            <span className="account-intro-mark" aria-hidden="true">F.</span>
          </aside>
          <div className="account-form-panel">
            <span className="account-form-kicker">JOIN FURNI</span>
            <h2>Create account</h2>
            <p className="account-form-description">A few details and you’re all set.</p>
            {error && <p className="account-error" role="alert">{error}</p>}
            <form className="account-form" onSubmit={handleSubmit}>
              <label htmlFor="register-name">Full name</label>
              <input id="register-name" className="form-control" type="text" autoComplete="name" value={fullName} onChange={(event) => setFullName(event.target.value)} maxLength={100} required />
              <label htmlFor="register-email">Email address</label>
              <input id="register-email" className="form-control" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} maxLength={190} required />
              <label htmlFor="register-password">Password</label>
              <input id="register-password" className="form-control" type="password" autoComplete="new-password" value={password} onChange={(event) => setPassword(event.target.value)} minLength={8} maxLength={72} required />
              <p className="account-password-hint">Use at least 8 characters.</p>
              <button className="btn btn-secondary account-submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Creating account…' : 'Create account'}
              </button>
            </form>
            <p className="account-switch">Already have an account? <Link to="/login">Sign in</Link></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterPage
import { useState } from 'react'
import { authApi } from '../lib/authApi.js'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const wasRegistered = new URLSearchParams(window.location.search).get('registered') === '1'

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      await authApi.login({ email, password })
      window.location.assign('/dashboard')
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
            <span className="account-kicker">FURNI ACCOUNT</span>
            <h1>Your home, in good hands.</h1>
            <p>Sign in to keep your Furni details close and make your next visit feel familiar.</p>
            <span className="account-intro-mark" aria-hidden="true">F.</span>
          </aside>
          <div className="account-form-panel">
            <span className="account-form-kicker">WELCOME BACK</span>
            <h2>Sign in</h2>
            <p className="account-form-description">Use the email address linked to your account.</p>
            {wasRegistered && <p className="account-success" role="status">Your account is ready. Sign in to continue.</p>}
            {error && <p className="account-error" role="alert">{error}</p>}
            <form className="account-form" onSubmit={handleSubmit}>
              <label htmlFor="login-email">Email address</label>
              <input id="login-email" className="form-control" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
              <label htmlFor="login-password">Password</label>
              <input id="login-password" className="form-control" type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} required />
              <button className="btn btn-secondary account-submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Signing in…' : 'Sign in'}
              </button>
            </form>
            <p className="account-switch">New to Furni? <a href="/register">Create an account</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
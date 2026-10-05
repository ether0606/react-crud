import { useEffect, useState } from 'react'
import { authApi } from '../../lib/authApi.js'

function DashboardPage() {
  const [account, setAccount] = useState({ status: 'loading', user: null, message: '' })
  const [isSigningOut, setIsSigningOut] = useState(false)

  useEffect(() => {
    let isActive = true

    authApi.currentUser()
      .then((result) => {
        if (isActive) setAccount({ status: 'ready', user: result.user, message: '' })
      })
      .catch((error) => {
        if (isActive) setAccount({ status: 'error', user: null, message: error.message })
      })

    return () => {
      isActive = false
    }
  }, [])

  async function handleSignOut() {
    setIsSigningOut(true)
    try {
      await authApi.logout()
      window.location.assign('/login')
    } catch (error) {
      setAccount((current) => ({ ...current, message: error.message }))
      setIsSigningOut(false)
    }
  }

  if (account.status === 'loading') {
    return <section className="account-dashboard-section"><div className="container"><p role="status">Loading your account…</p></div></section>
  }

  if (!account.user) {
    return (
      <section className="account-dashboard-section">
        <div className="container account-signed-out">
          <span className="account-form-kicker">YOUR FURNI ACCOUNT</span>
          <h1>Sign in to see your account.</h1>
          <p>{account.message}</p>
          <a className="btn btn-secondary" href="/login">Go to sign in</a>
        </div>
      </section>
    )
  }

  const memberSince = new Intl.DateTimeFormat(undefined, { month: 'long', year: 'numeric' })
    .format(new Date(account.user.created_at.replace(' ', 'T')))

  return (
    <section className="account-dashboard-section">
      <div className="container">
        <div className="dashboard-heading">
          <div>
            <span className="account-form-kicker">YOUR FURNI ACCOUNT</span>
            <h1>Welcome home, {account.user.full_name.split(' ')[0]}.</h1>
            <p>Your account details, all in one place.</p>
          </div>
          <button className="btn btn-outline-secondary dashboard-signout" type="button" onClick={handleSignOut} disabled={isSigningOut}>
            {isSigningOut ? 'Signing out…' : 'Sign out'}
          </button>
        </div>

        {account.message && <p className="account-error" role="alert">{account.message}</p>}

        <div className="dashboard-content-grid">
          <section className="dashboard-panel" aria-labelledby="profile-heading">
            <div className="dashboard-panel-heading">
              <div className="dashboard-avatar" aria-hidden="true">{account.user.full_name.charAt(0).toUpperCase()}</div>
              <div><h2 id="profile-heading">Profile details</h2><p>Your personal account information</p></div>
            </div>
            <dl className="dashboard-profile-list">
              <div><dt>Full name</dt><dd>{account.user.full_name}</dd></div>
              <div><dt>Email address</dt><dd>{account.user.email}</dd></div>
              <div><dt>Member since</dt><dd>{memberSince}</dd></div>
            </dl>
          </section>

          <section className="dashboard-panel dashboard-shop-panel" aria-labelledby="shop-heading">
            <span className="fa fa-chair dashboard-shop-icon" aria-hidden="true" />
            <h2 id="shop-heading">Find a piece for your place</h2>
            <p>Explore thoughtful furniture made for everyday living.</p>
            <a className="btn btn-primary" href="/shop">Browse the collection</a>
          </section>
        </div>
      </div>
    </section>
  )
}

export default DashboardPage
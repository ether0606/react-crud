const apiBaseUrl = import.meta.env.VITE_AUTH_API_URL
  || `${window.location.protocol}//${window.location.hostname}/reactcrud/api`

async function request(endpoint, options = {}) {
  let response

  try {
    response = await fetch(`${apiBaseUrl}/${endpoint}`, {
      ...options,
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        ...(options.body ? { 'Content-Type': 'application/json' } : {}),
        ...options.headers,
      },
    })
  } catch {
    throw new Error('Unable to reach the account service. Check that Apache and MySQL are running.')
  }

  const result = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(result.message || 'The request could not be completed.')
  }
  return result
}

export const authApi = {
  register: (account) => request('register.php', { method: 'POST', body: JSON.stringify(account) }),
  login: (credentials) => request('login.php', { method: 'POST', body: JSON.stringify(credentials) }),
  currentUser: () => request('me.php'),
  logout: () => request('logout.php', { method: 'POST' }),
}
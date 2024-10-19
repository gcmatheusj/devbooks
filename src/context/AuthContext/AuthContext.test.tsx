import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { AuthProvider, AuthContext } from './AuthContex'
import { api } from '../../services/api'

const user = { id: 1, name: 'John Doe', email: 'john@example.com' }

const session = {
  user,
  accessToken: 'accessToken123',
  refreshToken: 'refreshToken123'
}

jest.spyOn(api, 'post').mockImplementation(() => {
  return Promise.resolve({ data: session })
})

jest.spyOn(api, 'get').mockImplementation(() => Promise.resolve({ data: user }))

function renderWithAuthContext() {
  const queryClient = new QueryClient()

  return render(
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AuthContext.Consumer>
          {(context) => (
            <>
              {context.isAuthenticated ? (
                <p>Authenticated</p>
              ) : (
                <p>Not Authenticated</p>
              )}

              <button
                onClick={async () =>
                  context.signIn({
                    email: user.email,
                    password: '12345678'
                  })
                }
              >
                Sign In
              </button>
              <button
                onClick={async () =>
                  context.signUp({
                    name: user.name,
                    email: user.email,
                    password: '12345678'
                  })
                }
              >
                Sign Up
              </button>
              <button onClick={async () => context.signOut()}>Sign Out</button>
            </>
          )}
        </AuthContext.Consumer>
      </AuthProvider>
    </QueryClientProvider>
  )
}

describe('AuthContext', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should start with not authenticated user', () => {
    renderWithAuthContext()

    expect(screen.getByText('Not Authenticated')).toBeInTheDocument()
    expect(screen.queryByText('Authenticated')).not.toBeInTheDocument()
  })

  it('should authenticate the user when login', async () => {
    renderWithAuthContext()

    expect(screen.getByText('Not Authenticated')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /sign in/i }))

    await waitFor(() => {
      expect(screen.getByText('Authenticated')).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(screen.queryByText('Not Authenticated')).not.toBeInTheDocument()
    })
  })

  it('should register the user when signUp', async () => {
    renderWithAuthContext()

    const apiPostSpy = jest.spyOn(api, 'post').mockImplementationOnce(() => {
      return Promise.resolve({ data: {} })
    })

    fireEvent.click(screen.getByRole('button', { name: /sign up/i }))

    await waitFor(() => {
      expect(apiPostSpy).toHaveBeenCalledWith('/user/signup', {
        name: user.name,
        email: user.email,
        password: '12345678'
      })
    })
  })

  it('should logout the user', async () => {
    renderWithAuthContext()

    fireEvent.click(screen.getByRole('button', { name: /sign in/i }))

    await waitFor(() => {
      expect(screen.getByText('Authenticated')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByRole('button', { name: /sign out/i }))

    await waitFor(() => {
      expect(screen.getByText('Not Authenticated')).toBeInTheDocument()
    })
  })
})
